import "./DashboardPage.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../UserContext";
import Nav from "../../components/Nav/Nav";
import greenClassIcon from "../../assets/class/GreenClassIcon.svg";
import pinkClassIcon from "../../assets/class/PinkClassIcon.svg";
import purpleClassIcon from "../../assets/class/PurpleClassIcon.svg";
import circleClassIcon from "../../assets/class/CircleClassIcon.svg";
import triangleClassIcon from "../../assets/class/TriangleClassIcon.svg";
import xClassIcon from "../../assets/class/XClassIcon.svg";
import emptyClassIcon from "../../assets/class/EmptyClassIcon.svg";
import playButtonIcon from "../../assets/icons/PlayButtonIcon.svg";
import profilePlaceholder from "../../assets/placeholder/Profile.png";

const isCompleted = (status) => {
  return status === "complete";
};

const difficultyNames = {
  1: "Novice",
  2: "Intermediate",
  3: "Veteran",
};

function DashboardPage() {
  const navigate = useNavigate();
  const { userData, courseTracker } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [currentCourse, setCurrentCourse] = useState("");
  const [courseLevel, setCourseLevel] = useState(1);

  useEffect(() => {
    if (userData) {
      setUserName(userData.userName || "");
      setCurrentCourse(userData.currentCourse || "");
      setCourseLevel(userData.courseLevel || 1);
    }
  }, [userData, courseTracker]);

  const handleLevelClick = async (e) => {
    navigate("/select/difficulty");
  };

  const renderCourseIcon = (status, defaultIcon, completedIcon) => {
    if (isCompleted(status)) {
      return (
        <img
          className="dashboard__course-icon"
          src={completedIcon}
          alt="course icon"
        />
      );
    } else {
      return (
        <img
          className="dashboard__course-icon"
          src={defaultIcon}
          alt="course icon"
        />
      );
    }
  };

  const handleCourseClick = (questNumber) => {
    if (courseTracker[`Quest${questNumber}`] !== "new") {
      navigate(
        `/course/${currentCourse}/level/${courseLevel}/quest/${questNumber}/question/1`
      );
    }
  };

  return (
    <div className="dashboard">
      <Nav />
      <div className="dashboard__page">
        <div className="dashboard__top">
          <div className="dashboard__top-container">
            <Link className="dashboard__username" to="/setting/profile">
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
          <button
            className="dashboard__title-container"
            onClick={handleCourseClick}
          >
            <h1 className="dashboard__title">{currentCourse}</h1>
          </button>
        </div>
        <div className="dashboard__bottom">
          <div className="dashboard__level-container">
            <button
              className="dashboard__level-select"
              onClick={handleLevelClick}
            >
              {difficultyNames[courseLevel]}
            </button>
          </div>
          <div className="dashboard__courses">
            {courseLevel > 1 ? (
              <div className="dashboard__coming-soon">
                <p className="dashboard__coming-soon-text">Coming soon</p>
              </div>
            ) : (
              <>
                <div className="dashboard__course-row dashboard__course-row--first">
                  <Link
                    className={`dashboard__course dashboard__course--big ${
                      courseTracker.Quest1 !== "new" ? "" : "disabled"
                    }`}
                    to={`/course/${currentCourse}/level/${courseLevel}/quest/1/question/1`}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest1,
                      purpleClassIcon,
                      pinkClassIcon
                    )}
                  </Link>
                  <Link
                    className={`dashboard__course ${
                      courseTracker.Quest2 !== "new" ? "" : "disabled"
                    }`}
                    to={`/course/${currentCourse}/level/${courseLevel}/quest/2/question/1`}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest2,
                      emptyClassIcon,
                      circleClassIcon
                    )}
                  </Link>
                  <Link
                    className={`dashboard__course ${
                      courseTracker.Quest3 !== "new" ? "" : "disabled"
                    }`}
                    to={`/course/${currentCourse}/level/${courseLevel}/quest/3/question/1`}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest3,
                      emptyClassIcon,
                      triangleClassIcon
                    )}
                  </Link>
                  <Link
                    className={`dashboard__course ${
                      courseTracker.Quest4 !== "new" ? "" : "disabled"
                    }`}
                    to={`/course/${currentCourse}/level/${courseLevel}/quest/4/question/1`}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest4,
                      emptyClassIcon,
                      xClassIcon
                    )}
                  </Link>
                </div>
                <div className="dashboard__course-row dashboard__course-row--second">
                  <Link
                    className={`dashboard__course ${
                      courseTracker.Quest5 !== "new" ? "" : "disabled"
                    }`}
                    to={`/course/${currentCourse}/level/${courseLevel}/quest/5/question/1`}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest5,
                      emptyClassIcon,
                      circleClassIcon
                    )}
                  </Link>
                </div>
                <div className="dashboard__course-row dashboard__course-row--third">
                  <Link
                    className={`dashboard__course ${
                      courseTracker.Quest6 !== "new" ? "" : "disabled"
                    }`}
                    to={`/course/${currentCourse}/level/${courseLevel}/quest/6/question/1`}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest6,
                      emptyClassIcon,
                      xClassIcon
                    )}
                  </Link>
                  <Link
                    className={`dashboard__course ${
                      courseTracker.Quest7 !== "new" ? "" : "disabled"
                    }`}
                    to={`/course/${currentCourse}/level/${courseLevel}/quest/7/question/1`}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest7,
                      emptyClassIcon,
                      triangleClassIcon
                    )}
                  </Link>
                  <Link
                    className={`dashboard__course ${
                      courseTracker.Quest8 !== "new" ? "" : "disabled"
                    }`}
                    to={`/course/${currentCourse}/level/${courseLevel}/quest/8/question/1`}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest8,
                      emptyClassIcon,
                      circleClassIcon
                    )}
                  </Link>
                  <Link
                    className={`dashboard__course dashboard__course--big ${
                      courseTracker.Quest9 !== "new" ? "" : "disabled"
                    }`}
                    to={`/course/${currentCourse}/level/${courseLevel}/quest/9/question/1`}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest9,
                      purpleClassIcon,
                      greenClassIcon
                    )}
                  </Link>
                </div>
                <div className="dashboard__course-row dashboard__course-row--fourth">
                  <Link
                    className={`dashboard__course ${
                      courseTracker.Quest10 !== "new" ? "" : "disabled"
                    }`}
                    to={`/course/${currentCourse}/level/${courseLevel}/quest/10/question/1`}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest10,
                      emptyClassIcon,
                      circleClassIcon
                    )}
                  </Link>
                </div>
                <div className="dashboard__course-row dashboard__course-row--fifth">
                  <Link
                    className={`dashboard__course dashboard__course--big ${
                      courseTracker.Quest11 !== "new" ? "" : "disabled"
                    }`}
                    to={`/course/${currentCourse}/level/${courseLevel}/quest/11/question/1`}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest11,
                      purpleClassIcon,
                      pinkClassIcon
                    )}
                  </Link>
                  <Link
                    className={`dashboard__course ${
                      courseTracker.Quest12 !== "new" ? "" : "disabled"
                    }`}
                    to={`/course/${currentCourse}/level/${courseLevel}/quest/12/question/1`}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest12,
                      emptyClassIcon,
                      circleClassIcon
                    )}
                  </Link>
                  <Link
                    className={`dashboard__course ${
                      courseTracker.Quest13 !== "new" ? "" : "disabled"
                    }`}
                    to={`/course/${currentCourse}/level/${courseLevel}/quest/13/question/1`}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest13,
                      emptyClassIcon,
                      triangleClassIcon
                    )}
                  </Link>
                  <Link
                    className={`dashboard__course ${
                      courseTracker.Quest14 !== "new" ? "" : "disabled"
                    }`}
                    to={`/course/${currentCourse}/level/${courseLevel}/quest/14/question/1`}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest14,
                      emptyClassIcon,
                      xClassIcon
                    )}
                  </Link>
                </div>
                <div className="dashboard__course-row dashboard__course-row--sixth">
                  <Link
                    className={`dashboard__course ${
                      courseTracker.Quest15 !== "new" ? "" : "disabled"
                    }`}
                    to={`/course/${currentCourse}/level/${courseLevel}/quest/15/question/1`}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest15,
                      emptyClassIcon,
                      triangleClassIcon
                    )}
                  </Link>
                </div>
                <div className="dashboard__course-row dashboard__course-row--seventh">
                  <Link
                    className={`dashboard__course ${
                      courseTracker.Quest19 !== "new" ? "" : "disabled"
                    }`}
                    to={`/course/${currentCourse}/level/${courseLevel}/quest/19/question/1`}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest19,
                      emptyClassIcon,
                      greenClassIcon
                    )}
                  </Link>
                  <Link
                    className={`dashboard__course ${
                      courseTracker.Quest18 !== "new" ? "" : "disabled"
                    }`}
                    to={`/course/${currentCourse}/level/${courseLevel}/quest/18/question/1`}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest18,
                      emptyClassIcon,
                      xClassIcon
                    )}
                  </Link>
                  <Link
                    className={`dashboard__course ${
                      courseTracker.Quest17 !== "new" ? "" : "disabled"
                    }`}
                    to={`/course/${currentCourse}/level/${courseLevel}/quest/17/question/1`}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest17,
                      emptyClassIcon,
                      circleClassIcon
                    )}
                  </Link>
                  <Link
                    className={`dashboard__course dashboard__course--big ${
                      courseTracker.Quest16 !== "new" ? "" : "disabled"
                    }`}
                    to={`/course/${currentCourse}/level/${courseLevel}/quest/16/question/1`}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest16,
                      purpleClassIcon,
                      triangleClassIcon
                    )}
                  </Link>
                </div>
                <div className="dashboard__course-row dashboard__course-row--eighth">
                  <Link
                    className={`dashboard__course ${
                      courseTracker.Quest20 !== "new" ? "" : "disabled"
                    }`}
                    to={`/course/${currentCourse}/level/${courseLevel}/quest/20/question/1`}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest20,
                      emptyClassIcon,
                      xClassIcon
                    )}
                  </Link>
                </div>
                <div className="dashboard__course-row dashboard__course-row--ninth">
                  <Link
                    className={`dashboard__course dashboard__course--big ${
                      courseTracker.Quest21 !== "new" ? "" : "disabled"
                    }`}
                    to={`/course/${currentCourse}/level/${courseLevel}/quest/21/question/1`}
                  >
                    {renderCourseIcon(
                      courseTracker.FinalQuest,
                      purpleClassIcon,
                      pinkClassIcon
                    )}
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
