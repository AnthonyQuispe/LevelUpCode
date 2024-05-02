import "./SignUpPage.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/LevelUp.svg";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import GoogleButton from "../../components/googleButton/googleButton";

function SignUpPage() {
  return (
    <main className="signup-page">
      <div className="signup-page__left-container">
        <img className="signup-page__logo" src={Logo} alt="Logo" />
        <p className="signup-page__subtitle">
          Welcome to the beginning of your Coding Journey
        </p>
        <p className="signup-page__text">
          Whether you're a novice or a seasoned enthusiast, our app provides an
          immersive learning experience designed to demystify coding languages
          and empower you to create anything you can imagine.
        </p>
        <Button className="signup-page__learn-button" text={"Learn More"} />
      </div>
      <form className="signup-page__form">
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Input placeholder="Confirm Password" />
        <Button text={"Sign Up"} />
        <div className="signup-page__link-container">
          <p className="signup-page__link-text">Already have an account?</p>
          <Link className="signup-page__link">Sign in</Link>
          <GoogleButton />
        </div>
      </form>
    </main>
  );
}

export default SignUpPage;
