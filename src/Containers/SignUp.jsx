import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form, Container, Spinner } from "react-bootstrap";
import axios from "axios";
import { fetchUserAuthSuccess } from "Slices";
import { urls } from "Utils";

const { signIn, root } = urls;

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("Please fill out all fields.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Example API call to register user
      const response = await axios.post("http://localhost:8000/auth/signup", {
        username,
        email,
        password,
      });

      if (response.status === 201) {
        setSuccess("Account created successfully! Redirecting to Sign In...");
        dispatch(fetchUserAuthSuccess(response.data)); // Save user data in Redux store
        setTimeout(() => navigate(signIn), 2000); // Redirect to Sign In after 2 seconds
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="signup-form">
        <h2 className="text-center mb-4">Sign Up</h2>
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

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          {success && <p className="text-success">{success}</p>}

          <Button variant="primary" type="submit" block disabled={loading}>
            {loading ? (
              <>
                <Spinner animation="border" size="sm" /> Creating Account...
              </>
            ) : (
              "Sign Up"
            )}
          </Button>
        </Form>

        <p className="mt-3 text-center">
          Already have an account?{" "}
          <a href={signIn} style={{ textDecoration: "none" }}>
            Sign In
          </a>
        </p>
      </div>
    </Container>
  );
};
