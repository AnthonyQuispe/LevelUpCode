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
import AlertModal from "../../components/AlertModal/AlertModal";

const availableCourses = [
  { icon: HtmlIcon, text: "html" },
  { icon: CssIcon, text: "css" },
  { icon: ReactIcon, text: "react" },
  { icon: Javascript, text: "javascript" },
];

function SelectLanguage() {
  const [activeCourse, setActiveCourse] = useState("");
  const navigate = useNavigate();

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleCourseClick = (course) => {
    setActiveCourse(course);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!activeCourse) {
      setAlertMessage("Please select a course.");
      setAlertVisible(true);
      return;
    }

    try {
      const user = auth.currentUser;
      if (!user) {
        setAlertMessage("No authenticated user.");
        setAlertVisible(true);
        return;
      }

      const courseDocRef = doc(db, "users", user.uid, "course", activeCourse);

      await setDoc(courseDocRef, {
        courseName: activeCourse,
        startedAt: new Date(),
      });
      navigate("/"); // Navigate to the home page
    } catch (error) {
      setAlertMessage("Failed to add course. Please try again.", error);
      setAlertVisible(true);
      return;
    }
  };

  return (
    <main className="select-language">
      <AlertModal
        isVisible={alertVisible}
        message={alertMessage}
        onClose={() => setAlertVisible(false)}
      />
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
