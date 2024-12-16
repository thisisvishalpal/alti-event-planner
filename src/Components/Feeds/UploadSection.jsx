import React, { useState } from "react";
import { Button, Modal, Form, Card } from "react-bootstrap";

export const UploadSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("photos");
  const [inputData, setInputData] = useState("");

  const handleClose = () => {
    setShowModal(false);
    setInputData("");
  };
  const handleShow = (tab) => {
    setActiveTab(tab);
    setShowModal(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(`${activeTab} submitted:`, inputData);
    handleClose();
  };

  return (
    <div className="upload-section">
      <Card className="p-3 mb-4 shadow-sm">
        <Form.Control />
        <div className="d-flex justify-content-between mt-3">
          <Button variant="primary" onClick={() => handleShow("photos")}>
            📸 Upload Photos
          </Button>
          <Button variant="success" onClick={() => handleShow("status")}>
            ✍️ Post Status
          </Button>
          <Button variant="info" onClick={() => handleShow("events")}>
            📅 Add Event
          </Button>
          <Button variant="warning" onClick={() => handleShow("story")}>
            📖 Create Story
          </Button>
        </div>
      </Card>

      {/* Modal for Uploads */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {activeTab === "photos" && "Upload Photos"}
            {activeTab === "status" && "Post a Status"}
            {activeTab === "events" && "Add a New Event"}
            {activeTab === "story" && "Create a Story"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {activeTab === "photos" && (
              <>
                <Form.Group controlId="photoUpload" className="mb-3">
                  <Form.Label>Upload Photo</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group controlId="photoDescription" className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Write a caption..."
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                  />
                </Form.Group>
              </>
            )}
            {activeTab === "status" && (
              <Form.Group controlId="statusPost" className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="What's on your mind?"
                  value={inputData}
                  onChange={(e) => setInputData(e.target.value)}
                />
              </Form.Group>
            )}
            {activeTab === "events" && (
              <>
                <Form.Group controlId="eventName" className="mb-3">
                  <Form.Label>Event Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter event name"
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="eventDate" className="mb-3">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </>
            )}
            {activeTab === "story" && (
              <Form.Group controlId="storyContent" className="mb-3">
                <Form.Label>Story</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Write your story..."
                  value={inputData}
                  onChange={(e) => setInputData(e.target.value)}
                />
              </Form.Group>
            )}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
