"use client";

import { IconSize, buttonStyle, mobileButtonStyle } from "@/styles/style";
import useAuthModal from "@/hooks/useAuthModal";
import Button from "./Button";
import { useUser } from "@/hooks/useUser";
import HeaderAuth from "./HeaderAuth";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<Props> = ({ children, className }) => {
  const authModal = useAuthModal();
  const router = useRouter();

  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();

    // TODO: reset any playing songs
    router.refresh();

    if (error) toast.error(error.message);
    else toast.success("Logged Out");
  };

  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      <div className="w-full mb-4 items-center flex justify-between">
        <div className="hidden md:flex gap-x-2 items-center ">
          <button
            title="Back"
            className={buttonStyle}
            onClick={() => router.back()}
          >
            <RxCaretLeft className="text-white" size={IconSize.Large} />
          </button>
          <button
            title="Forward"
            className={buttonStyle}
            onClick={() => router.forward()}
          >
            <RxCaretRight className="text-white" size={IconSize.Large} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button title="Home" className={mobileButtonStyle}>
            <HiHome className="text-black" size={IconSize.Small} />
          </button>
          <button title="Home" className={mobileButtonStyle}>
            <BiSearch className="text-black" size={IconSize.Small} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          {user ? (
            <div className="flex gap-x-4 items-center">
              <Button onClick={handleLogout} className="bg-white px-6 py-2">
                Logout
              </Button>
              <Button onClick={() => router.push("/account")}>
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <HeaderAuth authModal={authModal} />
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
