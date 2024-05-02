import "./googleButton.scss";
import GoogleIcon from "../../assets/icons/GoogleIcon.svg";

export default function GoogleButton() {
  return (
    <button className="google-button">
      <img src={GoogleIcon} alt="Google Login Icon" />
      Sign In With Google
    </button>
  );
}
