import "./SelectDifficulty.scss";
import Button from "../../components/button/button";
import { useState } from "react";
import { auth, db } from "../../firebase/FirebaseConfig";
import { doc, runTransaction } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import AlertModal from "../../components/AlertModal/AlertModal";

const availableDifficulty = [
  { text: "Novice", value: 1 },
  { text: "Intermediate", value: 2 },
  { text: "Veteran", value: 3 },
];

function SelectDifficulty() {
  const [activeDifficulty, setActiveDifficulty] = useState(""); // Initialize activeDifficulty state
  const navigate = useNavigate();

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleDifficultyClick = (difficultyValue) => {
    setActiveDifficulty(difficultyValue); // Update activeDifficulty state on button click
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!activeDifficulty) {
      setAlertMessage("Please select a difficulty");
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

      const userDocRef = doc(db, "users", user.uid); // Reference to the user's document

      // Start a Firestore transaction to ensure atomic updates
      await runTransaction(db, async (transaction) => {
        const userDoc = await transaction.get(userDocRef);
        const userData = userDoc.data();

        // Update the course details in the user document
        transaction.update(userDocRef, {
          courseLevel: activeDifficulty,
        });
      });

      navigate("/");
    } catch (error) {
      console.error("Transaction failed: ", error);
      setAlertMessage("Failed to change difficulty. Please try again.");
      setAlertVisible(true);
    }
  };

  return (
    <main className="select-difficulty">
      <AlertModal
        isVisible={alertVisible}
        message={alertMessage}
        onClose={() => setAlertVisible(false)}
      />
      <h1 className="select-difficulty__title">Choose Your Difficulty</h1>
      <h2 className="select-difficulty__subtitle">
        You’ll be able to change this at any time
      </h2>
      <form className="select-difficulty__form" onSubmit={handleFormSubmit}>
        <div className="select-difficulty__courses-container">
          {availableDifficulty.map((difficulty, index) => (
            <button
              key={index}
              type="button"
              className={`select-difficulty__courses-button ${
                activeDifficulty === difficulty.value
                  ? "select-difficulty__courses-button--active"
                  : ""
              }`}
              onClick={() => handleDifficultyClick(difficulty.value)} // Pass difficulty value to handler
            >
              {difficulty.text}
            </button>
          ))}
        </div>
        <Button text="Next" className="button" type="submit" />
      </form>
    </main>
  );
}

export default SelectDifficulty;
