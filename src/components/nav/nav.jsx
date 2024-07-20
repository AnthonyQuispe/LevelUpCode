import React, { useState } from "react";
import "./Nav.scss";
import { Link, useNavigate } from "react-router-dom";
import LogoText from "../../assets/logo/LevelUpLogoText.svg";
import HamburgerIcon from "../../assets/icons/BurgerIcon.svg";
import Button from "../Button/Button";

function MenuButton() {
  return (
    <div className="menu">
      <div className="menu__links-container">
        <ul className="menu__list">
          <li className="menu__item">
            <Link className="menu__link" to={"/?isLoggingIn=true"}>
              Log in
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link menu__link--alt" to={"/signup"}>
              Get Started
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link menu__link--alt" to={"/download"}>
              Download LevelUp Code
            </Link>
          </li>
        </ul>
      </div>
      <div className="menu__arrow-container">
        <div className="menu__arrow" />
      </div>
    </div>
  );
}

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setOpenMenu(!openMenu);
  };

  const handleLoginButtonClick = () => {
    navigate("/?isLoggingIn=true");
  };

  const handleSignupButtonClick = () => {
    navigate("/signup");
  };

  return (
    <nav className="nav">
      <Link to={"/"}>
        <img className="nav__logo" src={LogoText} alt="Text Logo" />
      </Link>
      <button className="nav__button" onClick={handleMenuToggle}>
        <img className="nav__button-img" src={HamburgerIcon} alt="Menu Icon" />
        {openMenu && <MenuButton />}
      </button>
      <div className="nav__button-container">
        <Button
          text={"Login"}
          className="button-white"
          onClick={handleLoginButtonClick}
        />
        <Button text={"Get Started"} onClick={handleSignupButtonClick} />
      </div>
    </nav>
  );
}
