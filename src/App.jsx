import "./styles/partials/_global.scss";
import { React } from "react";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./UserContext";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import TermConditionsPage from "./pages/TermsConditionsPage/TermsConditionsPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import SettingPage from "./pages/SettingPage/SettingPage";
import SelectCoursePage from "./pages/SelectLanguage/SelectLanguage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ReviewPage from "./pages/ReviewPage/ReviewPage";
import LessonPage from "./pages/LessonPage/LessonPage";

function App() {
  return (
    <UserProvider>
      <main>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/terms" element={<TermConditionsPage />} />
          <Route path="/select/course" element={<SelectCoursePage />} />
          <Route path="/" element={<DashboardPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/setting/*" element={<SettingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/lesson" element={<LessonPage />} />
        </Routes>
      </main>
    </UserProvider>
  );
}

export default App;
