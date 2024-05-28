import "./DashboardPage.scss";
import { Link } from "react-router-dom";
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
  HTML: "In-Progress",
  Section1: {
    Chapter1: "Completed",
    Chapter2: "New",
    Chapter3: "New",
    Chapter4: "New",
    Chapter5: "New",
  },
  Section2: {
    Chapter1: "New",
    Chapter2: "New",
    Chapter3: "New",
    Chapter4: "New",
    Chapter5: "New",
  },
  Section3: {
    Chapter1: "New",
    Chapter2: "New",
    Chapter3: "New",
    Chapter4: "New",
    Chapter5: "New",
  },
  Section4: {
    Chapter1: "New",
    Chapter2: "New",
    Chapter3: "New",
    Chapter4: "New",
    Chapter5: "New",
  },
  Section5: {
    FinalChapter: "New",
  },
};

const isCompleted = (status) => {
  return status === "Completed";
};

function DashboardPage() {
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
              {"Username"}
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
                  CourseTracker.Section1.Chapter1,
                  purpleClassIcon,
                  pinkClassIcon
                )}
              </Link>
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Section1.Chapter2,
                  emptyClassIcon,
                  circleClassIcon
                )}
              </Link>
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Section1.Chapter3,
                  emptyClassIcon,
                  triangleClassIcon
                )}
              </Link>
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Section1.Chapter4,
                  emptyClassIcon,
                  xClassIcon
                )}
              </Link>
            </div>
            <div className="dashboard__course-row dashboard__course-row--second">
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Section1.Chapter5,
                  emptyClassIcon,
                  circleClassIcon
                )}
              </Link>
            </div>
            <div className="dashboard__course-row dashboard__course-row--third">
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Section2.Chapter4,
                  emptyClassIcon,
                  xClassIcon
                )}
              </Link>
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Section2.Chapter3,
                  emptyClassIcon,
                  triangleClassIcon
                )}
              </Link>
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Section2.Chapter2,
                  emptyClassIcon,
                  circleClassIcon
                )}
              </Link>
              <Link className="dashboard__course dashboard__course--big">
                {renderCourseIcon(
                  CourseTracker.Section2.Chapter1,
                  purpleClassIcon,
                  greenClassIcon
                )}
              </Link>
            </div>
            <div className="dashboard__course-row dashboard__course-row--fourth">
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Section2.Chapter5,
                  emptyClassIcon,
                  circleClassIcon
                )}
              </Link>
            </div>
            <div className="dashboard__course-row dashboard__course-row--fifth">
              <Link className="dashboard__course dashboard__course--big">
                {renderCourseIcon(
                  CourseTracker.Section3.Chapter1,
                  purpleClassIcon,
                  pinkClassIcon
                )}
              </Link>
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Section3.Chapter2,
                  emptyClassIcon,
                  triangleClassIcon
                )}
              </Link>
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Section3.Chapter3,
                  emptyClassIcon,
                  xClassIcon
                )}
              </Link>
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Section3.Chapter4,
                  emptyClassIcon,
                  circleClassIcon
                )}
              </Link>
            </div>
            <div className="dashboard__course-row dashboard__course-row--sixth">
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Section3.Chapter5,
                  emptyClassIcon,
                  triangleClassIcon
                )}
              </Link>
            </div>
            <div className="dashboard__course-row dashboard__course-row--seventh">
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Section4.Chapter4,
                  emptyClassIcon,
                  triangleClassIcon
                )}
              </Link>
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Section4.Chapter3,
                  emptyClassIcon,
                  circleClassIcon
                )}
              </Link>
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Section4.Chapter2,
                  emptyClassIcon,
                  xClassIcon
                )}
              </Link>
              <Link className="dashboard__course dashboard__course--big">
                {renderCourseIcon(
                  CourseTracker.Section4.Chapter1,
                  purpleClassIcon,
                  greenClassIcon
                )}
              </Link>
            </div>
            <div className="dashboard__course-row dashboard__course-row--eighth">
              <Link className="dashboard__course">
                {renderCourseIcon(
                  CourseTracker.Section4.Chapter5,
                  emptyClassIcon,
                  xClassIcon
                )}
              </Link>
            </div>
            <div className="dashboard__course-row dashboard__course-row--ninth">
              <Link className="dashboard__course dashboard__course--big">
                {renderCourseIcon(
                  CourseTracker.Section5.FinalChapter,
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
