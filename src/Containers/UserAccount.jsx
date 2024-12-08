import { UserPosts } from "Components/UserPosts";
import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Image,
  Button,
  Form,
  Collapse,
  Spinner,
} from "react-bootstrap";
import { useSelector } from "react-redux";

const Account = ({ user, loading }) => {
  const {
    profilePicture,
    userName,
    firstName,
    lastName,
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
  const [showSettings, setShowSetting] = useState(false);

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
              alt={`${firstName}'s profile`}
              className="img-fluid"
              style={{ width: "150px", height: "150px" }}
            />
          </Col>

          {/* User Details */}
          <Col md={9}>
            <Card.Body>
              {/* Name and Bio */}
              <h3>{`${firstName} ${lastName}`}</h3>
              <p className="text-muted">{bio}</p>

              {/* User Stats */}
              <Row className="text-center my-3">
                <Col>
                  <h5>{posts?.length}</h5>
                  <p className="text-muted">Posts</p>
                </Col>
                <Col>
                  <h5>{followers}</h5>
                  <p className="text-muted">Followers</p>
                </Col>
                <Col>
                  <h5>{following}</h5>
                  <p className="text-muted">Following</p>
                </Col>
              </Row>

              {/* Action Buttons */}
              <div className="text-end">
                <Button variant="primary" className="me-2">
                  Edit Profile
                </Button>
                <Button
                  variant="outline-secondary"
                  onClick={() => setShowSetting((prev) => !prev)}
                >
                  Settings
                </Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      )}

      <Collapse in={showSettings}>
        <div className="mt-4">
          <Card className="p-3">
            <h5 className="mb-3">User Settings</h5>

            {/* Update Password */}
            <Form>
              <h6>Update Password</h6>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="currentPassword">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter current password"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="newPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter new password"
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Notification Preferences */}
              <h6>Notification Preferences</h6>
              <Form.Group className="mb-3" controlId="emailNotifications">
                <Form.Check
                  type="switch"
                  label="Receive email notifications"
                  defaultChecked
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="smsNotifications">
                <Form.Check type="switch" label="Receive SMS notifications" />
              </Form.Group>

              {/* Privacy Settings */}
              <h6>Privacy Settings</h6>
              <Form.Group className="mb-3" controlId="privacySettings">
                <Form.Check type="checkbox" label="Make my profile private" />
              </Form.Group>

              {/* Save Settings Button */}
              <div className="text-end">
                <Button variant="success">Save Changes</Button>
              </div>
            </Form>
          </Card>
        </div>
      </Collapse>
    </Card>
  );
};

export const UserAccount = () => {
  const { data, error, loading } = useSelector(({ userInfo }) => userInfo);

  return (
    <div className="container mt-5">
      <Account user={data} loading={loading} />
      <UserPosts posts={data?.posts} loading={loading} />
    </div>
  );
};
