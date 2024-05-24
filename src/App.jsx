import "./styles/partials/_global.scss";
import { React, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import TermConditionsPage from "./pages/TermsConditionsPage/TermsConditionsPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import SettingPage from "./pages/SettingPage/SettingPage";
import SelectLanguage from "./pages/SelectLanguage/SelectLanguage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ReviewPage from "./pages/ReviewPage/ReviewPage";
import LessonPage from "./pages/LessonPage/LessonPage";

function App() {
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/signin");
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  return (
    <main>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/terms" element={<TermConditionsPage />} />
        <Route path="/" element={<DashboardPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/setting/*" element={<SettingPage />} />
        <Route path="/select/language" element={<SelectLanguage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/lesson" element={<LessonPage />} />
      </Routes>
    </main>
  );
}

export default App;
