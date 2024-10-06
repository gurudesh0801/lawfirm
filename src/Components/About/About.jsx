import React from "react";
import "./About.css"; // Import the CSS styles
import img from "../../assets/images/aboutimg.png";

const About = () => {
  return (
    <section className="about-us">
      {/* Header Section */}
      <div className="about-hero">
        <div className="about-content">
          <h1 className="about-title">Welcome to Our Law Firm</h1>
          <p className="about-tagline">
            Dedicated to delivering justice with passion and expertise.
          </p>
        </div>
      </div>

      {/* About Us Intro Section */}
      <div className="about-intro">
        <div className="about-container">
          <div className="about-text-block">
            <h2 className="sub-heading">About Us</h2>
            <p className="about-description">
              With decades of experience, we are committed to providing
              exceptional legal services across multiple sectors. Our firm is
              driven by the values of integrity, expertise, and client-focused
              solutions. Let us be your trusted legal partners.
            </p>
          </div>
          <div className="about-image-block">
            <img src={img} alt="Our Team" className="about-image" />
          </div>
        </div>
      </div>

      {/* Our Experience Section */}
      <div className="about-experience">
        <div className="about-container">
          <div className="experience-text-block">
            <h2 className="sub-heading">Our Experience</h2>
            <p className="about-text">
              Over 30 years of combined experience handling cases in corporate
              law, civil litigation, criminal defense, and more. Our team
              consists of highly skilled attorneys who are leaders in their
              fields.
            </p>
          </div>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="about-vision">
        <div className="about-container">
          <div className="vision-text-block">
            <h2 className="sub-heading">Our Vision</h2>
            <p className="about-text">
              Our goal is to foster a more just society by offering high-quality
              legal representation. We aim to set new standards in legal
              practice, maintaining our commitment to ethics and integrity while
              developing long-term relationships with our clients.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="about-values">
        <div className="about-container">
          <div className="values-text-block">
            <h2 className="sub-heading">Our Values</h2>
            <p className="about-text">
              We believe in the principles of trust, collaboration, and
              dedication. Our firm takes the time to understand each client’s
              unique needs, ensuring that we tailor our legal strategies to
              achieve the best results.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="about-cta">
        <div className="about-container">
          <h2 className="cta-title">Ready to Work with Us?</h2>
          <p className="cta-text">
            Contact us today for a consultation and take the first step toward
            resolving your legal concerns.
          </p>
          <button className="cta-button">Get in Touch</button>
        </div>
      </div>
    </section>
  );
};

export default About;
