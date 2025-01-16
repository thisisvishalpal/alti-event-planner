import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px", minHeight: "100%" }}>
      <div>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="home-link">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};
