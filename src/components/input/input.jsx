import React from "react";
import "./Input.scss";

export default function Input({
  className,
  type,
  value,
  onChange,
  placeholder,
  name,
}) {
  return (
    <input
      className={`input ${className}`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
    />
  );
}
