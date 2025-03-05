import React, { useState } from "react";
import "./style.css";

export type AlertProps = {
  variant: "primary" | "secondary" | "info" | "error";
  text: string;
};

const alertBackgroundColors: Record<AlertProps["variant"], string> = {
  primary: "#e0f2fe",
  secondary: "#e5e7eb",
  info: "#d1fae5",
  error: "#fecaca",
};

const Alert: React.FC<AlertProps> = ({ variant, text }) => {
  const [isVisible, setIsVisible] = useState(true);

  const closeAlert = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null; // Don't render anything if the alert is closed
  }

  return (
    <div className="page">
      <div
        className="alert"
        style={{ backgroundColor: alertBackgroundColors[variant] }}
      >
        {text}
        <div onClick={closeAlert}>
          <img className="close" src="close.png" alt="Close" />
        </div>
      </div>
    </div>
  );
};

export default Alert;
