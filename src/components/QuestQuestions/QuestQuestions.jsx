import "./QuestQuestions.scss";
import { useState, useEffect, useRef } from "react";
import Button from "../button/button";
import closeButton from "../../assets/icons/CloseIcon.png";
import { db, auth } from "../../firebase/FirebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function QuestQuestions({
  course,
  quest,
  question,
  level,
  onQuestionCompletion,
}) {
  const [questData, setQuestData] = useState(null);
  const [userCode, setUserCode] = useState("");
  const [result, setResult] = useState(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    const fetchQuestData = async () => {
      const docPath = `course/${course}/levels/${level}/quests/${quest}/questions/${question}`;
      const docRef = doc(db, docPath);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setQuestData(data);
        setUserCode(data.initialCode ? data.initialCode.trim() : "");
      } else {
        console.log("No such document!");
      }
    };

    fetchQuestData();
  }, [course, quest, question, level]);

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
    if (userCode.trim() === questData.correctCode.trim()) {
      setResult(
        <div className="quest-question__modal">
          <p className="quest-question__question quest-question__question--correct">
            Correct! Well done.
          </p>
        </div>
      );
      await updateProgress("complete");

      // Delay for 2 seconds before closing the result and moving to the next question
      setTimeout(() => {
        setResult(null);
        onQuestionCompletion();
      }, 2000);
    } else {
      setResult(
        <div className="quest-question__modal">
          <p className="quest-question__question quest-question__question--incorrect">
            Incorrect! <br />
            {questData.question.split("\n").map((line, index) => (
              <span key={index} dangerouslySetInnerHTML={{ __html: line }} />
            ))}
          </p>
          <button
            className="quest-question__modal-button"
            onClick={closeResult}
          >
            <img
              src={closeButton}
              alt="close button"
              className="quest-question__modal-button-img"
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
        `users/${user.uid}/course/${course}/level/${level}/quests/${quest}/questions/${question}`
      );
      const currentDate = new Date();
      await setDoc(
        progressRef,
        { status, completionDate: currentDate },
        { merge: true }
      );

      // Check if this is the fifth question and it's completed correctly
      if (status === "complete" && parseInt(question) === 5) {
        const questRef = doc(
          db,
          `users/${user.uid}/course/${course}/level/${level}/quests/${quest}`
        );
        await setDoc(
          questRef,
          { status: "complete", completionDate: currentDate },
          { merge: true }
        );
      }
    }
  };

  if (!questData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="quest-question">
      <div>
        <h1
          dangerouslySetInnerHTML={{ __html: questData.title || "" }}
          className="quest-question__title"
        />
        <p
          dangerouslySetInnerHTML={{ __html: questData.definition || "" }}
          className="quest-question__definition"
        />
      </div>
      <div>
        <p className="quest-question__list-title">Key Points :</p>
        <ul className="quest-question__list">
          {(questData.keypoint || []).map((point, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: point }}
              className="quest-question__list-keys"
            />
          ))}
        </ul>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: questData.example || "" }}
        className="quest-question__example"
      />
      <p className="quest-question__question">
        {(questData.question || "").split("\n").map((line, index) => (
          <span key={index} dangerouslySetInnerHTML={{ __html: line }} />
        ))}
      </p>
      <div className="quest-question__interactive">
        <textarea
          className="quest-question__textarea"
          value={userCode}
          onChange={handleChange}
          ref={textareaRef}
        />
        <Button
          onClick={checkCode}
          text={"Check Your Code"}
          className="quest-question__button"
        />
        {result !== null && <div>{result}</div>}
      </div>
    </section>
  );
}
