import "./settingCourse.scss";
import { Link } from "react-router-dom";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon.svg";
import DeleteIcon from "../../assets/icons/DeleteIcon.svg";
import HtmlIcon from "../../assets/icons/HtmlIcon.svg";
import ReactIcon from "../../assets/icons/ReactIcon.svg";
import Javascript from "../../assets/icons/JavascriptIcon.svg";
import CssIcon from "../../assets/icons/CssIcon.svg";

const courses = [
  { icon: HtmlIcon, text: "Html" },
  { icon: CssIcon, text: "CSS" },
  { icon: ReactIcon, text: "React" },
  { icon: Javascript, text: "Javascript" },
];

export default function settingCourse() {
  return (
    <div className="setting-courses">
      <section className="setting-courses__top-container">
        <Link to="/setting" className="setting-courses__link-back">
          <img
            src={LeftArrowIcon}
            alt="left arrow icon"
            className="setting-courses__link-img"
          />
        </Link>
        <h1 className="setting-courses__title">setting Courses</h1>
      </section>

      <section className="setting-courses__container">
        <div className="setting-courses__button-container">
          {courses.map((course, index) => (
            <button key={index} className="setting-courses__button">
              <img src={DeleteIcon} alt="Delete Icon" />
              <img src={course.icon} alt="right arrow icon" />
              {course.text}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
