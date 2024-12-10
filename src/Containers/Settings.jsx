import { Form, Col, Row, Card, Button } from "react-bootstrap";
export const Settings = () => {
  return (
    <>
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
    </>
  );
};
