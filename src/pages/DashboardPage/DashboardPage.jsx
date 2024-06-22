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

  const handleCourseSelection = async (e) => {
    navigate("/select/course");
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
    if (
      courseTracker[`Quest${questNumber - 1}`] === "complete" ||
      questNumber === 1
    ) {
      navigate(
        `/course/${currentCourse}/level/${courseLevel}/quest/${questNumber}/question/1`
      );
    }
  };

  const handlePlayButtonClick = () => {
    const lastIncompleteQuest = findLastIncompleteQuest();
    if (lastIncompleteQuest !== -1) {
      navigate(
        `/course/${currentCourse}/level/${courseLevel}/quest/${lastIncompleteQuest}/question/1`
      );
    }
  };

  const findLastIncompleteQuest = () => {
    for (let i = 1; i <= 21; i++) {
      if (!isCompleted(courseTracker[`Quest${i}`])) {
        return i;
      }
    }
    return -1; // All quests are complete
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
            <button
              className="dashboard__play-button"
              onClick={handlePlayButtonClick}
            >
              <img
                className="dashboard__play-button-icon"
                src={playButtonIcon}
                alt="Play Button"
              />
            </button>
          </div>
          <button
            className="dashboard__title-container"
            onClick={handleCourseSelection}
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
                  <button
                    className={`dashboard__course dashboard__course--big ${
                      courseTracker.Quest1 !== "new" ? "" : "disabled"
                    }`}
                    onClick={() => handleCourseClick(1)}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest1,
                      pinkClassIcon,
                      pinkClassIcon
                    )}
                  </button>
                  <button
                    className={`dashboard__course ${
                      courseTracker.Quest2 !== "new" ? "" : "disabled"
                    }`}
                    onClick={() => handleCourseClick(2)}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest2,
                      emptyClassIcon,
                      circleClassIcon
                    )}
                  </button>
                  <button
                    className={`dashboard__course ${
                      courseTracker.Quest3 !== "new" ? "" : "disabled"
                    }`}
                    onClick={() => handleCourseClick(3)}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest3,
                      emptyClassIcon,
                      triangleClassIcon
                    )}
                  </button>
                  <button
                    className={`dashboard__course ${
                      courseTracker.Quest4 !== "new" ? "" : "disabled"
                    }`}
                    onClick={() => handleCourseClick(4)}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest4,
                      emptyClassIcon,
                      xClassIcon
                    )}
                  </button>
                </div>
                <div className="dashboard__course-row dashboard__course-row--second">
                  <button
                    className={`dashboard__course ${
                      courseTracker.Quest5 !== "new" ? "" : "disabled"
                    }`}
                    onClick={() => handleCourseClick(5)}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest5,
                      emptyClassIcon,
                      circleClassIcon
                    )}
                  </button>
                </div>
                <div className="dashboard__course-row dashboard__course-row--third">
                  <button
                    className={`dashboard__course ${
                      courseTracker.Quest9 !== "new" ? "" : "disabled"
                    }`}
                    onClick={() => handleCourseClick(9)}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest9,
                      emptyClassIcon,
                      xClassIcon
                    )}
                  </button>
                  <button
                    className={`dashboard__course ${
                      courseTracker.Quest8 !== "new" ? "" : "disabled"
                    }`}
                    onClick={() => handleCourseClick(8)}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest8,
                      emptyClassIcon,
                      triangleClassIcon
                    )}
                  </button>
                  <button
                    className={`dashboard__course ${
                      courseTracker.Quest7 !== "new" ? "" : "disabled"
                    }`}
                    onClick={() => handleCourseClick(7)}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest7,
                      emptyClassIcon,
                      circleClassIcon
                    )}
                  </button>
                  <button
                    className={`dashboard__course dashboard__course--big ${
                      courseTracker.Quest6 !== "new" ? "" : "disabled"
                    }`}
                    onClick={() => handleCourseClick(6)}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest6,
                      purpleClassIcon,
                      greenClassIcon
                    )}
                  </button>
                </div>
                <div className="dashboard__course-row dashboard__course-row--fourth">
                  <button
                    className={`dashboard__course ${
                      courseTracker.Quest10 !== "new" ? "" : "disabled"
                    }`}
                    onClick={() => handleCourseClick(10)}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest10,
                      emptyClassIcon,
                      circleClassIcon
                    )}
                  </button>
                </div>
                <div className="dashboard__course-row dashboard__course-row--fifth">
                  <button
                    className={`dashboard__course dashboard__course--big ${
                      courseTracker.Quest11 !== "new" ? "" : "disabled"
                    }`}
                    onClick={() => handleCourseClick(11)}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest11,
                      purpleClassIcon,
                      pinkClassIcon
                    )}
                  </button>
                  <button
                    className={`dashboard__course ${
                      courseTracker.Quest12 !== "new" ? "" : "disabled"
                    }`}
                    onClick={() => handleCourseClick(12)}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest12,
                      emptyClassIcon,
                      circleClassIcon
                    )}
                  </button>
                  <button
                    className={`dashboard__course ${
                      courseTracker.Quest13 !== "new" ? "" : "disabled"
                    }`}
                    onClick={() => handleCourseClick(13)}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest13,
                      emptyClassIcon,
                      triangleClassIcon
                    )}
                  </button>
                  <button
                    className={`dashboard__course  ${
                      courseTracker.Quest14 !== "new" ? "" : "disabled"
                    }`}
                    onClick={() => handleCourseClick(14)}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest14,
                      emptyClassIcon,
                      xClassIcon
                    )}
                  </button>
                </div>
                <div className="dashboard__course-row dashboard__course-row--sixth">
                  <button
                    className={`dashboard__course  ${
                      courseTracker.Quest15 !== "new" ? "" : "disabled"
                    }`}
                    onClick={() => handleCourseClick(15)}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest15,
                      emptyClassIcon,
                      triangleClassIcon
                    )}
                  </button>
                </div>
                <div className="dashboard__course-row dashboard__course-row--seventh">
                  <button
                    className={`dashboard__course  ${
                      courseTracker.Quest19 !== "new" ? "" : "disabled"
                    }`}
                    onClick={() => handleCourseClick(19)}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest19,
                      emptyClassIcon,
                      greenClassIcon
                    )}
                  </button>
                  <button
                    className={`dashboard__course ${
                      courseTracker.Quest18 !== "new" ? "" : "disabled"
                    }`}
                    onClick={() => handleCourseClick(18)}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest18,
                      emptyClassIcon,
                      xClassIcon
                    )}
                  </button>
                  <button
                    className={`dashboard__course  ${
                      courseTracker.Quest17 !== "new" ? "" : "disabled"
                    }`}
                    onClick={() => handleCourseClick(17)}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest17,
                      emptyClassIcon,
                      circleClassIcon
                    )}
                  </button>
                  <button
                    className={`dashboard__course dashboard__course--big ${
                      courseTracker.Quest16 !== "new" ? "" : "disabled"
                    }`}
                    onClick={() => handleCourseClick(16)}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest16,
                      purpleClassIcon,
                      triangleClassIcon
                    )}
                  </button>
                </div>
                <div className="dashboard__course-row dashboard__course-row--eighth">
                  <button
                    className={`dashboard__course ${
                      courseTracker.Quest20 !== "new" ? "" : "disabled"
                    }`}
                    onClick={() => handleCourseClick(20)}
                  >
                    {renderCourseIcon(
                      courseTracker.Quest20,
                      emptyClassIcon,
                      xClassIcon
                    )}
                  </button>
                </div>
                <div className="dashboard__course-row dashboard__course-row--ninth">
                  <button
                    className={`dashboard__course dashboard__course--big ${
                      courseTracker.Quest21 !== "new" ? "" : "disabled"
                    }`}
                    onClick={() => handleCourseClick(21)}
                  >
                    {renderCourseIcon(
                      courseTracker.FinalQuest,
                      purpleClassIcon,
                      pinkClassIcon
                    )}
                  </button>
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
