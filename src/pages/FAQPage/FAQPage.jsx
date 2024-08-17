import React, { useState } from "react";
import "./FAQPage.scss";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/LandingFooter/LandingFooter";
import BottomIcon from "../../assets/icons/BottomIcon.svg";

export default function FAQPage() {
  const initialState = new Array(9).fill(false);
  const [isAltClass, setIsAltClass] = useState(initialState);

  const toggleAltClass = (index) => {
    const newState = [...isAltClass];
    newState[index] = !newState[index];
    setIsAltClass(newState);
  };

  return (
    <div className="faq-page">
      <header className="faq-page__header">
        <Nav />
      </header>
      <main className="faq-page__main">
        <h1 className="faq-page__title">Frequently Asked Questions</h1>
        <ol className="faq-page__section faq-page__section--usage">
          <li className="faq-page__item">
            <h2 className="faq-page__section-title">Using LevelUp Code</h2>
          </li>
          <li className="faq-page__item">
            <div className="faq-page__item-top-container">
              <h2 className="faq-page__item-title">
                Why did my course change?
              </h2>
              <img
                src={BottomIcon}
                alt="Bottom Arrow Icon"
                className="faq-page__item-image"
                onClick={() => toggleAltClass(0)}
              />
            </div>
            <div
              className={`faq-page__item-bottom-container ${
                isAltClass[0] ? "faq-page__item-bottom-container--show" : ""
              }`}
            >
              <p className="faq-page__item-content">
                We believe that everyone should have access to free coding
                education. Our guidelines are meant to build a mutual
                understanding of what being a part of this community is all
                about. We will take action if any of these guidelines are not
                upheld, so please read carefully.
              </p>
            </div>
          </li>
          <li className="faq-page__item">
            <div className="faq-page__item-top-container">
              <h2 className="faq-page__item-title">What is a streak?</h2>
              <img
                src={BottomIcon}
                alt="Bottom Arrow Icon"
                className="faq-page__item-image"
                onClick={() => toggleAltClass(1)}
              />
            </div>
            <div
              className={`faq-page__item-bottom-container ${
                isAltClass[1] ? "faq-page__item-bottom-container--show" : ""
              }`}
            >
              <p className="faq-page__item-content">
                Your streak (flame icon) represents the number of days in a row
                you’ve completed a lesson on Duolingo. Language learning is
                about building goals over time, and the streak is a proven way
                to motivate you to keep learning and practicing every day. Tip:
                Practice reminders can be a great help for remembering to do
                your lessons. In your notification settings you can turn on
                practice reminders and set the time that will work best for you.
              </p>
            </div>
          </li>
          <li className="faq-page__item">
            <div className="faq-page__item-top-container">
              <h2 className="faq-page__item-title">
                What are leaderboards and leagues?
              </h2>
              <img
                src={BottomIcon}
                alt="Bottom Arrow Icon"
                className="faq-page__item-image"
                onClick={() => toggleAltClass(2)}
              />
            </div>
            <div
              className={`faq-page__item-bottom-container ${
                isAltClass[2] ? "faq-page__item-bottom-container--show" : ""
              }`}
            >
              <p className="faq-page__item-content">
                Leaderboards are a fun way to compete with other Duolingo
                learners in a weekly contest. As you earn more XP (experience
                points) with each lesson, you’ll rise in the ranks of your
                leaderboard. You’ll face a new group of competitors each week.
                Check out the Leaderboards tab in the app to get the competition
                started!
              </p>
            </div>
          </li>
        </ol>
        <ol className="faq-page__section faq-page__section--account-management">
          <li className="faq-page__item">
            <h2 className="faq-page__section-title">Account Management</h2>
          </li>
          <li className="faq-page__item">
            <div className="faq-page__item-top-container">
              <h2 className="faq-page__item-title">
                How do I change my username or email address?
              </h2>
              <img
                src={BottomIcon}
                alt="Bottom Arrow Icon"
                className="faq-page__item-image"
                onClick={() => toggleAltClass(3)}
              />
            </div>
            <div
              className={`faq-page__item-bottom-container ${
                isAltClass[3] ? "faq-page__item-bottom-container--show" : ""
              }`}
            >
              <p className="faq-page__item-content">
                If you want to edit your Duolingo username or email address, go
                to your settings and edit the username or email address. Your
                username appears on your weekly leaderboard. Remember to tap
                “Save changes” when you make any changes. If it is not changing,
                it means it is already taken by another Duolingo account. All
                usernames and email addresses are unique. Try changing the name
                again by adding unique letters or numbers to try to make it
                unique and save again. If the email address you are attempting
                to update to is already taken, you may have previously created
                another account with that email address.
              </p>
            </div>
          </li>
          <li className="faq-page__item">
            <div className="faq-page__item-top-container">
              <h2 className="faq-page__item-title">
                How do I find, follow, and block users on Duolingo?
              </h2>
              <img
                src={BottomIcon}
                alt="Bottom Arrow Icon"
                className="faq-page__item-image"
                onClick={() => toggleAltClass(4)}
              />
            </div>
            <div
              className={`faq-page__item-bottom-container ${
                isAltClass[4] ? "faq-page__item-bottom-container--show" : ""
              }`}
            >
              <p className="faq-page__item-content">
                You can connect with other learners on Duolingo! When you follow
                someone, they’ll show up on your friends list and you can
                encourage each other to stick with your language goals!
              </p>
            </div>
          </li>
          <li className="faq-page__item">
            <div className="faq-page__item-top-container">
              <h2 className="faq-page__item-title">
                How do I remove or reset a course?
              </h2>
              <img
                src={BottomIcon}
                alt="Bottom Arrow Icon"
                className="faq-page__item-image"
                onClick={() => toggleAltClass(5)}
              />
            </div>
            <div
              className={`faq-page__item-bottom-container ${
                isAltClass[5] ? "faq-page__item-bottom-container--show" : ""
              }`}
            >
              <p className="faq-page__item-content">
                Removing a course means erasing all of your learning progress
                and all of the XP you earned in that course, and this erasure
                cannot be undone. You can always add back a course later, but
                you’ll have to start the course from the beginning or retake a
                placement test. Removing a course won’t change your streak or
                leaderboard rank.
              </p>
            </div>
          </li>
          <li className="faq-page__item">
            <div className="faq-page__item-top-container">
              <h2 className="faq-page__item-title">
                I’m having trouble accessing my account.
              </h2>
              <img
                src={BottomIcon}
                alt="Bottom Arrow Icon"
                className="faq-page__item-image"
                onClick={() => toggleAltClass(6)}
              />
            </div>
            <div
              className={`faq-page__item-bottom-container ${
                isAltClass[6] ? "faq-page__item-bottom-container--show" : ""
              }`}
            >
              <p className="faq-page__item-content">
                If you forgot your password and need a new one, tap “Forgot
                password” on the login screen in the app, or visit
                http://duolingo.com/forgot_password and enter the email address
                associated with your Duolingo account. If you originally signed
                up with Google or Facebook, you’ll need to supply the email
                associated with your Google or Facebook account instead. We’ll
                send you a link to that email address, which will enable you to
                create a new password for your account. Be sure to check your
                spam folder if you do not see the reset email in your inbox! If
                you signed up with an inaccurate email address, you will not be
                able to change your password.
              </p>
            </div>
          </li>
          <li className="faq-page__item">
            <div className="faq-page__item-top-container">
              <h2 className="faq-page__item-title">
                How do I delete my account and access my data?
              </h2>
              <img
                src={BottomIcon}
                alt="Bottom Arrow Icon"
                className="faq-page__item-image"
                onClick={() => toggleAltClass(7)}
              />
            </div>
            <div
              className={`faq-page__item-bottom-container ${
                isAltClass[7] ? "faq-page__item-bottom-container--show" : ""
              }`}
            >
              <p className="faq-page__item-content">
                Visit the “Duolingo Data Vault” to request a copy of all of your
                personal data stored by Duolingo. This can take up to 30 days.
              </p>
            </div>
          </li>
          <li className="faq-page__item">
            <div className="faq-page__item-top-container">
              <h2 className="faq-page__item-title">
                What to do if your data was compromised
              </h2>
              <img
                src={BottomIcon}
                alt="Bottom Arrow Icon"
                className="faq-page__item-image"
                onClick={() => toggleAltClass(8)}
              />
            </div>
            <div
              className={`faq-page__item-bottom-container ${
                isAltClass[8] ? "faq-page__item-bottom-container--show" : ""
              }`}
            >
              <p className="faq-page__item-content">
                You may have received an email alerting you about a data breach
                outside of Duolingo that included your personal information.
                This email is legitimate and we strongly urge you to take action
                in order to secure your data.
              </p>
            </div>
          </li>
        </ol>
        <ol className="faq-page__section faq-page__section--subscription-payments">
          <li className="faq-page__item">
            <h2 className="faq-page__section-title">Subscription & Payments</h2>
          </li>
          <li className="faq-page__item">
            <div className="faq-page__item-top-container">
              <h2 className="faq-page__item-title">
                What is Super Duolingo and how do I subscribe?
              </h2>
              <img
                src={BottomIcon}
                alt="Bottom Arrow Icon"
                className="faq-page__item-image"
                onClick={() => toggleAltClass(9)}
              />
            </div>
            <div
              className={`faq-page__item-bottom-container ${
                isAltClass[9] ? "faq-page__item-bottom-container--show" : ""
              }`}
            >
              <p className="faq-page__item-content">
                “Super Duolingo” is a premium addition to the Duolingo
                experience. With Super Duolingo, your benefits include: No ads:
                Learn without interruptions Unlimited Hearts: Enable Unlimited
                Hearts so mistakes won’t slow you down Personalized Practice.
                Make a mistake? No problem, you’ll receive a personalized lesson
                to practice your mistakes. Unlimited attempts at Legendary
                challenges. Master each of your units by reaching Legendary
                status! Also, as a Super Duolingo subscriber, you support our
                mission to keep education free for millions around the world. We
                offer the same lesson content to all users because our mission
                is to develop the best language learning education in the world
                and make it universally available. When you start or end a
                subscription, your learning progress and streak will not be
                affected.
              </p>
            </div>
          </li>
        </ol>
      </main>
      <Footer />
    </div>
  );
}
