import "./settingCourse.scss";
import { Link } from "react-router-dom";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon.svg";
import DeleteIcon from "../../assets/icons/DeleteIcon.svg";
import HtmlIcon from "../../assets/icons/HtmlIcon.svg";
import ReactIcon from "../../assets/icons/ReactIcon.svg";
import Javascript from "../../assets/icons/JavascriptIcon.svg";
import CssIcon from "../../assets/icons/CssIcon.svg";
import Button from "../button/button";

const courses = [
  { icon: HtmlIcon, text: "HTML" },
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
        <h1 className="setting-courses__title">Active Courses</h1>
        <h2 className="setting-courses__sub-title">Active Courses </h2>
      </section>
      <section className="setting-courses__container">
        <div className="setting-courses__button-container">
          {courses.map((course, index) => (
            <div key={index} className="setting-courses__button">
              <div className="setting-courses__button-left">
                <img
                  src={course.icon}
                  alt={`Icon for ${course.text} course`}
                  className="setting-courses__icons"
                />
                {course.text}
              </div>
              <button className="setting-courses__button-minus">
                <img
                  src={DeleteIcon}
                  alt="Delete Icon"
                  className="setting-courses__icons"
                />
              </button>
            </div>
          ))}
        </div>
        <Button text="Save" className="button-pink" />
      </section>
    </div>
  );
}
