import "./MyCourses.scss";
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
  html: HtmlIcon,
  css: CssIcon,
  react: ReactIcon,
  javascript: Javascript,
};

export default function MyCourses() {
  const { user } = useContext(UserContext);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      if (user) {
        const coursesRef = collection(db, "users", user.uid, "course");
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
    await deleteDoc(doc(db, "users", user.uid, "course", courseId));
    setCourses(courses.filter((course) => course.id !== courseId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-courses">
      <section className="my-courses__top-container">
        <Link to="/setting" className="my-courses__link-back">
          <img
            src={LeftArrowIcon}
            alt="left arrow icon"
            className="my-courses__link-img"
          />
        </Link>
        <h1 className="my-courses__title">Active Courses</h1>
        <h2 className="my-courses__sub-title">Active Courses</h2>
      </section>
      <section className="my-courses__container">
        <div className="my-courses__button-container">
          {courses.map((course, index) => (
            <div key={index} className="my-courses__button">
              <div className="my-courses__button-left">
                <img
                  src={courseIcons[course.courseName]}
                  alt={`Icon for ${course.courseName} course`}
                  className="my-courses__icons"
                />
                {course.courseName}
              </div>
              <button
                className="my-courses__button-minus"
                onClick={() => handleDeleteCourse(course.id)}
              >
                <img
                  src={DeleteIcon}
                  alt="Delete Icon"
                  className="my-courses__icons"
                />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
