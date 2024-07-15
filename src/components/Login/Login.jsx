import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../firebase/FirebaseLogin";

import "./Login.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import AlertModal from "../AlertModal/AlertModal";
import GoogleButton from "../GoogleButton/GoogleButton";
import DeleteIcon from "../../assets/icons/DeleteIcon.svg";

export default function Login({ handleLoginPageClick }) {
  const navigate = useNavigate();
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email)) {
      setAlertMessage("Please Enter Your Email !");
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
      navigate("/dashboard");
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
    <div className="login-container">
      <AlertModal
        isVisible={alertVisible}
        message={alertMessage}
        onClose={() => setAlertVisible(false)}
      />
      <button
        className="login-container__button"
        onClick={handleLoginPageClick}
      >
        <img
          src={DeleteIcon}
          alt="Delete Icon"
          className="login-container__button-img"
        />
      </button>
      <h1 className="login-container__title">Log In</h1>
      <form className="login-container__form" onSubmit={handleLoginSubmit}>
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
        <Button text={"Log In"} className="button-pink-big" />
      </form>
      <GoogleButton />
      <Link className="login-container__link" to="/signup">
        Don't have an account{" "}
        <span className="login-container__link login-container__link--pink">
          Sign Up
        </span>
      </Link>
      <Link className="login-container__link" to="/forgot">
        <span className="login-container__link login-container__link--pink">
          Forgot Password
        </span>
      </Link>
    </div>
  );
}
