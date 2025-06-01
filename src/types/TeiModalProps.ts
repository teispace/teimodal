/**
 * Props for the TeiModal component.
 *
 * @property {React.ReactNode} children - Content to display inside the modal.
 * @property {boolean} isOpen - Controls whether the modal is open.
 * @property {() => void} onClose - Callback fired when the modal requests to close.
 * @property {string} [overlayColor] - Optional color for the modal overlay.
 * @property {string} [backdropClasses] - Optional CSS classes for the backdrop.
 * @property {"none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full"} [rounded] - Border radius of the modal.
 * @property {string} [bgColor] - Optional background color for the modal.
 * @property {string} [modalPadding] - Optional padding for the modal content.
 * @property {string} [modalClasses] - Optional CSS classes for the modal container.
 * @property {boolean} [enableWindowScrollLock] - If true, disables window scroll when modal is open.
 * @property {number} [zIndex] - Optional z-index for the modal.
 * @property {boolean} [isDismissable] - If true, allows modal to be dismissed by clicking outside or pressing ESC.
 */
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
