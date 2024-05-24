import { signInWithEmailAndPassword, getIdToken } from "firebase/auth";
import { auth } from "./FirebaseConfig";

// Function to store the Firebase Authentication token in local storage
const storeFirebaseTokenInLocalStorage = async (user) => {
  try {
    // Get the Firebase Authentication token
    const token = await getIdToken(user);

    // Store the token in local storage
    localStorage.setItem("firebaseToken", token);
  } catch (error) {
    console.error("Error storing token in local storage:", error.message);
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;

    // Store the Firebase Authentication token in local storage
    await storeFirebaseTokenInLocalStorage(user);

    return user;
  } catch (error) {
    console.error("Error Logging in:", error.message);
    throw error;
  }
};
