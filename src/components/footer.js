import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* College Info Section */}
        <div className="footer-section">
          <h3>About VESIT</h3>
          <p>
            Vivekanand Education Society's Institute of Technology (VESIT) is a leading institute providing quality education in engineering and technology. The institute has been a center of excellence, nurturing talent and fostering innovation.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/departments">Departments</a></li>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/research">Research</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Address: VESIT, Hashu Advani Memorial Complex, Chembur, Mumbai - 400071, Maharashtra, India</p>
          <p>Phone: +91-22-61532500</p>
          <p>Email: <a href="mailto:info@vesit.edu.in">info@vesit.edu.in</a></p>
        </div>

        {/* Social Media Section
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com/vesit" target="_blank" rel="noopener noreferrer">
              <img src="/images/facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com/vesit" target="_blank" rel="noopener noreferrer">
              <img src="/images/twitter-icon.png" alt="Twitter" />
            </a>
            <a href="https://instagram.com/vesit" target="_blank" rel="noopener noreferrer">
              <img src="/images/instagram-icon.png" alt="Instagram" />
            </a>
            <a href="https://linkedin.com/vesit" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedin-icon.png" alt="LinkedIn" />
            </a>
          </div>
        </div> */}
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} VESIT. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
