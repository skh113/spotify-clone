import React from "react";
import Button from "./Button";
import { AuthModalStore } from "@/hooks/useAuthModal";

interface Props {
  authModal: AuthModalStore;
}

const HeaderAuth = ({ authModal }: Props) => {
  return (
    <>
      <Button
        onClick={authModal.onOpen}
        className="bg-transparent text-neutral-300 font-medium whitespace-nowrap"
      >
        Sign up
      </Button>
      <Button
        onClick={authModal.onOpen}
        className="bg-white px-6 py-2 whitespace-nowrap"
      >
        Log in
      </Button>
    </>
  );
};

export default HeaderAuth;
