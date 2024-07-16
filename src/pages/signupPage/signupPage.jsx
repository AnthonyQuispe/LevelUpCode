import "./SignUpPage.scss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {
  createUser,
  isUsernameTaken,
  isEmailTaken,
} from "../../firebase/FirebaseCreateUser";
import AlertModal from "../../components/AlertModal/AlertModal";

export default function SignUpPage() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  const handleEmailFormSubmit = async (event) => {
    event.preventDefault();
    const emailInput = event.target.email.value;

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(emailInput)) {
      setAlertMessage("Please enter a valid email address.");
      setAlertVisible(true);
      return;
    }

    const emailTaken = await isEmailTaken(emailInput);
    if (emailTaken) {
      setAlertMessage("Email is already in use.");
      setAlertVisible(true);
      return;
    }

    setEmail(emailInput);
    setStep(2);
  };

  const handleUsernameFormSubmit = async (event) => {
    event.preventDefault();
    const usernameInput = event.target.username.value;

    if (!usernameInput) {
      setAlertMessage("Please enter your username.");
      setAlertVisible(true);
      return;
    }

    const usernameTaken = await isUsernameTaken(usernameInput);
    if (usernameTaken) {
      setAlertMessage("Username is already taken. Please choose another one.");
      setAlertVisible(true);
      return;
    }

    setUsername(usernameInput);
    setStep(3);
  };

  const handlePasswordFormSubmit = async (event) => {
    event.preventDefault();
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (!password || password.length < 6) {
      setAlertMessage(
        "Please enter a valid password that's at least 6 characters long."
      );
      setAlertVisible(true);
      return;
    }

    if (password !== confirmPassword) {
      setAlertMessage("Passwords do not match.");
      setAlertVisible(true);
      return;
    }

    try {
      await createUser(username, email, password);
      setAlertMessage("Account created successfully!");
      setAlertVisible(true);
      navigate("/dashboard");
    } catch (error) {
      setAlertMessage("Account creation failed. Please try again.");
      setAlertVisible(true);
    }
  };

  return (
    <div className="signup-container">
      <AlertModal
        isVisible={alertVisible}
        message={alertMessage}
        onClose={() => setAlertVisible(false)}
      />

      {step === 1 && (
        <>
          <h1 className="signup-container__title">Sign Up</h1>
          <form
            className="signup-container__form"
            onSubmit={handleEmailFormSubmit}
          >
            <Input
              key="email"
              placeholder="Enter Your Email"
              type="email"
              name="email"
              id="email"
              autoComplete="current-email"
            />
            <Button text={"Next"} className="button-pink-big" />
          </form>
          <Link className="signup-container__link" to="/?isLoggingIn=true">
            Already have an account?{" "}
            <span className="signup-container__link signup-container__link--pink">
              Sign In
            </span>
          </Link>
        </>
      )}

      {step === 2 && (
        <>
          <h1 className="signup-container__title">Create A Username</h1>
          <form
            className="signup-container__form"
            onSubmit={handleUsernameFormSubmit}
          >
            <Input
              key="username"
              placeholder="Enter Your Username"
              type="text"
              name="username"
              id="username"
              autoComplete="username"
            />
            <Button text={"Next"} className="button-pink-big" />
          </form>
        </>
      )}
      {step === 3 && (
        <>
          <h1 className="signup-container__title">Create A Password</h1>
          <form
            className="signup-container__form"
            onSubmit={handlePasswordFormSubmit}
          >
            <Input
              key="password"
              placeholder="Enter Password"
              type="password"
              name="password"
              id="password"
              autoComplete="new-password"
            />
            <Input
              key="confirmPassword"
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              autoComplete="new-password"
            />
            <Button text={"Sign Up"} className="button-pink-big" />
          </form>
        </>
      )}
    </div>
  );
}
