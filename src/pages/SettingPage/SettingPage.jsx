import "./SettingPage.scss";
import BottomNav from "../../components/bottomNav/bottomNav";
import RightArrowIcon from "../../assets/icons/RightArrowIcon.svg";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon.svg";
import Button from "../../components/button/button";
import { Link, useLocation } from "react-router-dom";
import Courses from "../../components/settingCourse/settingCourse";
import Preferences from "../../components/settingPreferences/settingPreferences";
import Profile from "../../components/settingProfile/settingProfile";
import Notifications from "../../components/settingNotifications/settingNotifications";
import { useState, useEffect } from "react";

function SettingPage() {
  const location = useLocation();
  const [activeComponent, setActiveComponent] = useState(null);

  useEffect(() => {
    const path = location.pathname.split("/").pop();
    setActiveComponent(path);
  }, [location]);

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "preferences":
        return <Preferences />;
      case "profile":
        return <Profile />;
      case "notifications":
        return <Notifications />;
      case "courses":
        return <Courses />;
      default:
        return null;
    }
  };

  if (renderActiveComponent() === null) {
    return (
      <>
        <main className="setting-page">
          <section className="setting-page__top-container">
            <h1 className="setting-page__title">Settings</h1>
          </section>
          <section className="setting-page__bottom-container">
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
                <button className="setting-page__button">
                  Terms <img src={RightArrowIcon} alt="right arrow icon" />
                </button>
                <button className="setting-page__button setting-page__button--last">
                  Privacy Policy
                  <img src={RightArrowIcon} alt="right arrow icon" />
                </button>
              </div>
            </div>
          </section>
          <Button text="Log Out" className="button-green" />
        </main>
        <BottomNav />
      </>
    );
  }

  return (
    <>
      {renderActiveComponent()}
      <BottomNav />
    </>
  );
}

export default SettingPage;
