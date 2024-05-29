import "./SelectLanguage.scss";
import HtmlIcon from "../../assets/icons/HtmlIcon.svg";
import ReactIcon from "../../assets/icons/ReactIcon.svg";
import Javascript from "../../assets/icons/JavascriptIcon.svg";
import CssIcon from "../../assets/icons/CssIcon.svg";
import Button from "../../components/button/button";
import { useState } from "react";
import { auth, db } from "../../firebase/FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const availableCourses = [
  { icon: HtmlIcon, text: "Html" },
  { icon: CssIcon, text: "CSS" },
  { icon: ReactIcon, text: "React" },
  { icon: Javascript, text: "Javascript" },
];

function SelectLanguage() {
  const [activeCourse, setActiveCourse] = useState("");
  const navigate = useNavigate();

  const handleCourseClick = (course) => {
    setActiveCourse(course);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!activeCourse) {
      alert("Please select a course.");
      return;
    }

    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error("No authenticated user.");
      }

      const courseDocRef = doc(db, "users", user.uid, "Courses", activeCourse);

      await setDoc(courseDocRef, {
        courseName: activeCourse,
        startedAt: new Date(),
      });

      alert("Course added successfully.");
      navigate("/"); // Navigate to the home page
    } catch (error) {
      console.error("Error adding course:", error);
      alert("Failed to add course. Please try again.");
    }
  };

  return (
    <main className="select-language">
      <h1 className="select-language__title">Choose Your Language</h1>
      <h2 className="select-language__subtitle">
        You’ll be able to change this later
      </h2>
      <form className="select-language__form" onSubmit={handleFormSubmit}>
        <div className="select-language__courses-container">
          {availableCourses.map((course, index) => (
            <button
              key={index}
              type="button"
              className={`select-language__courses-button ${
                activeCourse === course.text
                  ? "select-language__courses-button--active"
                  : ""
              }`}
              onClick={() => handleCourseClick(course.text)}
            >
              <img
                src={course.icon}
                alt={`Icon for ${course.text} course`}
                className="select-language__img"
              />
              {course.text}
            </button>
          ))}
        </div>
        <Button text="Next" className="button" type="submit" />
      </form>
    </main>
  );
}

export default SelectLanguage;
