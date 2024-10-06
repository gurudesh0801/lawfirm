import React from "react";
import logo from "../../assets/images/lawlogo.png";
import "./HomePage.css";
import Information from "../Information/Information";

const HomePage = () => {
  return (
    <main className="homepage">
      <header className="homepage__logo">
        {/* <img src={logo} alt="Law Firm Logo" className="homepage__logo-img" /> */}
      </header>

      <section className="homepage__hero">
        <h1 className="homepage__title">
          "Your Partner for Legal Compliance & Litigation"
        </h1>
        <p className="homepage__description">
          Partner with us to access expert services tailored to optimize
          <br />
          your operations, mitigate risks, and achieve your business goals
          effectively.
        </p>
        <div className="homepage__cta">
          <button
            className="homepage__cta-btn"
            aria-label="Read more about our services"
          >
            Read More
          </button>
        </div>
      </section>
      <Information />
    </main>
  );
};

export default HomePage;
