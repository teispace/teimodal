import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { TeiModalProps } from "..";

const TeiModal: React.FC<TeiModalProps> = ({
  children,
  isOpen,
  onClose,
  overlayColor = "bg-black/30",
  backdropClasses = "",
  rounded = "xl",
  bgColor = "bg-[#ffffff] dark:bg-[#1a202c]",
  modalPadding = "p-6",
  modalClasses = "",
  enableWindowScrollLock = true,
  zIndex = 1000,
  isDismissable = true,
}) => {
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();

    if (isDismissable && e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (enableWindowScrollLock) {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, enableWindowScrollLock]);

  const backdropClass = `fixed inset-0 h-screen w-screen left-0 top-0 flex cursor-default items-center justify-center z-[${zIndex}] p-4 transition-all ${overlayColor} ${backdropClasses} ${isOpen ? "visible" : "invisible"}`;

  const modalClass = `max-w-full shadow transition-all ${bgColor} ${modalPadding} ${modalClasses} rounded-${rounded}`;

  if (!isOpen) return null;
  const modalContent = (
    <div className={backdropClass} onClick={handleClickOutside}>
      <div
        className={modalClass}
        onClick={(e) => e.stopPropagation()}
        style={{ zIndex: zIndex + 1 }}
      >
        {children}
      </div>
    </div>
  );
  return createPortal(modalContent, document.body);
};

export default TeiModal;
