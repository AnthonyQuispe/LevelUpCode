import "./TermsConditionsPage.scss";

import Nav from "../../components/Nav/Nav";

function TermConditionsPage() {
  return (
    <div className="termsconditions-page">
      <header className="termsconditions-page__header">
        <Nav />
      </header>
      <main className="termsconditions-page__main">
        <h1 className="termsconditions-page__title">
          Terms and Conditions of Service
        </h1>
        <section className="termsconditions-page__section">
          <h2 className="termsconditions-page__subtitle">
            1. Acceptance of Terms
          </h2>
          <p className="termsconditions-page__text">
            By accessing or using the LevelUp Code web application, you agree to
            be bound by these terms and conditions. If you do not agree to these
            terms, please do not use the application.
          </p>
        </section>
        <section className="termsconditions-page__section">
          <h2 className="termsconditions-page__subtitle">
            2. Use of the Application
          </h2>
          <p className="termsconditions-page__text">
            LevelUp Code provides a platform for users to learn how to code. All
            content and features provided by LevelUp Code are free of charge.
          </p>
        </section>
        <section className="termsconditions-page__section">
          <h2 className="termsconditions-page__subtitle">
            3. User Information:
          </h2>
          <p className="termsconditions-page__text">
            To use LevelUp Code, users are required to sign in using Google
            Single Sign-On (SSO). By signing in, users consent to LevelUp Code
            collecting and storing the following information:
            <ul className="termsconditions-page__list">
              <li className="termsconditions-page__list-item">Username</li>
              <li className="termsconditions-page__list-item">Full Name</li>
              <li className="termsconditions-page__list-item">Date of Birth</li>
              <li className="termsconditions-page__list-item">Email Address</li>
            </ul>
          </p>
        </section>
        <section className="termsconditions-page__section">
          <h2 className="termsconditions-page__subtitle">4. Data Usage:</h2>
          <p className="termsconditions-page__text">
            LevelUp Code may use the collected user information to: Personalize
            user experience Improve our services and content Analyze user
            behavior and preferences Send relevant notifications and updates
            Ensure the security of our platform
            <ul className="termsconditions-page__list">
              <li className="termsconditions-page__list-item">
                Personalize user experience
              </li>
              <li className="termsconditions-page__list-item">
                Improve our services and content Analyze user behavior and
                preferences
              </li>
              <li className="termsconditions-page__list-item">
                Send relevant notifications and updates Ensure the security of
                our platform
              </li>
            </ul>
          </p>
        </section>
        <section className="termsconditions-page__section">
          <h2 className="termsconditions-page__subtitle">5. Privacy</h2>
          <p className="termsconditions-page__text">
            Protecting user privacy is a top priority for LevelUp Code. We will
            not sell, rent, or disclose user information to third parties
            without explicit consent, except as required by law.
          </p>
        </section>
        <section className="termsconditions-page__section">
          <h2 className="termsconditions-page__subtitle">6. Security</h2>
          <p className="termsconditions-page__text">
            LevelUp Code implements industry-standard security measures to
            protect user data against unauthorized access, alteration,
            disclosure, or destruction.
          </p>
        </section>
        <section className="termsconditions-page__section">
          <h2 className="termsconditions-page__subtitle">
            7. User Responsibilities:
          </h2>
          <p className="termsconditions-page__text">
            Users are responsible for maintaining the confidentiality of their
            account credentials and for any activity that occurs under their
            account. Users must notify LevelUp Code immediately of any
            unauthorized use of their account or any other breach of security.
          </p>
        </section>
        <section className="termsconditions-page__section">
          <h2 className="termsconditions-page__subtitle">8. Content Usage:</h2>
          <p className="termsconditions-page__text">
            All content provided by LevelUp Code, including but not limited to
            tutorials, exercises, and resources, is for educational purposes
            only. Users may not reproduce, distribute, modify, or sell any
            content without prior written permission from LevelUp Code.
          </p>
        </section>
        <section className="termsconditions-page__section">
          <h2 className="termsconditions-page__subtitle">
            9. Limitation of Liability:
          </h2>
          <p className="termsconditions-page__text">
            LevelUp Code shall not be liable for any direct, indirect,
            incidental, special, or consequential damages arising out of or in
            any way connected with the use of the application.
          </p>
        </section>
        <section className="termsconditions-page__section">
          <h2 className="termsconditions-page__subtitle">
            10. Changes to Terms:
          </h2>
          <p className="termsconditions-page__text">
            LevelUp Code reserves the right to modify or revise these terms and
            conditions at any time. Users will be notified of any changes, and
            continued use of the application after such modifications
            constitutes acceptance of the revised terms.
          </p>
        </section>

        <section className="termsconditions-page__section">
          <h2 className="termsconditions-page__subtitle">11. Governing Law</h2>
          <p className="termsconditions-page__text">
            These terms and conditions shall be governed by and construed in
            accordance with the laws of the State of Florida, without regard to
            its conflict of law provisions.
          </p>
        </section>

        <p className="termsconditions-page__text">
          If you have any questions or concerns about these terms and
          conditions, please contact us at{" "}
          <a
            className="termsconditions-page__mail"
            href="mailto:LevelUpSupport@gmail.com"
          >
            LevelUpSupport@gmail.com
          </a>
        </p>
        <p className="termsconditions-page__text">
          By using LevelUp Code, you agree to abide by these terms and
          conditions. Enjoy learning to code and leveling up your skills with
          us!
        </p>
      </main>
    </div>
  );
}

export default TermConditionsPage;
