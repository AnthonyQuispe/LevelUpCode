import "./DashboardPage.scss";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../UserContext";
import Nav from "../../components/nav/nav";
import greenClassIcon from "../../assets/class/GreenClassIcon.svg";
import pinkClassIcon from "../../assets/class/PinkClassIcon.svg";
import purpleClassIcon from "../../assets/class/PurpleClassIcon.svg";
import circleClassIcon from "../../assets/class/CircleClassIcon.svg";
import triangleClassIcon from "../../assets/class/TriangleClassIcon.svg";
import xClassIcon from "../../assets/class/XClassIcon.svg";
import emptyClassIcon from "../../assets/class/EmptyClassIcon.svg";
import playButtonIcon from "../../assets/icons/PlayButtonIcon.svg";
import profilePlaceholder from "../../assets/placeholder/Profile.png";

let CourseTracker = {
  Title: "HTML",
  Level: "Level 1 : Beginner HTML",
  Quest1: "Completed",
  Quest2: "New",
  Quest3: "New",
  Quest4: "New",
  Quest5: "New",
  Quest6: "New",
  Quest7: "New",
  Quest8: "New",
  Quest9: "New",
  Quest10: "New",
  Quest11: "New",
  Quest12: "New",
  Quest13: "New",
  Quest14: "New",
  Quest15: "New",
  Quest16: "New",
  Quest17: "New",
  Quest18: "New",
  Quest19: "New",
  Quest20: "New",
  FinalQuest: "New",
};

const isCompleted = (status) => {
  return status === "Completed";
};

function DashboardPage() {
  const { userData } = useContext(UserContext);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (userData) {
      setUserName(userData.userName || "");
    }
  }, [userData]);

  const renderCourseIcon = (status, defaultIcon, completedIcon) => {
    return (
      <img
        className="dashboard__course-icon"
        src={isCompleted(status) ? completedIcon : defaultIcon}
        alt="course icon"
      />
    );
  };

  return (
    <div className="dashboard">
      <Nav />
      <div className="dashboard__page">
        <div className="dashboard__top">
          <div className="dashboard__top-container">
            <Link className="dashboard__username">
              <img
                className="dashboard__profile-icon"
                src={profilePlaceholder}
                alt="profile Icon"
              />
              {userName}
            </Link>
            <button className="dashboard__play-button">
              <img
                className="dashboard__play-button-icon"
                src={playButtonIcon}
                alt="Play Button"
              />
            </button>
          </div>
          <div className="dashboard__title-container">
            <h1 className="dashboard__title">{CourseTracker.Title}</h1>
          </div>
        </div>
        <div className="dashboard__bottom">
          <div className="dashboard__level-container">
            <button className="dashboard__level-name">
              {CourseTracker.Level}
            </button>
          </div>
          <div className="dashboard__courses">
            <div className="dashboard__course-row dashboard__course-row--first">
              <Link className="dashboard__course dashboard__course--big">
                {renderCourseIcon(
                  CourseTracker.Quest1,
                  purpleClassIcon,
                  pinkClassIcon
                )}
              </Link>
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Quest1,
                  emptyClassIcon,
                  circleClassIcon
                )}
              </Link>
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Quest3,
                  emptyClassIcon,
                  triangleClassIcon
                )}
              </Link>
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Quest4,
                  emptyClassIcon,
                  xClassIcon
                )}
              </Link>
            </div>
            <div className="dashboard__course-row dashboard__course-row--second">
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Quest5,
                  emptyClassIcon,
                  circleClassIcon
                )}
              </Link>
            </div>
            <div className="dashboard__course-row dashboard__course-row--third">
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Quest6,
                  emptyClassIcon,
                  xClassIcon
                )}
              </Link>
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Quest7,
                  emptyClassIcon,
                  triangleClassIcon
                )}
              </Link>
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Quest8,
                  emptyClassIcon,
                  circleClassIcon
                )}
              </Link>
              <Link className="dashboard__course dashboard__course--big">
                {renderCourseIcon(
                  CourseTracker.Quest9,
                  purpleClassIcon,
                  greenClassIcon
                )}
              </Link>
            </div>
            <div className="dashboard__course-row dashboard__course-row--fourth">
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Quest10,
                  emptyClassIcon,
                  circleClassIcon
                )}
              </Link>
            </div>
            <div className="dashboard__course-row dashboard__course-row--fifth">
              <Link className="dashboard__course dashboard__course--big">
                {renderCourseIcon(
                  CourseTracker.Quest11,
                  purpleClassIcon,
                  pinkClassIcon
                )}
              </Link>
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Quest12,
                  emptyClassIcon,
                  triangleClassIcon
                )}
              </Link>
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Quest13,
                  emptyClassIcon,
                  xClassIcon
                )}
              </Link>
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Quest14,
                  emptyClassIcon,
                  circleClassIcon
                )}
              </Link>
            </div>
            <div className="dashboard__course-row dashboard__course-row--sixth">
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Quest15,
                  emptyClassIcon,
                  triangleClassIcon
                )}
              </Link>
            </div>
            <div className="dashboard__course-row dashboard__course-row--seventh">
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Quest16,
                  emptyClassIcon,
                  triangleClassIcon
                )}
              </Link>
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Quest17,
                  emptyClassIcon,
                  circleClassIcon
                )}
              </Link>
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Quest18,
                  emptyClassIcon,
                  xClassIcon
                )}
              </Link>
              <Link className="dashboard__course dashboard__course--big">
                {renderCourseIcon(
                  CourseTracker.Quest19,
                  purpleClassIcon,
                  greenClassIcon
                )}
              </Link>
            </div>
            <div className="dashboard__course-row dashboard__course-row--eighth">
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Quest20,
                  emptyClassIcon,
                  xClassIcon
                )}
              </Link>
            </div>
            <div className="dashboard__course-row dashboard__course-row--ninth">
              <Link className="dashboard__course dashboard__course--big">
                {renderCourseIcon(
                  CourseTracker.FinalQuest,
                  purpleClassIcon,
                  pinkClassIcon
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
