import "./SelectLanguage.scss";
import HtmlIcon from "../../assets/icons/HtmlIcon.svg";
import ReactIcon from "../../assets/icons/ReactIcon.svg";
import JavascriptIcon from "../../assets/icons/JavascriptIcon.svg";
import CssIcon from "../../assets/icons/CssIcon.svg";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { auth, db } from "../../firebase/FirebaseConfig";
import { doc, runTransaction } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import AlertModal from "../../components/AlertModal/AlertModal";

const availableCourses = [
  { icon: HtmlIcon, text: "html" },
  { icon: CssIcon, text: "css" },
  { icon: ReactIcon, text: "react" },
  { icon: JavascriptIcon, text: "javascript" },
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

      const userDocRef = doc(db, "users", user.uid);
      const courseDocRef = doc(userDocRef, "course", activeCourse);

      // Start a Firestore transaction to ensure atomic updates
      await runTransaction(db, async (transaction) => {
        const userDoc = await transaction.get(userDocRef);
        // eslint-disable-next-line
        const userData = userDoc.data();

        // Update the course details in the user document
        transaction.update(userDocRef, {
          currentCourse: activeCourse,
        });

        // Create or update the course document within the user's courses subcollection
        transaction.set(courseDocRef, {
          courseName: activeCourse,
          startedAt: new Date(),
        });

        // Additional logic if needed
      });

      navigate("/"); // Navigate to the home page after successful update
    } catch (error) {
      console.error("Transaction failed: ", error);
      setAlertMessage("Failed to add course. Please try again.");
      setAlertVisible(true);
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
        You’ll be able to change this at any time
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
