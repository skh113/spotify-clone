import { Song } from "@/types";
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";

const useOnPlay = (songs: Song[]) => {
  const player = usePlayer();
  const authModal = useAuthModal();
  const { user } = useUser();

  const OnPlay = (id: string) => {
    if (!user) return authModal.onOpen();

    player.setID(id);
    player.setIDs(songs.map((song) => song.id));
  };

  return OnPlay;
};

export default useOnPlay;
