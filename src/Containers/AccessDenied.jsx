import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const AccessDenied = () => {
  const navigate = useNavigate();
  return (
    <div className="access-not-found">
      <h1>Access Denied</h1>
      <h3>You need to be logged in to access this page.</h3>
      <p className="mt-3 text-center">Don't have an account? </p>
      <Button onClick={() => navigate("/")}>Get back to home</Button>
    </div>
  );
};
