import "./styles/partials/_global.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import TermConditionsPage from "./pages/TermsConditionsPage/TermsConditionsPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import SettingPage from "./pages/SettingPage/SettingPage";
import SelectLanguage from "./pages/SelectLanguage/SelectLanguage";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/terms" element={<TermConditionsPage />} />
          <Route path="/" element={<DashboardPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/setting/*" element={<SettingPage />} />
          <Route path="/select/language" element={<SelectLanguage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
