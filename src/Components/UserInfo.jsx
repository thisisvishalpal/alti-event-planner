import { Link, useNavigate } from "react-router-dom";

import { Card, Row, Col, Image, Button, Spinner } from "react-bootstrap";
import { urls } from "Utils";

export const UserInfo = ({ user, loading }) => {
  const {
    profilePicture,
    userName,
    fullName,
    city,
    state,
    phoneNumber,
    bio,
    followers,
    following,
    posts,
    private: pri,
    gotra,
    age,
    gender,
  } = user;
  const navigate = useNavigate();

  return (
    <Card className="shadow-sm p-3 mb-4">
      {loading ? (
        <Spinner />
      ) : (
        <Row>
          {/* Profile Picture */}
          <Col md={3} className="text-center">
            <Image
              src={profilePicture}
              roundedCircle
              alt={`${fullName}'s profile`}
              className="img-fluid"
              style={{ width: "150px", height: "150px" }}
            />
          </Col>

          {/* User Details */}
          <Col md={9}>
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

              {/* Action Buttons */}
              <div className="text-end">
                <Button
                  variant="primary"
                  onClick={() => navigate("/settings")}
                  className="me-2"
                >
                  Edit Profile
                </Button>
                <Button
                  variant="outline-secondary"
                  onClick={() => navigate("/settings")}
                >
                  Settings
                </Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      )}
    </Card>
  );
};
