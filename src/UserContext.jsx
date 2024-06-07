import React, { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/FirebaseConfig";
import { useNavigate, useLocation } from "react-router-dom";

export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userCourses, setUserCourses] = useState(null);
  const [awards, setAwards] = useState([]);
  const [userAwards, setUserAwards] = useState(null);

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

        setUserAwards(userAwards); // Set the user awards in the state

        // Check and add new awards if criteria are met
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
        setUserAwards(userAwards); // Update the user awards after checking
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

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        setUser(user);
        try {
          // Fetch user data from Firestore
          const userDocRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUserData(userData);

            // Fetch user's courses
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
            }

            // Fetch awards data
            const awardsRef = collection(db, "awards");
            const awardsSnapshot = await getDocs(awardsRef);
            const awardsArray = [];
            awardsSnapshot.forEach((doc) => {
              awardsArray.push({ id: doc.id, ...doc.data() });
            });
            setAwards(awardsArray);

            // Check and update user awards
            await checkAndUpdateUserAwards(user.uid, awardsArray, userData);
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
          location.pathname !== "/signin"
        ) {
          navigate("/signin");
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth, navigate, location]);

  // Method to update user data
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
