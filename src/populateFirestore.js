import { db } from "./firebase/FirebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";
import { htmlLevels } from "./data/htmlData";
// import { jsLevels } from "./jsData";
// import { cssLevels } from "./cssData";
// import { sassLevels } from "./sassData";
// import { reactLevels } from "./reactData";

// Map courses to their respective levels
const courseLevelsMap = {
  html: htmlLevels,
  // Add other courses here...
  // javascript: jsLevels,
  // css: cssLevels,
  // sass: sassLevels,
  // react: reactLevels,
};

export async function populateFirestore() {
  for (const [course, levels] of Object.entries(courseLevelsMap)) {
    const courseRef = doc(db, "course", course); // Adjusted path to ensure odd segments
    await setDoc(courseRef, { courseName: course });

    for (let i = 0; i < levels.length; i++) {
      const level = levels[i];
      const levelRef = doc(courseRef, "levels", `${i + 1}`); // Adjusted path to ensure odd segments
      await setDoc(levelRef, { levelName: level.levelName });

      const questsRef = collection(levelRef, "quests"); // Collection reference with even segments
      for (let j = 0; j < level.quests.length; j++) {
        const quest = level.quests[j];
        const questRef = doc(questsRef, `${j + 1}`); // Adjusted path to ensure odd segments
        await setDoc(questRef, { QuestName: quest.QuestName });

        const questionsRef = collection(questRef, "questions"); // Collection reference with even segments
        for (let k = 0; k < quest.questions.length; k++) {
          const question = quest.questions[k];
          const questionRef = doc(questionsRef, `${k + 1}`); // Adjusted path to ensure odd segments
          await setDoc(questionRef, question);
        }
      }
    }
  }
  console.log("Firestore has been populated!");
}
