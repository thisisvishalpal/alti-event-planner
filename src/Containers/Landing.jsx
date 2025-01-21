import React, { useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./Landing.css"; // Optional: Add your custom styles here.
import { useNavigate } from "react-router-dom";
import { urls } from "Utils";

export const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <Container>
          <h1 className="display-4 fw-bold">Welcome to SocialConnect</h1>
          <p className="lead">
            Connect, share, and stay updated with friends and the world around
            you.
          </p>
          <div className="mt-4">
            <Button
              onClick={() => navigate(urls?.signUp)}
              variant="primary"
              size="lg"
              className="me-3"
            >
              Join Now
            </Button>
            <Button
              onClick={() => navigate(urls?.signIn)}
              variant="outline-light"
              size="lg"
            >
              Sign In
            </Button>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <Container>
          <h2 className="text-center mb-5">Why Choose SocialConnect?</h2>
          <Row>
            <Col md={4} className="text-center mb-4">
              <i className="bi bi-people display-4 text-primary"></i>
              <h4 className="mt-3">Connect with Friends</h4>
              <p>
                Reunite with old friends and make new connections from all over
                the world.
              </p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <i className="bi bi-chat-dots display-4 text-success"></i>
              <h4 className="mt-3">Engage in Conversations</h4>
              <p>
                Share your thoughts and spark meaningful discussions with your
                community.
              </p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <i className="bi bi-shield-check display-4 text-warning"></i>
              <h4 className="mt-3">Privacy & Security</h4>
              <p>
                Your data is safe with us. Enjoy secure and private connections
                with peace of mind.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="cta-section text-center py-5 ">
        <Container>
          <h2 className="fw-bold">Start Your Journey Today</h2>
          <p className="lead">
            Don’t miss out on connecting with the world. It’s simple and free!
          </p>
          <Button
            onClick={() => navigate(urls.signUp)}
            variant="light"
            size="lg"
          >
            Get Started
          </Button>
        </Container>
      </section>
    </div>
  );
};
