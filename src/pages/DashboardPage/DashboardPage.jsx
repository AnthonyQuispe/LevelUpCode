import "./DashboardPage.scss";
import { Link, useNavigate } from "react-router-dom";
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

const isCompleted = (status) => {
  return status === "complete" || status === "started";
};

function DashboardPage() {
  const navigate = useNavigate();
  const { userData, courseTracker, updateUserData } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [currentCourse, setCurrentCourse] = useState("");
  const [currentLevel, setCurrentLevel] = useState(1);

  useEffect(() => {
    if (userData) {
      setUserName(userData.userName || "");
      setCurrentCourse(userData.currentCourse || "");
      setCurrentLevel(userData.currentLevel || 1);
      console.log(courseTracker);
    }
  }, [userData, courseTracker]);

  const handleLevelChange = async (e) => {
    const newLevel = parseInt(e.target.value);
    setCurrentLevel(newLevel);
    if (userData) {
      await updateUserData(userData.uid, { currentLevel: newLevel });
      // Reload course progress for the new level
      navigate("/"); // Refresh the page to trigger context re-fetch
    }
  };

  const renderCourseIcon = (status, defaultIcon, completedIcon) => {
    return (
      <img
        className="dashboard__course-icon"
        src={isCompleted(status) ? completedIcon : defaultIcon}
        alt="course icon"
      />
    );
  };

  const handleCourseClick = () => {
    navigate("/select/course");
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
            <select
              className="dashboard__level-select"
              value={currentLevel}
              onChange={handleLevelChange}
            >
              <option value={1} className="dashboard__level-option">
                Novice
              </option>
              <option value={2} className="dashboard__level-option">
                Intermediate
              </option>
              <option value={3} className="dashboard__level-option">
                Veteran
              </option>
            </select>
          </div>
          <div className="dashboard__courses">
            <div className="dashboard__course-row dashboard__course-row--first">
              <Link
                className="dashboard__course dashboard__course--big"
                to={`/course/${currentCourse}/level/${currentLevel}/quest/1/question/1`}
              >
                {renderCourseIcon(
                  courseTracker.Quest1,
                  purpleClassIcon,
                  pinkClassIcon
                )}
              </Link>
              <Link
                className="dashboard__course"
                to={`/course/${currentCourse}/level/${currentLevel}/quest/2/question/1`}
              >
                {renderCourseIcon(
                  courseTracker.Quest2,
                  emptyClassIcon,
                  circleClassIcon
                )}
              </Link>
              <Link
                className="dashboard__course"
                to={`/course/${currentCourse}/level/${currentLevel}/quest/3/question/1`}
              >
                {renderCourseIcon(
                  courseTracker.Quest3,
                  emptyClassIcon,
                  triangleClassIcon
                )}
              </Link>
              <Link
                className="dashboard__course"
                to={`/course/${currentCourse}/level/${currentLevel}/quest/4/question/1`}
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
                className="dashboard__course"
                to={`/course/${currentCourse}/level/${currentLevel}/quest/5/question/1`}
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
                className="dashboard__course"
                to={`/course/${currentCourse}/level/${currentLevel}/quest/6/question/1`}
              >
                {renderCourseIcon(
                  courseTracker.Quest6,
                  emptyClassIcon,
                  xClassIcon
                )}
              </Link>
              <Link
                className="dashboard__course"
                to={`/course/${currentCourse}/level/${currentLevel}/quest/7/question/1`}
              >
                {renderCourseIcon(
                  courseTracker.Quest7,
                  emptyClassIcon,
                  triangleClassIcon
                )}
              </Link>
              <Link
                className="dashboard__course"
                to={`/course/${currentCourse}/level/${currentLevel}/quest/8/question/1`}
              >
                {renderCourseIcon(
                  courseTracker.Quest8,
                  emptyClassIcon,
                  circleClassIcon
                )}
              </Link>
              <Link
                className="dashboard__course dashboard__course--big"
                to={`/course/${currentCourse}/level/${currentLevel}/quest/9/question/1`}
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
                className="dashboard__course"
                to={`/course/${currentCourse}/level/${currentLevel}/quest/10/question/1`}
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
                className="dashboard__course dashboard__course--big"
                to={`/course/${currentCourse}/level/${currentLevel}/quest/11/question/1`}
              >
                {renderCourseIcon(
                  courseTracker.Quest11,
                  purpleClassIcon,
                  pinkClassIcon
                )}
              </Link>
              <Link
                className="dashboard__course"
                to={`/course/${currentCourse}/level/${currentLevel}/quest/12/question/1`}
              >
                {renderCourseIcon(
                  courseTracker.Quest12,
                  emptyClassIcon,
                  triangleClassIcon
                )}
              </Link>
              <Link
                className="dashboard__course"
                to={`/course/${currentCourse}/level/${currentLevel}/quest/13/question/1`}
              >
                {renderCourseIcon(
                  courseTracker.Quest13,
                  emptyClassIcon,
                  xClassIcon
                )}
              </Link>
              <Link
                className="dashboard__course"
                to={`/course/${currentCourse}/level/${currentLevel}/quest/14/question/1`}
              >
                {renderCourseIcon(
                  courseTracker.Quest14,
                  emptyClassIcon,
                  circleClassIcon
                )}
              </Link>
            </div>
            <div className="dashboard__course-row dashboard__course-row--sixth">
              <Link
                className="dashboard__course"
                to={`/course/${currentCourse}/level/${currentLevel}/quest/15/question/1`}
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
                className="dashboard__course"
                to={`/course/${currentCourse}/level/${currentLevel}/quest/16/question/1`}
              >
                {renderCourseIcon(
                  courseTracker.Quest16,
                  emptyClassIcon,
                  triangleClassIcon
                )}
              </Link>
              <Link
                className="dashboard__course"
                to={`/course/${currentCourse}/level/${currentLevel}/quest/17/question/1`}
              >
                {renderCourseIcon(
                  courseTracker.Quest17,
                  emptyClassIcon,
                  circleClassIcon
                )}
              </Link>
              <Link
                className="dashboard__course"
                to={`/course/${currentCourse}/level/${currentLevel}/quest/18/question/1`}
              >
                {renderCourseIcon(
                  courseTracker.Quest18,
                  emptyClassIcon,
                  xClassIcon
                )}
              </Link>
              <Link
                className="dashboard__course dashboard__course--big"
                to={`/course/${currentCourse}/level/${currentLevel}/quest/19/question/1`}
              >
                {renderCourseIcon(
                  courseTracker.Quest19,
                  purpleClassIcon,
                  greenClassIcon
                )}
              </Link>
            </div>
            <div className="dashboard__course-row dashboard__course-row--eighth">
              <Link
                className="dashboard__course"
                to={`/course/${currentCourse}/level/${currentLevel}/quest/20/question/1`}
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
                className="dashboard__course dashboard__course--big"
                to={`/course/${currentCourse}/level/${currentLevel}/quest/21/question/1`}
              >
                {renderCourseIcon(
                  courseTracker.FinalQuest,
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
