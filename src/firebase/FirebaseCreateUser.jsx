import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./FirebaseConfig";
import {
  doc,
  setDoc,
  collection,
  getDocs,
  serverTimestamp,
  query,
  where,
} from "firebase/firestore";

// Created an export function to create users profile in Auth and firestore
export const createUser = async (userName, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;
    const usersRef = collection(db, "users");

    // Store user profile in Firestore
    await setDoc(
      doc(usersRef, user.uid),
      {
        userName: userName,
        email: user.email,
        profilePicture: user.photoURL,
        joinDate: serverTimestamp(),
        name: "No Name Enter",
        rank: 0,
        courseStreak: 0,
        achievements: [],
        courses: {},
      },

      { merge: false }
    );
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw error;
  }
};

//Function to check if a username is already taken
export const isUsernameTaken = async (username) => {
  const userRef = collection(db, "users");
  const q = query(userRef, where("userName", "==", username));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
};
