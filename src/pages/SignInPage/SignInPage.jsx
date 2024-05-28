import "./SignInPage.scss";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Logo from "../../assets/logo/LevelUp.svg";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import GoogleButton from "../../components/googleButton/googleButton";
import { loginUser } from "../../firebase/FirebaseLogin";

function SignInPage() {
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, navigate to home page
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const emailRegex = /\S+@\S+\.\S/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    if (!password) {
      alert("Please enter your Password.");
      return;
    }

    try {
      // eslint-disable-next-line
      const user = await loginUser(email, password);
      console.log("Login Succesfully");
      navigate("/");
    } catch (error) {
      console.log("Error logging in");
    }
  };

  return (
    <main className="signin-page">
      <div className="signin-page__left-container">
        <img className="signin-page__logo" src={Logo} alt="Logo" />
        <p className="signin-page__subtitle">Begin Your Coding Journey!</p>
        <p className="signin-page__text">
          Whether you're a novice or a seasoned enthusiast, our app provides an
          immersive learning experience designed to demystify coding languages
          and empower you to create anything you can imagine.
        </p>
        <Button className="signin-page__learn-button" text={"Learn More"} />
      </div>
      <form className="signin-page__form" onSubmit={handleLoginSubmit}>
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
        <Button text={"Sign In"} />
        <Link to="/forgot" className="signin-page__link-text">
          Forgot Password?
        </Link>
        <div className="signin-page__link-container">
          <p className="signin-page__link-text">Don’t have an account?</p>
          <Link to="/signup" className="signin-page__link">
            Sign up
          </Link>
          <GoogleButton />
        </div>
      </form>
    </main>
  );
}

export default SignInPage;
