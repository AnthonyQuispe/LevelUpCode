import React, { useEffect, useState } from "react";
import "./LandingNav.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import LogoText from "../../assets/logo/LevelUpLogoText.svg";
import Logo from "../../assets/logo/LevelUp.svg";
import LogoAlt from "../../assets/logo/LevelUp-Alt.svg";

export default function LandingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [navWidth, setNavWidth] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/signup");
  };

  useEffect(() => {
    const aboutSection = document.querySelector(".landing-page__about");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setScrolled(false); // Set to false when intersecting
          } else {
            setScrolled(true); // Set to true when not intersecting
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setNavWidth(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="landing-nav-container">
      {scrolled ? (
        <nav className="landing-nav">
          <Link to={"/"}>
            <img className="landing-nav__logo" src={LogoText} alt="Text Logo" />
          </Link>
        </nav>
      ) : (
        <nav className="landing-nav landing-nav--alt">
          <Link to={"/"}>
            {navWidth ? (
              <img
                className="landing-nav__logo landing-nav__logo--alt"
                src={LogoAlt}
                alt="Alternate Logo"
              />
            ) : (
              <img
                className="landing-nav__logo landing-nav__logo--alt"
                src={Logo}
                alt="Alternate Logo"
              />
            )}
          </Link>
          <div className="landing-nav__button-container">
            <Button text={"Get Started"} onClick={handleButtonClick} />
          </div>
        </nav>
      )}
    </div>
  );
}
