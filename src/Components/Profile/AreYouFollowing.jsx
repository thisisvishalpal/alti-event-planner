import React from "react";
import { Container, Card } from "react-bootstrap";

export const AreYouFollowing = ({ areYouFollowingThem }) => {
  if (areYouFollowingThem) return null;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "20vh" }}
    >
      <Card className="text-center p-4" style={{ maxWidth: "400px" }}>
        <h5>You need to follow this user</h5>
        <p>Follow them to see their posts and information.</p>
      </Card>
    </Container>
  );
};
