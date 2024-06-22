import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { loginUser } from "../../firebase/FirebaseLogin";

import "./LogInPage.scss";
import Logo from "../../assets/logo/LevelUp.svg";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import AlertModal from "../../components/AlertModal/AlertModal";

function LogInPage() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setAlertMessage("Please enter a valid email.");
      setAlertVisible(true);
      return;
    }

    if (!password) {
      setAlertMessage("Please enter your password.");
      setAlertVisible(true);
      return;
    }

    try {
      await loginUser(email, password);
      navigate("/");
    } catch (error) {
      let errorMessage = "Error logging in.";
      switch (error.code) {
        case "auth/invalid-email":
          errorMessage = "Invalid email address.";
          break;
        case "auth/user-disabled":
          errorMessage = "User account is disabled.";
          break;
        case "auth/user-not-found":
          errorMessage = "No user found with this email.";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password.";
          break;
        case "auth/invalid-credential":
          errorMessage = "Incorrect password or Email.";
          break;
        default:
          errorMessage = `Error logging in: ${error.message}`;
      }
      setAlertMessage(errorMessage);
      setAlertVisible(true);
    }
  };

  return (
    <main className="login-page">
      <AlertModal
        isVisible={alertVisible}
        message={alertMessage}
        onClose={() => setAlertVisible(false)}
      />
      <div className="login-page__left-container">
        <img className="login-page__logo" src={Logo} alt="Logo" />
        <p className="login-page__subtitle">Begin Your Coding Journey!</p>
        <p className="login-page__text">
          Whether you're a novice or a seasoned enthusiast, our app provides an
          immersive learning experience designed to demystify coding languages
          and empower you to create anything you can imagine.
        </p>
        <Button className="login-page__learn-button" text={"Learn More"} />
      </div>
      <div className="login-page__form-container">
        <form className="login-page__form" onSubmit={handleLoginSubmit}>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            autoComplete="current-email"
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
          />
          <Button text={"Log In"} />
          <Link to="/forgot" className="login-page__link-text">
            Forgot Password?
          </Link>
          <div className="login-page__link-container">
            <p className="login-page__link-text">Don’t have an account?</p>
            <Link to="/signup" className="login-page__link">
              Sign up
            </Link>
          </div>
        </form>
        <GoogleButton />
      </div>
    </main>
  );
}

export default LogInPage;
