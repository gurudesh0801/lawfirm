import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  // Prevent collapsing when clicking inside the form
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Contact Form Section */}
        <div
          className={`collapsible-section ${
            activeSection === 1 ? "active" : ""
          }`}
          onClick={() => toggleSection(1)}
        >
          <h2>
            Contact Form <i className={`fas fa-chevron-down`}></i>
          </h2>
          <div
            className={`collapsible-content ${
              activeSection === 1 ? "open" : ""
            }`}
          >
            <form className="collapsible-form" onClick={stopPropagation}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info Section */}
        <div
          className={`collapsible-section ${
            activeSection === 2 ? "active" : ""
          }`}
          onClick={() => toggleSection(2)}
        >
          <h2>
            Contact Information <i className="fas fa-chevron-down"></i>
          </h2>
          <div
            className={`collapsible-content ${
              activeSection === 2 ? "open" : ""
            }`}
          >
            <p>
              <strong>Phone:</strong> +123 456 7890
              <br />
              <strong>Email:</strong> contact@lawfirm.com
              <br />
              <strong>Address:</strong> 123 Law Street, Justice City, LA 90210
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div
          className={`collapsible-section ${
            activeSection === 3 ? "active" : ""
          }`}
          onClick={() => toggleSection(3)}
        >
          <h2>
            Find Us on Map <i className="fas fa-chevron-down"></i>
          </h2>
          <div
            className={`collapsible-content ${
              activeSection === 3 ? "open" : ""
            }`}
          >
            <div className="map-container">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835255126625!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c20a58d35%3A0x62f9798df912e489!2sLaw%20Firm!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                allowFullScreen=""
                aria-hidden="false"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
