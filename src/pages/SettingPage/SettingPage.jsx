import "./SettingPage.scss";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../UserContext";
import { auth } from "../../firebase/FirebaseConfig";
import Nav from "../../components/nav/nav";
import RightArrowIcon from "../../assets/icons/RightArrowIcon.svg";
import Button from "../../components/button/button";
import { Link, useLocation } from "react-router-dom";
import Courses from "../../components/SettingCourse/SettingCourse";
import Preferences from "../../components/SettingPreferences/SettingPreferences";
import Profile from "../../components/SettingProfile/SettingProfile";
import Notifications from "../../components/SettingNotifications/SettingNotifications";
import LoadingModal from "../../components/LoadingModal/LoadingModal";

function SettingPage() {
  const location = useLocation();
  const [activeComponent, setActiveComponent] = useState(null);
  const { userData, loading, error } = useContext(UserContext);

  useEffect(() => {
    const path = location.pathname.split("/").pop();
    setActiveComponent(path);
  }, [location]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setActiveComponent("preferences");
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Call handleResize initially to set default if screen width <= 1024px

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "preferences":
        return <Preferences />;
      case "profile":
        return <Profile userData={userData} />;
      case "notifications":
        return <Notifications />;
      case "courses":
        return <Courses />;
      default:
        return null;
    }
  };

  if (loading) return <LoadingModal />;
  if (error) return <p>Error: {error}</p>;

  if (renderActiveComponent() === null) {
    return (
      <div className="setting">
        <Nav />
        <div className="setting-page">
          <section className="setting-page__top-container">
            <h1 className="setting-page__title">Settings</h1>
          </section>
          <section className="setting-page__left-container">
            <div className="setting-page__container">
              <h2 className="setting-page__subtitle">Account</h2>
              <div className="setting-page__button-container">
                <Link
                  to="/setting/preferences"
                  className="setting-page__button"
                >
                  Preferences{" "}
                  <img src={RightArrowIcon} alt="right arrow icon" />
                </Link>
                <Link to="/setting/profile" className="setting-page__button">
                  Profile <img src={RightArrowIcon} alt="right arrow icon" />
                </Link>
                <Link
                  to="/setting/notifications"
                  className="setting-page__button"
                >
                  Notifications
                  <img src={RightArrowIcon} alt="right arrow icon" />
                </Link>
                <Link
                  to="/setting/courses"
                  className="setting-page__button setting-page__button--last"
                >
                  Courses <img src={RightArrowIcon} alt="right arrow icon" />
                </Link>
              </div>
            </div>
            <div className="setting-page__container">
              <h2 className="setting-page__subtitle">Other</h2>
              <div className="setting-page__button-container">
                <Link to="/terms" className="setting-page__button">
                  Terms <img src={RightArrowIcon} alt="right arrow icon" />
                </Link>
                <Link
                  to="/terms"
                  className="setting-page__button setting-page__button--last"
                >
                  Privacy Policy
                  <img src={RightArrowIcon} alt="right arrow icon" />
                </Link>
              </div>
            </div>
            <Button
              text="Log Out"
              className="button-pink"
              onClick={handleLogout}
            />
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="setting">
      <Nav />
      <div className="setting-page setting-page--alt">
        <section className="setting-page__top-container setting-page__top-container--alt">
          <h1 className="setting-page__title">Settings</h1>
        </section>
        <section className="setting-page__bottom-container">
          <div className="setting-page__left-container setting-page__left-container--alt">
            <div className="setting-page__container">
              <h2 className="setting-page__subtitle">Account</h2>
              <div className="setting-page__button-container">
                <Link
                  to="/setting/preferences"
                  className="setting-page__button"
                >
                  Preferences{" "}
                  <img src={RightArrowIcon} alt="right arrow icon" />
                </Link>
                <Link to="/setting/profile" className="setting-page__button">
                  Profile <img src={RightArrowIcon} alt="right arrow icon" />
                </Link>
                <Link
                  to="/setting/notifications"
                  className="setting-page__button"
                >
                  Notifications
                  <img src={RightArrowIcon} alt="right arrow icon" />
                </Link>
                <Link
                  to="/setting/courses"
                  className="setting-page__button setting-page__button--last"
                >
                  Courses <img src={RightArrowIcon} alt="right arrow icon" />
                </Link>
              </div>
            </div>
            <div className="setting-page__container">
              <h2 className="setting-page__subtitle">Other</h2>
              <div className="setting-page__button-container">
                <a
                  className="setting-page__button"
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms <img src={RightArrowIcon} alt="right arrow icon" />
                </a>
                <Link
                  to="/terms"
                  className="setting-page__button setting-page__button--last"
                >
                  Privacy Policy
                  <img src={RightArrowIcon} alt="right arrow icon" />
                </Link>
              </div>
            </div>
            <Button
              text="Log Out"
              className="button-pink"
              onClick={handleLogout}
            />
          </div>
          {renderActiveComponent()}
        </section>
      </div>
    </div>
  );
}

export default SettingPage;
