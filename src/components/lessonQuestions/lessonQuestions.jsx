import "./lessonQuestions.scss";
import { useState, useEffect, useRef } from "react";
import Button from "../button/button";
import closeButton from "../../assets/icons/CloseIcon.png";
import { db, auth } from "../../firebase/FirebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function LessonQuestions({
  course,
  chapter,
  lesson,
  question,
  level,
}) {
  const [lessonData, setLessonData] = useState(null);
  const [userCode, setUserCode] = useState("");
  const [result, setResult] = useState(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    const fetchLessonData = async () => {
      const docPath = `course/${course}/level/${level}/chapter/${chapter}/lesson/${lesson}/question/${question}`;

      const docRef = doc(db, docPath);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();

        setLessonData(data);
        setUserCode(data.initialCode.trim());
      } else {
        console.log("No such document!");
      }
    };

    fetchLessonData();
  }, [course, chapter, lesson, question, level]);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [userCode]);

  const handleChange = (e) => {
    setUserCode(e.target.value);
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const checkCode = async () => {
    if (userCode.trim() === lessonData.correctCode.trim()) {
      setResult(
        <div className="lesson-question__modal">
          <p className="lesson-question__question lesson-question__question--correct">
            Correct! Well done.
          </p>
        </div>
      );
      await updateProgress("complete");
    } else {
      setResult(
        <div className="lesson-question__modal">
          <p className="lesson-question__question lesson-question__question--incorrect">
            Incorrect! <br />
            {lessonData.question.split("\n").map((line, index) => (
              <span key={index} dangerouslySetInnerHTML={{ __html: line }} />
            ))}
          </p>
          <button
            className="lesson-question__modal-button"
            onClick={closeResult}
          >
            <img
              src={closeButton}
              alt="close button"
              className="lesson-question__modal-button-img"
            />
          </button>
        </div>
      );
      await updateProgress("in progress");
    }
  };

  const closeResult = () => {
    setResult(null);
  };

  const updateProgress = async (status) => {
    const user = auth.currentUser;
    if (user) {
      const progressRef = doc(
        db,
        `users/${user.uid}/course/${course}/chapter/${chapter}/lesson/${lesson}`
      );
      await setDoc(progressRef, { status }, { merge: true });
    }
  };

  if (!lessonData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="lesson-question">
      <div>
        <h1
          dangerouslySetInnerHTML={{ __html: lessonData.title }}
          className="lesson-question__title"
        />
        <p
          dangerouslySetInnerHTML={{ __html: lessonData.definition }}
          className="lesson-question__definition"
        />
      </div>
      <div>
        <p className="lesson-question__list-title">Key Points :</p>
        <ul className="lesson-question__list">
          {lessonData.keypoint.map((point, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: point }}
              className="lesson-question__list-keys"
            />
          ))}
        </ul>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: lessonData.example }}
        className="lesson-question__example"
      />
      <p className="lesson-question__question">
        {lessonData.question.split("\n").map((line, index) => (
          <span key={index} dangerouslySetInnerHTML={{ __html: line }} />
        ))}
      </p>
      <div className="lesson-question__interactive">
        <textarea
          className="lesson-question__textarea"
          value={userCode}
          onChange={handleChange}
          ref={textareaRef}
        />
        <Button
          onClick={checkCode}
          text={"Check Your Code"}
          className="lesson-question__button"
        />
        {result !== null && <div>{result}</div>}
      </div>
    </section>
  );
}
