import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Button, Form, Container, Spinner, Card, Alert } from "react-bootstrap";

import { signIn } from "Slices";
import { urls } from "Utils";
import { useTranslation } from "react-i18next";

export const SignIn = () => {
  const { t } = useTranslation();
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
        <h2 className="text-center mb-4">{t("signin.heading")}</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername" className="mb-3">
            <Form.Label>{t("signin.username")}</Form.Label>
            <Form.Control
              type="text"
              placeholder={t("signin.enterUsername")}
              value={username}
              onChange={(e) => setUsername(e.target.value.toLowerCase().trim())}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>{t("signin.password")}</Form.Label>
            <Form.Control
              type="password"
              placeholder={t("signin.enterPassword")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {error && <p className="text-danger">{error}</p>}
          {storeError && <p className="text-danger">{storeError}</p>}

          <Button variant="primary" type="submit" block disabled={loading}>
            {t("signin.button")}
          </Button>
        </Form>

        <p className="mt-3 text-center">
          {t("signin.dontHaveAccount")}{" "}
          <Link to={urls.signUp} replace style={{ textDecoration: "none" }}>
            {t("signup.heading")}
          </Link>
        </p>
      </Card>
    </Container>
  );
};
