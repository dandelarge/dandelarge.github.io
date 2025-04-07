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

    function handleKeyPress(e: KeyboardEvent) {
      if (e.key === "Escape" && onClose && onClose instanceof Function) {
        onClose();
      }
    }

    window.addEventListener("keyup", handleKeyPress);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keyup", handleKeyPress);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 bg-black bg-opacity-50 h-full w-full flex flex-col justify-center items-center"
      style={{
        top: `${documentTop}px`,
      }}
      onClick={() => {
        if (onClose && onClose instanceof Function) {
          onClose();
        }
      }}
    >
      <div className="w-full flex flex-col gap-12 justify-center items-end">
        <button className="p-4 text-white text-lg" onClick={onClose}>
          Close
        </button>
      </div>

      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
}

interface Props {
  src: string;
  alt: string;
  styles?: any;
}

export default function PreviewImg({ src, alt, styles }: Props) {
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
        <img src={src} alt={alt} style={{ ...styles }} />
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
