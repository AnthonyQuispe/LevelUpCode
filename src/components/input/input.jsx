import "./input.scss";

export default function Input({ className, placeholder }) {
  return <input className={`input ${className}`} placeholder={placeholder} />;
}
