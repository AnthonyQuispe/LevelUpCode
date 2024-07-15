import React from "react";
import "./Login.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import GoogleButton from "../GoogleButton/GoogleButton";
import { Link } from "react-router-dom";
import DeleteIcon from "../../assets/icons/DeleteIcon.svg";

export default function Login({ handleLoginPageClick }) {
  return (
    <div className="login-container">
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
      <form className="login-container__form">
        <Input placeholder={"Email"} />
        <Input placeholder={"Password"}></Input>
        <Button text={"Log In"} />
      </form>
      <GoogleButton />
      <Link className="login-container__link">
        Don't have an account{" "}
        <span className="login-container__link login-container__link--pink">
          Sign Up
        </span>
      </Link>
      <Link className="login-container__link">
        <span className="login-container__link login-container__link--pink">
          Forgot Password
        </span>
      </Link>
    </div>
  );
}
