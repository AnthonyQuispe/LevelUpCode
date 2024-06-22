import "./SignUpPage.scss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Logo from "../../assets/logo/LevelUp.svg";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import { createUser, isUsernameTaken } from "../../firebase/FirebaseCreateUser";
import AlertModal from "../../components/AlertModal/AlertModal";

function SignUpPage() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const userName = event.target.userName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!userName) {
      setAlertMessage("Please enter your username.");
      setAlertVisible(true);
      return;
    }
    const usernameTaken = await isUsernameTaken(userName);
    if (usernameTaken) {
      setAlertMessage("Username is already taken. Please choose another one.");
      setAlertVisible(true);
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setAlertMessage("Please enter a valid email address.");
      setAlertVisible(true);
      return;
    }
    if (!password || password.length < 6) {
      setAlertMessage(
        "Please enter a valid password that's at least 6 characters long."
      );
      setAlertVisible(true);
      return;
    }

    try {
      await createUser(userName, email, password);
      setAlertMessage("Account created successfully!");
      setAlertVisible(true);
      navigate("/");
    } catch (error) {
      setAlertMessage("Account creation failed. Please try again.");
      setAlertVisible(true);
    }
  };

  return (
    <main className="signup-page">
      <AlertModal
        isVisible={alertVisible}
        message={alertMessage}
        onClose={() => setAlertVisible(false)}
      />
      <div className="signup-page__left-container">
        <img className="signup-page__logo" src={Logo} alt="Logo" />
        <p className="signup-page__subtitle">Craft Your Account! </p>
        <p className="signup-page__text">
          Whether you're a novice or a seasoned enthusiast, our app provides an
          immersive learning experience designed to demystify coding languages
          and empower you to create anything you can imagine.
        </p>
        <Button className="signup-page__learn-button" text={"Learn More"} />
      </div>
      <div className="signup-page__form-container">
        <form className="signup-page__form" onSubmit={handleFormSubmit}>
          <Input
            placeholder="Username"
            type="text"
            name="userName"
            id="userName"
            autoComplete="username"
          />
          <Input
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            autoComplete="current-email"
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
          />
          <Button text={"Sign Up"} />
        </form>
        <div className="signup-page__link-container">
          <p className="signup-page__link-text">Already have an account?</p>
          <Link to="/login" className="signup-page__link">
            Log In
          </Link>
          <GoogleButton />
        </div>
      </div>
    </main>
  );
}

export default SignUpPage;
