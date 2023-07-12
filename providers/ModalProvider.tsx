"use client";

import React, { useEffect, useState } from "react";

import Modal from "@/components/Modal";

const ModalProvider = () => {
  const [isMounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // checking if we are server side or not
  if (!isMounted) return null;

  return (
    <>
      <Modal title="test tit" description="test des" isOpen onChange={() => {}}>
        Test
      </Modal>
    </>
  );
};

export default ModalProvider;
