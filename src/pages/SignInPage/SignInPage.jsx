import "./SignInPage.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/LevelUp.svg";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import GoogleButton from "../../components/googleButton/googleButton";

function SignInPage() {
  return (
    <main className="signin-page">
      <div className="signin-page__left-container">
        <img className="signin-page__logo" src={Logo} alt="Logo" />
        <p className="signin-page__subtitle">Begin Your Coding Journey!</p>
        <p className="signin-page__text">
          Whether you're a novice or a seasoned enthusiast, our app provides an
          immersive learning experience designed to demystify coding languages
          and empower you to create anything you can imagine.
        </p>
        <Button className="signin-page__learn-button" text={"Learn More"} />
      </div>
      <form className="signin-page__form">
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button text={"Sign In"} />
        <Link to="/forgot" className="signin-page__link-text">
          Forgot Password
        </Link>
        <div className="signin-page__link-container">
          <p className="signin-page__link-text">Don’t have an account?</p>
          <Link to="/signup" className="signin-page__link">
            Sign up
          </Link>
          <GoogleButton />
        </div>
      </form>
    </main>
  );
}

export default SignInPage;
