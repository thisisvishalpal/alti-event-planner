import React, { useState } from "react";
import { Button, Row, Col, Modal, Form } from "react-bootstrap";

import { useTheme } from "Theme";

export const SeatSelectionModal = ({ event, show, onClose }) => {
  const [seats, setSeats] = useState(1); // Default to 1 seat
  const { theme } = useTheme();

  const handleSeatChange = (e) => {
    setSeats(e.target.value);
  };

  const handleSubmit = () => {
    alert(
      `You have selected ${seats} seats for the event: ${event.payload.items[0].event_name}`
    );
    onClose(); // Close the modal after submitting
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header
        className={theme === "dark" ? "bg-dark text-light" : ""}
        closeButton
      >
        <Modal.Title>Select Seats</Modal.Title>
      </Modal.Header>
      <Modal.Body className={theme === "dark" ? "bg-dark text-light" : ""}>
        <h5>{event.payload.items[0].event_name}</h5>
        <p>{event.payload.items[0].event_description}</p>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Select Number of Seats</Form.Label>
              <Form.Control
                type="number"
                min="1"
                max="10" // You can adjust the max value based on the maximum available seats
                value={seats}
                onChange={handleSeatChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <div className="mt-3">
              <strong>Price: </strong>
              <span>{event.payload.items[0].sell_price}</span>
            </div>
            <div>
              <strong>Total: </strong>
              <span>{`$${(
                seats * parseFloat(event.payload.items[0].sell_price.slice(1))
              ).toFixed(2)}`}</span>
              {/* Calculate total based on the selected number of seats */}
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className={theme === "dark" ? "bg-dark text-light" : ""}>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Book Now
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
