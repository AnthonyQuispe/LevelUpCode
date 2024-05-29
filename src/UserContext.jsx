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

  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        setUser(user);
        try {
          // Fetch user data from Firestore
          const userDocRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setUserData(userDoc.data());
            // Fetch user's courses
            const coursesRef = collection(db, "users", user.uid, "Courses");
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
      value={{ user, userData, loading, error, userCourses, updateUserData }}
    >
      {children}
    </UserContext.Provider>
  );
};
