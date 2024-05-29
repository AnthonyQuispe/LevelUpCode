import "./SettingCourse.scss";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { db } from "../../firebase/FirebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { UserContext } from "../../UserContext";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon.svg";
import DeleteIcon from "../../assets/icons/DeleteIcon.svg";
import HtmlIcon from "../../assets/icons/HtmlIcon.svg";
import ReactIcon from "../../assets/icons/ReactIcon.svg";
import Javascript from "../../assets/icons/JavascriptIcon.svg";
import CssIcon from "../../assets/icons/CssIcon.svg";

const courseIcons = {
  Html: HtmlIcon,
  CSS: CssIcon,
  React: ReactIcon,
  Javascript: Javascript,
};

export default function SettingCourse() {
  const { user } = useContext(UserContext);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      if (user) {
        const coursesRef = collection(db, "users", user.uid, "Courses");
        const courseSnapshot = await getDocs(coursesRef);
        const courses = [];
        courseSnapshot.forEach((doc) => {
          courses.push({ id: doc.id, ...doc.data() });
        });
        setCourses(courses);
        setLoading(false);
      }
    };
    fetchCourses();
  }, [user]);

  const handleDeleteCourse = async (courseId) => {
    await deleteDoc(doc(db, "users", user.uid, "Courses", courseId));
    setCourses(courses.filter((course) => course.id !== courseId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
                  src={courseIcons[course.courseName]}
                  alt={`Icon for ${course.courseName} course`}
                  className="setting-courses__icons"
                />
                {course.courseName}
              </div>
              <button
                className="setting-courses__button-minus"
                onClick={() => handleDeleteCourse(course.id)}
              >
                <img
                  src={DeleteIcon}
                  alt="Delete Icon"
                  className="setting-courses__icons"
                />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
