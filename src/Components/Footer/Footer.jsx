import React from "react";
import "./Footer.css"; // Import the styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Section 1: Law Firm Info */}
        <div className="footer-section">
          <h3 className="footer-heading">About Us</h3>
          <p className="footer-text">
            We are a leading law firm with a focus on corporate, civil, and
            criminal law. Our dedicated team of professionals provides
            exceptional legal services with integrity and a client-centered
            approach.
          </p>
        </div>

        {/* Footer Section 2: Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/faq">FAQs</a>
            </li>
          </ul>
        </div>

        {/* Footer Section 3: Contact Info */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-contact">
            <li>Phone: (123) 456-7890</li>
            <li>Email: info@lawfirm.com</li>
            <li>Address: 123 Justice Ave, Lawcity, USA</li>
          </ul>

          {/* Social Media Icons */}
          <div className="footer-socials">
            <a href="https://facebook.com" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Footer Section 4: Google Map */}
        <div className="footer-section footer-map">
          <h3 className="footer-heading">Our Location</h3>
          <div className="map-container">
            <iframe
              title="Law Firm Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.95592831592204!3d-37.81720957975156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577bbfd0c4fbb0!2sVictoria%20Law%20Courts!5e0!3m2!1sen!2sus!4v1621391582957!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Law Firm. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
