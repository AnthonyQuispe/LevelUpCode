import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./LandingPage.scss";
import LogoText from "../../assets/logo/LevelUpLogoText.svg";
import Logo from "../../assets/logo/LevelUp.svg";
import Button from "../../components/Button/Button";
import Login from "../../components/Login/Login";

function LandingPage() {
  const [loginPage, setLoginPage] = useState(false);
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("isLoggingIn") === "true") {
      setLoginPage(true);
    }
  }, [location.search]);

  useEffect(() => {
    if (shouldNavigate) {
      const searchParams = new URLSearchParams(location.search);
      if (loginPage) {
        searchParams.set("isLoggingIn", "true");
      } else {
        searchParams.delete("isLoggingIn");
      }
      navigate(`${location.pathname}?${searchParams.toString()}`, {
        replace: true,
      });
      setShouldNavigate(false);
    }
  }, [shouldNavigate, loginPage, navigate, location.pathname, location.search]);

  const handleLoginPageClick = () => {
    setLoginPage((prevLoginPage) => !prevLoginPage);
    setShouldNavigate(true);
  };

  return (
    <div className="landing-page">
      {loginPage ? (
        <Login handleLoginPageClick={handleLoginPageClick} />
      ) : (
        <header className="landing-page__header">
          <div className="landing-page__nav-container">
            <nav className="landing-page__nav">
              <img
                className="landing-page__logo"
                src={LogoText}
                alt="Text Logo"
              />
            </nav>
          </div>
          <div className="landing-page__container landing-page__container--bottom">
            <div className="landing-page__container landing-page__container--left">
              <img
                className="landing-page__logo--hero"
                src={Logo}
                alt="Hero Icon"
              />
            </div>
            <div className="landing-page__container landing-page__container--right">
              <h2 className="landing-page__subtitle">
                The free, fun, and effective way to learn coding!
              </h2>
              <div className="landing-page__links">
                <Link className="landing-page__link" to="/signup">
                  <Button text="Let's Get Started" />
                </Link>
                <Button
                  text="I Already Have An Account"
                  className="button-white"
                  onClick={handleLoginPageClick}
                />
              </div>
            </div>
          </div>
        </header>
      )}
    </div>
  );
}

export default LandingPage;
