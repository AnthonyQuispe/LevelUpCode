import "./PrivacyPolicyPage.scss";

import Nav from "../../components/Nav/Nav";
import LandingFooter from "../../components/LandingFooter/LandingFooter";

function PrivacyPolicyPage() {
  return (
    <div className="privacypolicy-page">
      <header className="privacypolicy-page__header">
        <Nav />
      </header>
      <main className="privacypolicy-page__main">
        <h1 className="privacypolicy-page__title">Privacy Policy</h1>
        <ol className="privacypolicy-page__list">
          <li className="privacypolicy-page__item">
            <h2 className="privacypolicy-page__subtitle">General </h2>
            <p className="privacypolicy-page__text">
              At LevelUp Code, we value your privacy and are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, and share your information. By using LevelUp
              Code’s mobile web application and related services (“Service”),
              you agree to the collection, use, and sharing of your personal
              information as described in this Privacy Policy.
            </p>
          </li>
          <li className="privacypolicy-page__item">
            <h2 className="privacypolicy-page__subtitle">
              Information We Collect
            </h2>
            <ul className="privacypolicy-page__list--alt">
              <li className="privacypolicy-page__list-item">
                Email Address: When you register for an account, we collect your
                email address.
              </li>
              <li className="privacypolicy-page__list-item">
                Username and Name: You will provide a username and your name
                during registration.
              </li>
            </ul>
          </li>
          <li className="privacypolicy-page__item">
            <h2 className="privacypolicy-page__subtitle">
              How We Use Your Information
            </h2>
            <p className="privacypolicy-page__text">
              LevelUp Code uses your personal information for the following
              purposes:
              <ul className="privacypolicy-page__list--alt">
                <li className="privacypolicy-page__list-item">
                  Providing and Improving the Service: We use your information
                  to operate, maintain, and enhance the Service.
                </li>
                <li className="privacypolicy-page__list-item">
                  Communicating with You: We may use your email address to send
                  you updates, security alerts, and support messages.
                </li>
                <li className="privacypolicy-page__list-item">
                  Personalizing Your Experience: We may use your username and
                  name to personalize your experience on LevelUp Code.
                </li>
              </ul>
            </p>
          </li>
          <li className="privacypolicy-page__item">
            <h2 className="privacypolicy-page__subtitle">
              Sharing Your Information
            </h2>
            <p className="privacypolicy-page__text">
              LevelUp Code may share your information with third parties in the
              following ways:
              <ul className="privacypolicy-page__list--alt">
                <li className="privacypolicy-page__list-item">
                  Service Providers: We may share your information with service
                  providers that perform services on our behalf, such as
                  hosting, analytics, and customer support.
                </li>
                <li className="privacypolicy-page__list-item">
                  Legal Compliance and Protection: We may disclose your
                  information to comply with legal obligations, protect our
                  rights and property, and prevent fraud or other illegal
                  activities.
                </li>
              </ul>
            </p>
          </li>
          <li className="privacypolicy-page__item">
            <h2 className="privacypolicy-page__subtitle">
              Your Data Subject Rights
            </h2>
            <p className="privacypolicy-page__text">
              You have the following rights regarding your personal information:
            </p>
            <ul className="privacypolicy-page__list--alt">
              <li className="privacypolicy-page__list-item">
                Access: You can request access to the personal information we
                hold about you.
              </li>
              <li className="privacypolicy-page__list-item">
                Correction: You can request that we correct any inaccurate or
                incomplete personal information.
              </li>
              <li className="privacypolicy-page__list-item">
                Deletion: You can request that we delete your personal
                information.
              </li>
              <li className="privacypolicy-page__list-item">
                Objection and Restriction: You can object to or request that we
                restrict the processing of your personal information.
              </li>
              <li className="privacypolicy-page__list-item">
                To exercise these rights, please contact us at{" "}
                <a
                  className="privacypolicy-page__mail"
                  href="mailto:LevelUpSupport@gmail.com"
                >
                  LevelUpSupport@gmail.com
                </a>
              </li>
            </ul>
          </li>
          <li className="privacypolicy-page__item">
            <h2 className="privacypolicy-page__subtitle">Data Retention</h2>
            <p className="privacypolicy-page__text">
              LevelUp Code will retain your personal information for as long as
              necessary to provide the Service, comply with legal obligations,
              resolve disputes, and enforce our agreements. We may retain
              anonymous or aggregated information indefinitely.
            </p>
          </li>
          <li className="privacypolicy-page__item">
            <h2 className="privacypolicy-page__subtitle">Children’s Privacy</h2>
            <p className="privacypolicy-page__text">
              LevelUp Code is not intended for use by children under the age of
              13. We do not knowingly collect personal information from children
              under 13. If we become aware that we have collected personal
              information from a child under 13, we will take steps to delete
              such information.
            </p>
          </li>
          <li className="privacypolicy-page__item">
            <h2 className="privacypolicy-page__subtitle">
              Cookies and Tracking Technologies
            </h2>
            <p className="privacypolicy-page__text">
              LevelUp Code may use cookies and similar tracking technologies to
              collect information about your use of the Service and to improve
              your experience. You can manage your cookie preferences through
              your browser settings.
            </p>
          </li>
          <li className="privacypolicy-page__item">
            <h2 className="privacypolicy-page__subtitle">
              Changes to This Privacy Policy
            </h2>
            <p className="privacypolicy-page__text">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or applicable laws. If we make material
              changes, we will notify you by posting the updated Privacy Policy
              on our website and indicating the date of the latest revision.
              Your continued use of the Service after such changes constitutes
              your acceptance of the new Privacy Policy.
            </p>
          </li>
          <li className="privacypolicy-page__item">
            <h2 className="privacypolicy-page__subtitle">Contact Us</h2>
            <p className="privacypolicy-page__text">
              If you have any questions or concerns about this Privacy Policy or
              our privacy practices, please contact us at{" "}
              <a
                className="privacypolicy-page__mail"
                href="mailto:LevelUpSupport@gmail.com"
              >
                LevelUpSupport@gmail.com
              </a>
            </p>
            <p className="privacypolicy-page__text">
              This policy covers the initial scope of your app. As you introduce
              new features, such as additional data collection, you may need to
              update this policy to ensure compliance with relevant privacy laws
              and to maintain transparency with your users.
            </p>
          </li>
        </ol>
      </main>
      <LandingFooter />
    </div>
  );
}

export default PrivacyPolicyPage;
