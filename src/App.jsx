import "./styles/partials/_global.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./UserContext";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import TermConditionsPage from "./pages/TermsConditionsPage/TermsConditionsPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import SettingPage from "./pages/SettingPage/SettingPage";
import SelectCoursePage from "./pages/SelectLanguage/SelectLanguage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ProfilePagePublic from "./pages/ProfilePagePublic/ProfilePage";
import LeaderBoardPage from "./pages/LeaderboardPage/LeaderboardPage";
import QuestPage from "./pages/QuestPage/QuestPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import SoundButton from "./components/SoundButton/SoundButton";

function App() {
  return (
    <UserProvider>
      <main>
        <SoundButton />
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/terms" element={<TermConditionsPage />} />
          <Route path="/select/course" element={<SelectCoursePage />} />
          <Route path="/" element={<DashboardPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/setting/*" element={<SettingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/:username" element={<ProfilePagePublic />} />
          <Route path="/leaderboard" element={<LeaderBoardPage />} />
          <Route
            path="/course/:course/level/:level/quest/:quest/question/:question"
            element={<QuestPage />}
            exact
          />
        </Routes>
      </main>
    </UserProvider>
  );
}

export default App;
