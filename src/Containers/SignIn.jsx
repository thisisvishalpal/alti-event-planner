import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Button, Form, Container, Spinner, Card, Alert } from "react-bootstrap";

import { signIn } from "Slices";
import { urls } from "Utils";

export const SignIn = () => {
  const { loading, error: storeError } = useSelector(
    ({ userAuth }) => userAuth
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();
  const { message } = location.state || "";

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please fill out both fields.");
      return;
    }

    setError("");

    dispatch(signIn({ username, password }));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <Container
      style={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          maxWidth: "500px",
          width: "100%",
          padding: "20px",
          margin: "5px",
        }}
      >
        {message && (
          <Alert key="danger" variant="success">
            {message}
          </Alert>
        )}
        <h2 className="text-center mb-4">Sign In</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername" className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {error && <p className="text-danger">{error}</p>}
          {storeError && <p className="text-danger">{storeError}</p>}

          <Button variant="primary" type="submit" block disabled={loading}>
            {loading ? (
              <>
                <Spinner animation="border" size="sm" /> Logging In...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </Form>

        <p className="mt-3 text-center">
          Don't have an account?{" "}
          <Link to={urls.signUp} replace style={{ textDecoration: "none" }}>
            Sign Up
          </Link>
        </p>
      </Card>
    </Container>
  );
};
