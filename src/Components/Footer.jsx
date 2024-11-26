import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Event planner</h3>
          <p>Your one-stop platform to explore events in various fields.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Event Planner. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
