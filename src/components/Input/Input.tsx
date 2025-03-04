import React from "react";
import "./input.css";

type InputProps = {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  min?: string | number;
  max?: string | number;
  step?: string | number;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  autoComplete?: string;
  readOnly?: boolean;
};

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  className,
  id,
  name,
  disabled,
  required,
  min,
  max,
  step,
  pattern,
  minLength,
  maxLength,
  autoComplete,
  readOnly,
}: InputProps) => {
  return (
    <div className={`customInput__wrapper ${className || ""}`}>
      <input
        className="customInput__control"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        name={name}
        disabled={disabled}
        required={required}
        min={min}
        max={max}
        step={step}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        autoComplete={autoComplete}
        readOnly={readOnly}
      />
    </div>
  );
};

export default Input;
