"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function Modal({
  children,
  onClose,
}: {
  children?: React.ReactNode;
  onClose?: () => void;
}) {
  const documentTop = document.documentElement.scrollTop;
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div
      className="absolute inset-0 bg-black bg-opacity-50 h-full w-full flex flex-col justify-center items-center"
      style={{
        top: `${documentTop}px`,
      }}
    >
      <button
        className="fixed top-0 right-0 p-4 text-white text-lg"
        onClick={onClose}
      >
        Close
      </button>

      {children}
    </div>
  );
}

interface Props {
  src: string;
  alt: string;
}

export default function PreviewImg({ src, alt }: Props) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button className="preview-img" onClick={handleClick}>
        <img src={src} alt={alt} />
      </button>
      {open &&
        createPortal(
          <Modal onClose={handleClose}>
            <img
              className="max-w-full object-contain max-h-[90vh]"
              src={src}
              alt={alt}
            />
          </Modal>,
          document.body,
        )}
    </>
  );
}
