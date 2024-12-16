import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Row, Col, Image, Alert } from "react-bootstrap";
import { ActionButton, SpinnerTwo } from "Components";
import { urls } from "Utils";

export const UserInfo = ({ user = {}, loading, error }) => {
  // Handle undefined or missing user details gracefully
  const {
    profilePicture = "https://via.placeholder.com/150", // Placeholder image for missing profile picture
    username = "Unknown",
    fullName = "No Name Provided",
    bio = "No bio available",
    city = "Unknown City",
    state = "Unknown State",
    phoneNumber = "N/A",
    followers = 0,
    following = 0,
    posts = [],
    private: pri = false,
    gotra = "N/A",
    age = "N/A",
    gender = "N/A",
  } = user || {};

  if (loading) {
    return (
      <Card className="shadow-sm p-3 m-2 mt-3" style={{ minHeight: "25vh" }}>
        <SpinnerTwo />
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="shadow-sm p-3 m-2 mt-3" style={{ minHeight: "25vh" }}>
        <Alert variant="danger">{error}</Alert>
      </Card>
    );
  }

  return (
    <Card className="shadow-sm p-3 m-2 mt-3" style={{ minHeight: "25vh" }}>
      <Row>
        {/* Profile Picture */}
        <Col md={4} className="text-center">
          <Image
            src={profilePicture}
            roundedCircle
            alt={`${fullName}'s profile`}
            className="img-fluid"
            style={{ width: "150px", height: "150px" }}
          />
        </Col>

        {/* User Details */}
        <Col md={8}>
          <Card.Body>
            {/* Name and Bio */}
            <h3>{fullName}</h3>
            <p className="text-muted">{bio}</p>

            {/* User Stats */}
            <Row className="text-center my-3">
              <Col>
                <h5>{posts?.length}</h5>
                <p className="text-muted">Posts</p>
              </Col>
              <Col>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  to={urls.connections}
                  state={"followers"}
                >
                  <h5>{followers}</h5>
                  <p className="text-muted">Followers</p>
                </Link>
              </Col>
              <Col>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  to={urls.connections}
                  state={"following"}
                >
                  <h5>{following}</h5>
                  <p className="text-muted">Following</p>
                </Link>
              </Col>
            </Row>

            <ActionButton />
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};
