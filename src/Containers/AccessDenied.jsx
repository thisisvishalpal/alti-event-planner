import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const AccessDenied = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Access Denied</h1>
      <p>You need to be logged in to access this page.</p>
      <p className="mt-3 text-center">Don't have an account? </p>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Get back to home
      </Button>
    </div>
  );
};
