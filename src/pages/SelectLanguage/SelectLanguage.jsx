import "./SelectLanguage.scss";
import HtmlIcon from "../../assets/icons/HtmlIcon.svg";
import ReactIcon from "../../assets/icons/ReactIcon.svg";
import Javascript from "../../assets/icons/JavascriptIcon.svg";
import CssIcon from "../../assets/icons/CssIcon.svg";
import Button from "../../components/button/button";

const availableCourses = [
  { icon: HtmlIcon, text: "Html" },
  { icon: CssIcon, text: "CSS" },
  { icon: ReactIcon, text: "React" },
  { icon: Javascript, text: "Javascript" },
];

function SelectLanguage() {
  return (
    <main className="select-language">
      <h1 className="select-language__title">Choose Your Language</h1>
      <h2 className="select-language__subtitle">
        You’ll be able to change this later
      </h2>
      <form className="select-language__form">
        <div className="select-language__courses-container">
          {availableCourses.map((course, index) => (
            <button key={index} className="select-language__courses-button">
              <img src={course.icon} alt={`Icon for ${course.text} course`} />
              {course.text}
            </button>
          ))}
        </div>
        <Button text="Next" className="button" />
      </form>
    </main>
  );
}

export default SelectLanguage;
