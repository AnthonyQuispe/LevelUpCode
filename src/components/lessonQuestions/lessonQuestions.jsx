import "./lessonQuestions.scss";
import { useState, useEffect, useRef } from "react";
import Button from "../button/button";
import closeButton from "../../assets/icons/CloseIcon.png";

const Lesson = {
  title: "Whats an &lt;h1&gt; Element?",
  definition: "The &lt;h1&gt; element defines the main heading of a webpage.",
  keypoint: [
    "Purpose: Represents the most important heading.",
    "Syntax: &lt;h1&gt;content&lt;/h1&gt;",
    "SEO: Helps search engines understand your page's topic.",
    "Usage: Typically one &lt;h1&gt; per page for clear structure.",
  ],
  example: "&lt;h1&gt;This is a main heading&lt;/h1&gt;",
  question: `Find the &lt;h1&gt; element in the code below:
    Change the text from “Hello World” to “Pet Bakery”:`,
  initialCode: `
<html>
  <body>
    <h1>Hello World</h1> 
  </body>
</html>`,
  correctCode: `
<html>
  <body>
    <h1>Pet Bakery</h1> 
  </body>
</html>`,
};

export default function LessonQuestions() {
  const [userCode, setUserCode] = useState(Lesson.initialCode.trim());
  const [result, setResult] = useState(null);
  const textareaRef = useRef(null);

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

  const checkCode = () => {
    if (userCode.trim() === Lesson.correctCode.trim()) {
      setResult(
        <div className="lesson-question__modal">
          <p className="lesson-question__question lesson-question__question--correct">
            Correct! Well done.
          </p>
        </div>
      );
    } else {
      setResult(
        <div className="lesson-question__modal">
          <p className="lesson-question__question lesson-question__question--incorrect">
            Incorrect! <br />
            {Lesson.question.split("\n").map((line, index) => (
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
    }
  };

  const closeResult = () => {
    setResult(null); // Clear the result to close it
  };

  return (
    <section className="lesson-question">
      <div>
        <h1
          dangerouslySetInnerHTML={{ __html: Lesson.title }}
          className="lesson-question__title"
        />
        <p
          dangerouslySetInnerHTML={{ __html: Lesson.definition }}
          className="lesson-question__definition"
        />
      </div>
      <div>
        <p className="lesson-question__list-title">Key Points :</p>
        <ul className="lesson-question__list">
          {Lesson.keypoint.map((point, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: point }}
              className="lesson-question__list-keys"
            />
          ))}
        </ul>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: Lesson.example }}
        className="lesson-question__example"
      />
      <p className="lesson-question__question">
        {Lesson.question.split("\n").map((line, index) => (
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
