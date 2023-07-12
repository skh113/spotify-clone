"use client";

import { IconSize, buttonStyle, mobileButtonStyle } from "@/styles/style";
import useAuthModal from "@/hooks/useAuthModal";
import Button from "./Button";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<Props> = ({ children, className }) => {
  const authModal = useAuthModal();
  const router = useRouter();

  const handleLogout = () => {
    //
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
          <>
            <div>
              <Button
                onClick={authModal.onOpen}
                className="bg-transparent text-neutral-300 font-medium"
              >
                Sign up
              </Button>
            </div>
            <div>
              <Button onClick={authModal.onOpen} className="bg-white px-6 py-2">
                Log in
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
