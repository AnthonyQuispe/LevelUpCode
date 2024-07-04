import React, { useState } from "react";
import "./LandingPage.scss";
import LogoText from "../../assets/logo/LevelUpLogoText.svg";
import Logo from "../../assets/logo/LevelupAi.png";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import Login from "../../components/Login/Login";

function LandingPage() {
  const [loginPage, setLoginPage] = useState(false);

  const handleLoginPageClick = () => {
    setLoginPage((prevLoginPage) => !prevLoginPage);
  };

  return (
    <div className="landing-page">
      {loginPage ? (
        <Login handleLoginPageClick={handleLoginPageClick} />
      ) : (
        <>
          <img src={LogoText} alt="Text Logo" className="landing-page__logo" />
          <h2 className="landing-page__subtitle">Begin Your Coding Journey!</h2>
          <img className="landing-page__logo" src={Logo} alt="Hero Icon" />
          <Link className="landing-page__link" to="/signup">
            <Button text="Let's Get Started" />
          </Link>
          <Link className="landing-page__link">
            <Button
              text="I Already Have An Account"
              className="button-white"
              onClick={handleLoginPageClick}
            />
          </Link>
        </>
      )}
    </div>
  );
}

export default LandingPage;
