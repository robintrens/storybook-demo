import { PropsWithChildren } from "react";
import "./modal.css";

type ModalProps = PropsWithChildren & {
  title: string;
  isOpen: boolean;
  size: "sm" | "md" | "lg" | "xl";
};

const Modal = ({ title, isOpen, children, size }: ModalProps) => {
  return (
    <div className={`modal__overlay ${isOpen ? "show" : "hide"}`}>
      <div className={`modal__wrapper ${size}`}>
        <div className="modal__header">
          <div>{title}</div>
          <div>
            <button className="close">
              <img src="close.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="seperator"></div>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
