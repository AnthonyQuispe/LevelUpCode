import "./CommunityGuidelinesPage.scss";

import Nav from "../../components/Nav/Nav";
import LandingFooter from "../../components/LandingFooter/LandingFooter";

function CommunityGuidelinesPage() {
  return (
    <div className="communityguidelines-page">
      <header className="communityguidelines-page__header">
        <Nav />
      </header>
      <main className="communityguidelines-page__main">
        <h1 className="communityguidelines-page__title">
          Community Guidelines
        </h1>
        <ol className="communityguidelines-page__list">
          <li className="communityguidelines-page__item">
            <h2 className="communityguidelines-page__subtitle">
              LevelUp Code is a global community of coding learners.
            </h2>
            <p className="communityguidelines-page__text">
              We believe that everyone should have access to free coding
              education. Our guidelines are meant to build a mutual
              understanding of what being a part of this community is all about.
              We will take action if any of these guidelines are not upheld, so
              please read carefully.
            </p>
          </li>
          <li className="communityguidelines-page__item">
            <h2 className="communityguidelines-page__subtitle">
              Always be Respectful
            </h2>
            <p className="communityguidelines-page__text">
              We come together from across the world at varying skill levels
              with the same goal in mind - to learn coding. Curiosity,
              questioning, and collaborative learning are things we celebrate.
              Be respectful of others and where they’re coming from.
            </p>
          </li>
          <li className="communityguidelines-page__item">
            <h2 className="communityguidelines-page__subtitle">
              Help and Support Across All Skill Levels
            </h2>
            <p className="communityguidelines-page__text">
              We are all in this together. Learning to code is challenging and
              takes a lot of courage and dedication. If someone makes a mistake
              or has a question you think has an obvious answer, kindly and
              calmly help them out. Heckling and being mean doesn’t help anyone
              learn. Can’t say it nicely? Don’t weigh in.
            </p>
          </li>
          <li className="communityguidelines-page__item">
            <h2 className="communityguidelines-page__subtitle">
              Embrace and Share Different Approaches
            </h2>
            <p className="communityguidelines-page__text">
              Coding has many languages, frameworks, and ways to solve problems.
              We think that’s one of the wonders of coding. Approach these
              conversations with an open mind and attitude.
            </p>
          </li>
          <li className="communityguidelines-page__item">
            <h2 className="communityguidelines-page__subtitle">
              Think Before You Share
            </h2>
            <p className="communityguidelines-page__text">
              We care about your safety. Coding is inherently collaborative, but
              please beware of swapping or posting any private information that
              could be misused. That includes your phone number, age, address,
              email, or other personal information that could put your privacy
              at risk. Simply put: don’t over-share. Sharing and encouraging
              others to share personal data might get your post, and possibly
              your account, removed.{" "}
            </p>
          </li>
          <li className="communityguidelines-page__item">
            <h2 className="communityguidelines-page__subtitle">
              Please Don’t Use LevelUp Code to…
            </h2>
            <ul className="privacypolicy-page__list--alt">
              <li className="privacypolicy-page__list-item">
                Attack a Person or Group of People with Words and Actions <br />
                LevelUp Code is a safe place for learners of all backgrounds.
                Harassment and hurtful content will not be tolerated. Using
                symbols, names, and text that promote hate—as well as harassing,
                stalking, impersonating, and making sexual remarks towards
                someone—are considered abuse. The same goes for disturbing
                profile pictures and usernames. As stated in the terms, LevelUp
                Code reserves the right to replace images or remove these
                accounts at its sole discretion. Rule of thumb: if you are
                making someone feel attacked or hurt, then you shouldn’t be
                doing it. We take these reports seriously and may delete your
                account without previous notice if such activity is verified by
                our team.
              </li>
              <li className="privacypolicy-page__list-item">
                Script or Cheat Maliciously <br />
                LevelUp Code believes in honest learning. If you are scripting
                for the purposes of cheating or sharing information and
                instructions about using LevelUp Code in a way that may impact
                the system, community, learning, data, or experience in a
                negative or significant manner, your account and posts may be
                removed.
              </li>
              <li className="privacypolicy-page__list-item">
                Write Inflammatory Comments <br />
                Hateful, obscene, and off-topic comments don’t contribute to
                learning. Cursing doesn’t either (let people discover those
                words in the wild). Leave them out of the coding
                discussions.Hateful, obscene, and off-topic comments don’t
                contribute to learning. Cursing doesn’t either (let people
                discover those words in the wild). Leave them out of the coding
                discussions.
              </li>
            </ul>
          </li>
          <li className="communityguidelines-page__item">
            <h2 className="communityguidelines-page__subtitle">To Summarize</h2>
            <p className="communityguidelines-page__text">
              We do not tolerate content that is:
            </p>
            <ul className="privacypolicy-page__list--alt">
              <li className="privacypolicy-page__list-item">Illegal</li>
              <li className="privacypolicy-page__list-item">Pornographic</li>
              <li className="privacypolicy-page__list-item">
                Excessively profane or violent
              </li>
              <li className="privacypolicy-page__list-item">Spam</li>
              <li className="privacypolicy-page__list-item">
                Threatening, harassing, or bullying
              </li>
              <li className="privacypolicy-page__list-item">
                Associated with racism or intolerance
              </li>
              <li className="privacypolicy-page__list-item">
                Impersonating someone in a misleading or deceptive manner
              </li>
              <li className="privacypolicy-page__list-item">
                Personal confidential information
              </li>
            </ul>
          </li>
        </ol>
      </main>
      <LandingFooter />
    </div>
  );
}

export default CommunityGuidelinesPage;
