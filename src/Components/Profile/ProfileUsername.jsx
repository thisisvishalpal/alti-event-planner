import { useProfile } from "Hooks";
import { Row, Col, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { urls } from "Utils";

export const ProfileUsername = ({
  profilePicture,
  fullName,
  posts,
  followers,
  following,
  bio,
}) => {
  const { isAccessingSelfProfile } = useProfile();

  return (
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
                className="text-decoration-none text-black"
                to={isAccessingSelfProfile && urls.connections}
                state={"followers"}
              >
                <h5>{followers ? followers.length : 0}</h5>
                <p className="text-muted">Followers</p>
              </Link>
            </Col>
            <Col>
              <Link
                className="text-decoration-none text-black"
                to={isAccessingSelfProfile && urls.connections}
                state={"following"}
              >
                <h5>{following ? following.length : 0}</h5>
                <p className="text-muted">Following</p>
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Col>
    </Row>
  );
};
