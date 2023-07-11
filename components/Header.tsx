"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { IconSize, buttonStyle } from "@/styles/style";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<Props> = ({ children, className }) => {
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
      <div className="w-full mb-4 items-center justify-between">
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
      </div>
    </div>
  );
};

export default Header;
