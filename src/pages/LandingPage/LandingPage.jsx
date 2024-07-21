import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Login from "../../components/Login/Login";
import "./LandingPage.scss";
import LandingNav from "../../components/LandingNav/LandingNav";
import LandingFooter from "../../components/LandingFooter/LandingFooter";
import Logo from "../../assets/logo/LevelUp.svg";
import FunIcon from "../../assets/gif/Fun.gif";
import AiICon from "../../assets/gif/Ai.gif";
import MotivatedIcon from "../../assets/gif/Motivated.gif";
import Sciense from "../../assets/gif/Science.gif";

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
        <>
          <header className="landing-page__header">
            <LandingNav />
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
                  The free, fun way to level up your code!
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
          <main className="landing-page__main">
            <section className="landing-page__about">
              <div className="landing-page__about-container">
                <div className="landing-page__about-container-text">
                  <h2 className="landing-page__about-container-title">
                    Fun and Engaging
                  </h2>
                  <p className="landing-page__about-container-description">
                    LevelUp Code makes learning to code a blast! With quick,
                    bite-sized quests, you’ll earn points and advance through
                    levels while mastering real-world coding skills.
                  </p>
                </div>
                <img
                  src={FunIcon}
                  alt="Fun and Engaging Icon"
                  className="landing-page__about-container-image"
                />
              </div>
              <div className="landing-page__about-container landing-page__about-container--alt">
                <div className="landing-page__about-container-text">
                  <h2 className="landing-page__about-container-title">
                    Science Backed
                  </h2>
                  <p className="landing-page__about-container-description">
                    We combine research-backed teaching methods with delightful
                    content to create courses that effectively teach coding,
                    debugging, and problem-solving skills!
                  </p>
                </div>
                <img
                  src={AiICon}
                  alt="Scientifically Backed Icon"
                  className="landing-page__about-container-image"
                />
              </div>
              <div className="landing-page__about-container">
                <div className="landing-page__about-container-text">
                  <h2 className="landing-page__about-container-title">
                    Stay Motivated
                  </h2>
                  <p className="landing-page__about-container-description">
                    We make it easy to build a coding habit with game-like
                    features, fun challenges, and reminders from our friendly
                    mascot, Codey the pixel hero.
                  </p>
                </div>
                <img
                  src={MotivatedIcon}
                  alt="Stay Motivated icon"
                  className="landing-page__about-container-image"
                />
              </div>
              <div className="landing-page__about-container landing-page__about-container--alt">
                <div className="landing-page__about-container-text">
                  <h2 className="landing-page__about-container-title">
                    Personalized Learning
                  </h2>
                  <p className="landing-page__about-container-description">
                    Using the best of AI and coding education, our lessons are
                    tailored to help you learn at the perfect level and pace for
                    your skills.
                  </p>
                </div>
                <img
                  src={Sciense}
                  alt="Personalized Learning Icon"
                  className="landing-page__about-container-image"
                />
              </div>
            </section>
          </main>
          <LandingFooter />
        </>
      )}
    </div>
  );
}

export default LandingPage;
