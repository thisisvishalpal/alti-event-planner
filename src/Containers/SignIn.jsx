import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Form, Container, Spinner } from "react-bootstrap";

import { signIn } from "Slices";
import { urls } from "Utils";

const { signUp } = urls;

export const SignIn = () => {
  const { loading, error: storeError } = useSelector(
    ({ userAuth }) => userAuth
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

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

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "90vh" }}
    >
      <div className="signin-form">
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
          <Link to={`/${signUp}`} replace style={{ textDecoration: "none" }}>
            Sign Up
          </Link>
        </p>
      </div>
    </Container>
  );
};
