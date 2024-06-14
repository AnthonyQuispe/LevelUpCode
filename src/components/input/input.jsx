import "./input.scss";

export default function Input({
  className,
  type,
  value,
  onChange,
  onKeyPress,
  placeholder,
}) {
  return (
    <input
      className={`input ${className}`}
      type={type}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
    />
  );
}
