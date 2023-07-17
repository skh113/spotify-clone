"use client";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { IconSize } from "@/styles/style";

import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  songID: string;
}

const LikeButton = ({ songID }: Props) => {
  const router = useRouter();
  const { supabaseClient } = useSessionContext();
  const authModal = useAuthModal();
  const { user } = useUser();
  const [isLiked, setLiked] = useState(false);

  useEffect(() => {
    if (!user?.id) return;

    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from("liked_songs")
        .select("*")
        .eq("user_id", user.id)
        .eq("song_id", songID)
        .single();

      if (!error && data) setLiked(true);
    };

    fetchData();
  }, [songID, supabaseClient, user?.id]);

  const Icon = isLiked ? AiFillHeart : AiOutlineHeart;

  const handleLike = async () => {
    if (!user) return authModal.onOpen();

    if (isLiked) {
      const { error } = await supabaseClient
        .from("liked_songs")
        .delete()
        .eq("user_id", user.id)
        .eq("song_id", songID);

      if (error) toast.error(error.message);
      else setLiked(false);
    } else {
      const { error } = await supabaseClient.from("liked_songs").insert({
        song_id: songID,
        user_id: user.id,
      });

      if (error) {
        toast.error(error.message);
      } else {
        setLiked(true);
        toast.success("Liked ❤️");
      }
    }
    router.refresh();
  };

  return (
    <button onClick={handleLike} className="hover:opacity-75 transition">
      <Icon color={isLiked ? "#22c55e" : "white"} size={IconSize.Default} />
    </button>
  );
};

export default LikeButton;
