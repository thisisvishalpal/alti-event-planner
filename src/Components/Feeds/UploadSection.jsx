import React, { useState } from "react";
import { Button, Modal, Form, Card } from "react-bootstrap";
import { axiosInstance } from "Services";

export const UploadSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("photos");
  const [inputData, setInputData] = useState("");
  const [message, setMessage] = useState("");

  const [image, setImage] = useState(null);

  const handleClose = () => {
    setShowModal(false);
    setInputData("");
    setMessage("");
  };
  const handleShow = (tab) => {
    setActiveTab(tab);
    setShowModal(true);
  };
  const handleImageChange = (e) => {
    e.preventDefault();
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("content", inputData);
    formData.append("image", image);

    try {
      const response = await axiosInstance.post("/user/upload-post", formData);

      if (response.status === 200) {
        setMessage("Post uploaded successfully!");
        handleClose();
      } else {
        setMessage(response.data.message || "Error uploading post.");
        handleClose();
      }
    } catch (error) {
      handleClose();
      if (error.response) {
        setMessage(error.response.data.message || "Error uploading post.");
      } else if (error.request) {
        setMessage("No response from the server. Please try again.");
      } else {
        setMessage("Error uploading post. Please try again.");
      }
    }
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
      {message && <p>{message}</p>}

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
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="photoDescription" className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    name="description"
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
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
