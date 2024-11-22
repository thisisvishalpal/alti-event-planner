import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { events } from "./../Mock/events.json"; // Adjust path if necessary

const SeatSelectionModal = ({ event, show, onClose }) => {
  const [seats, setSeats] = useState(1); // Default to 1 seat

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
      <Modal.Header closeButton>
        <Modal.Title>Select Seats</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
      <Modal.Footer>
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

const EventCard = ({ event, onSelect }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img
          src={event.payload.items[0].image}
          alt={event.payload.items[0].event_name}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{event.payload.items[0].event_name}</h5>
          <p className="card-text">
            {event.payload.items[0].event_description}
          </p>
          <button className="btn btn-primary" onClick={() => onSelect(event)}>
            Select Seats
          </button>
        </div>
      </div>
    </div>
  );
};

const EventList = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null); // Clear the selected event when the modal is closed
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onSelect={handleSelectEvent}
          />
        ))}
      </div>

      {/* Show the modal if an event is selected */}
      {selectedEvent && (
        <SeatSelectionModal
          event={selectedEvent}
          show={showModal}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default EventList;
