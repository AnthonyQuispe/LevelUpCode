import React, { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase/FirebaseConfig";
import { useNavigate, useLocation } from "react-router-dom";

export const UserContext = createContext();

const initialCourseTracker = {
  Level: 1,
  Quest1: "new",
  Quest2: "new",
  Quest3: "new",
  Quest4: "new",
  Quest5: "new",
  Quest6: "new",
  Quest7: "new",
  Quest8: "new",
  Quest9: "new",
  Quest10: "new",
  Quest11: "new",
  Quest12: "new",
  Quest13: "new",
  Quest14: "new",
  Quest15: "new",
  Quest16: "new",
  Quest17: "new",
  Quest18: "new",
  Quest19: "new",
  Quest20: "new",
  FinalQuest: "new",
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userCourses, setUserCourses] = useState(null);
  const [awards, setAwards] = useState([]);
  const [userAwards, setUserAwards] = useState(null);
  const [courseTracker, setCourseTracker] = useState(initialCourseTracker);

  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();

  useEffect(() => {
    const checkAndUpdateUserAwards = async (uid, awardsArray, userData) => {
      try {
        const userAwardsRef = collection(db, "users", uid, "userAwards");
        const userAwardsSnapshot = await getDocs(userAwardsRef);
        const userAwards = {};
        userAwardsSnapshot.forEach((doc) => {
          userAwards[doc.id] = doc.data();
        });

        setUserAwards(userAwards);

        for (const award of awardsArray) {
          const conditionMet = checkAwardCondition(award, userData);
          if (conditionMet && !userAwards[award.id]) {
            await setDoc(doc(userAwardsRef, award.id), {
              name: award.name,
              description: award.description,
              img: award.img,
            });
            userAwards[award.id] = {
              name: award.name,
              description: award.description,
              img: award.img,
            };
          }
        }
        setUserAwards(userAwards);
      } catch (err) {
        console.error("Error updating user awards:", err);
        setError(err.message);
      }
    };

    const checkAwardCondition = (award, userData) => {
      const userValue = userData[award.conditionType];
      if (userValue !== undefined) {
        return userValue >= parseInt(award.conditionValue);
      }
      return false;
    };

    const fetchCourseProgress = async (uid, course, level) => {
      try {
        const path = `users/${uid}/course/${course}/level/${level}/quests`;

        const courseRef = collection(db, path);
        const querySnapshot = await getDocs(courseRef);

        const courseProgress = { ...initialCourseTracker, Level: level };
        querySnapshot.forEach((doc) => {
          const questId = doc.id;
          const status = doc.data().status || "new";
          courseProgress[`Quest${questId}`] = status;
        });

        setCourseTracker(courseProgress);
      } catch (err) {
        console.error("Error fetching course progress:", err);
        setError(err.message);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        setUser(user);
        try {
          let userDataQuery;
          if (location.pathname.startsWith("/profile/")) {
            const username = location.pathname.split("/")[2];
            const userRef = collection(db, "users");
            const q = query(userRef, where("userName", "==", username));
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
              const userDoc = querySnapshot.docs[0];
              userDataQuery = doc(db, "users", userDoc.id);
            } else {
              console.error("No such document!");
              setError("User data not found");
              return;
            }
          } else {
            userDataQuery = doc(db, "users", user.uid);
          }
          const userDoc = await getDoc(userDataQuery);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUserData(userData);

            const coursesRef = collection(db, "users", user.uid, "course");
            const courseSnapshot = await getDocs(coursesRef);
            if (courseSnapshot.empty) {
              navigate("/select/course");
            } else {
              const courses = {};
              courseSnapshot.forEach((doc) => {
                courses[doc.id] = doc.data();
              });
              setUserCourses(courses);

              // Fetch and update course progress
              const courseLevel = userData.courseLevel || 1;
              await fetchCourseProgress(
                user.uid,
                userData.currentCourse,
                courseLevel
              );

              const awardsRef = collection(db, "awards");
              const awardsSnapshot = await getDocs(awardsRef);
              const awardsArray = [];
              awardsSnapshot.forEach((doc) => {
                awardsArray.push({ id: doc.id, ...doc.data() });
              });
              setAwards(awardsArray);

              await checkAndUpdateUserAwards(user.uid, awardsArray, userData);
            }
          } else {
            console.error("No such document!");
            setError("User data not found");
          }
        } catch (err) {
          console.error("Error fetching user data:", err);
          setError(err.message);
        }
      } else {
        setUser(null);
        setUserData(null);
        setUserCourses(null);
        setUserAwards(null);
        if (
          location.pathname !== "/signup" &&
          location.pathname !== "/login" &&
          location.pathname !== "/landingpage"
        ) {
          navigate("/login");
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth, navigate, location]);

  const updateUserData = async (uid, newUserData) => {
    try {
      const userDocRef = doc(db, "users", uid);
      await setDoc(userDocRef, newUserData, { merge: true });
      setUserData((prevData) => ({ ...prevData, ...newUserData }));
    } catch (err) {
      console.error("Error updating user data:", err);
      setError(err.message);
    }
  };

  const updateCourseTracker = async (questNumber, status) => {
    if (!user) return;

    const updatedTracker = {
      ...courseTracker,
      [`Quest${questNumber}`]: status,
    };

    // Unlock the next lesson if the current one is completed
    if (
      status === "complete" &&
      questNumber < Object.keys(updatedTracker).length
    ) {
      updatedTracker[`Quest${questNumber + 1}`] = "new";
    }

    try {
      const path = `users/${user.uid}/course/${userData.currentCourse}/level/${courseTracker.Level}/quests`;
      await setDoc(doc(db, path, `Quest${questNumber}`), { status });
      if (updatedTracker[`Quest${questNumber + 1}`] === "new") {
        await setDoc(doc(db, path, `Quest${questNumber + 1}`), {
          status: "new",
        });
      }
      setCourseTracker(updatedTracker);
    } catch (error) {
      console.error("Error updating course tracker:", error);
      setError(error.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userData,
        loading,
        error,
        userCourses,
        awards,
        userAwards,
        updateUserData,
        courseTracker,
        updateCourseTracker,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
