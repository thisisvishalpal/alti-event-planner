import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

export const EventCard = ({ event, onSelect }) => {
  const { event_name, event_description, sell_price } = event.payload.items[0];

  const { image, event_date, event_time } = event.payload;

  return (
    <Col md={4} className="mb-4">
      <Card className="event-card shadow-sm border-0">
        <Card.Img
          variant="top"
          src={image}
          alt={event_name}
          className="event-image"
        />
        <Card.Body className="px-3 py-4">
          <Card.Title className="fw-bold text-dark">{event_name}</Card.Title>
          <Card.Text className="text-muted">{event_description}</Card.Text>

          {/* Event details in a row */}
          <Row>
            <Col xs={6} className="text-muted">
              <strong>Date:</strong> {event_date}
            </Col>
            <Col xs={6} className="text-muted text-end">
              <strong>Time:</strong> {event_time}
            </Col>
          </Row>
          <Row>
            <Col xs={6} className="text-muted">
              <strong>Location:</strong> {event.city.toUpperCase()}
            </Col>
            <Col xs={6} className="text-muted text-end">
              <strong>Price:</strong> {sell_price}
            </Col>
          </Row>

          <div className="text-center mt-3">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onSelect(event)}
              className="w-100"
            >
              Select Seats
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
