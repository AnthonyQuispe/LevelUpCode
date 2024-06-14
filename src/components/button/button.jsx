import "./button.scss";

export default function Button({ onClick, text, className }) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}
