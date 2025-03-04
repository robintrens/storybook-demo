import { PropsWithChildren } from "react";
import "./btn.css";

export type CustomButtonProps = PropsWithChildren & {
  variant: "primary" | "secondary" | "info" | "disabled";
  size: "md" | "sm" | "lg";
  onclick: () => void;
};

const CustomButton = ({
  variant,
  children,
  onclick,
  size,
}: CustomButtonProps) => {
  return (
    <button
      className={`customBtn btn--${variant} btn--${size}`}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
