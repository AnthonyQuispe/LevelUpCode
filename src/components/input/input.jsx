import "./input.scss";

export default function Input({ className, placeholder, id }) {
  return (
    <input className={`input ${className}`} placeholder={placeholder} id={id} />
  );
}
