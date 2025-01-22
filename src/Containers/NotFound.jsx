import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="access-not-found">
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <p>Oops! The page you are looking for doesn't exist or has been moved.</p>
      <Button onClick={() => navigate("/")}>Get back to home</Button>
    </div>
  );
};
