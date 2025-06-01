export default interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  overlayColor?: string;
  backdropClasses?: string;
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  bgColor?: string;
  modalPadding?: string;
  modalClasses?: string;
  enableWindowScrollLock?: boolean;
  zIndex?: number;
  isDismissable?: boolean;
}
