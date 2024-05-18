import "./button.scss";

export default function Button({ className, text, onClick }) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}
