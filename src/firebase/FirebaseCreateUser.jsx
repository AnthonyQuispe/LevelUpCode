import {
  createUserWithEmailAndPassword,
  updateProfile,
  getIdToken,
} from "firebase/auth";
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

const storeFirebaseTokenIdLocalStorage = async (user) => {
  try {
    // Get the Firebase Authentication token
    const token = await getIdToken(user);

    // Store the token in local storage
    localStorage.setItem("firebaseToken", token);
  } catch (error) {
    console.error("Error storking token in local storage", error.message);
  }
};

// Created an export function to create users profile in Auth and firestore
export const createUser = async (
  firstName,
  lastName,
  userName,
  email,
  password
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;
    await updateProfile(user, { displayName: `${firstName} ${lastName}` });
    const usersRef = collection(db, "users");

    // Store user profile in Firestore
    await setDoc(
      doc(usersRef, user.uid),
      {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        userName: userName,
        createdAt: serverTimestamp(),
      },

      { merge: false }
    );

    // Store the firebase Authentication token in local storage
    await storeFirebaseTokenIdLocalStorage(user);
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
