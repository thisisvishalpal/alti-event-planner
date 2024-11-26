import React, { useState } from "react";
import { Card, Button, Row, Col, Modal, Form } from "react-bootstrap";
import { useTheme } from "Theme";
// import { events } from "./../Mock/events.json"; // Adjust path if necessary

const events = [
  {
    id: 1,
    type: "CREATED",
    owner_id: "123663",
    city: "pune",
    payload: {
      event_date: "30-07-2022",
      event_time: "15:00",
      image:
        "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      items: [
        {
          event_id: "4378843",
          event_name: "Musical night1",
          event_title: "IGNITE YOUR ENTREPRENEURIAL SPIRIT",
          event_description:
            "Small Business Expo is America's Largest Business to Business Trade Show, Conference & Networking Event for Small Business Owners, Entrepreneurs & Start-Ups.",
          location: {
            loc_address: {
              name: "name of address",
              address_1: "Address 1",
              address_2: "Address2",
              city_name: "city name",
              state_id: 62,
              state_short_name: "abc xyz",
              postal_code: "410410",
              phone_number: "878997798987",
              country_name: "India",
              country_code: 91,
              is_commercial: true,
              company_name: "abc",
            },
            loc_geometry: {
              type: "Point",
              coordinates: [-72.7738706, 41.6332836],
            },
          },
          sell_price: "$100",
          orig_price: "150",
        },
      ],
    },
    published_at: "30-07-2022",
  },
  {
    id: 2,
    type: "CREATED",
    owner_id: "123663",
    city: "mumbai",
    payload: {
      event_date: "30-07-2022",
      event_time: "15:00",
      image:
        "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      items: [
        {
          event_id: "4378843",
          event_name: "Musical night1",
          event_title: "IGNITE YOUR ENTREPRENEURIAL SPIRIT",
          event_description:
            "Small Business Expo is America's Largest Business to Business Trade Show, Conference & Networking Event for Small Business Owners, Entrepreneurs & Start-Ups.",
          location: {
            loc_address: {
              name: "abc xyz",
              address_1: "abc xyz",
              address_2: "abc xyz",
              city_name: "abc xyz",
              state_id: 62,
              state_short_name: "abc xyz",
              postal_code: "abc xyz",
              phone_number: "878997798987",
              country_name: "India",
              country_code: 91,
              is_commercial: true,
              company_name: "abc",
            },
            loc_geometry: {
              type: "Point",
              coordinates: [-72.7738706, 41.6332836],
            },
          },
          sell_price: "$100",
          orig_price: "150",
        },
      ],
    },
    published_at: "30-07-2022",
  },
  {
    id: 3,
    type: "CREATED",
    owner_id: "123663",
    city: "pune",
    payload: {
      event_date: "30-07-2022",
      event_time: "15:00",
      image:
        "https://images.pexels.com/photos/1677710/pexels-photo-1677710.jpeg?auto=compress&cs=tinysrgb&w=800",
      items: [
        {
          event_id: "4378843",
          event_name: "Musical night3",
          event_title: "IGNITE YOUR ENTREPRENEURIAL SPIRIT",
          event_description:
            "Small Business Expo is America's Largest Business to Business Trade Show, Conference & Networking Event for Small Business Owners, Entrepreneurs & Start-Ups.",
          location: {
            loc_address: {
              name: "abc xyz",
              address_1: "abc xyz",
              address_2: "abc xyz",
              city_name: "abc xyz",
              state_id: 62,
              state_short_name: "abc xyz",
              postal_code: "abc xyz",
              phone_number: "878997798987",
              country_name: "India",
              country_code: 91,
              is_commercial: true,
              company_name: "abc",
            },
            loc_geometry: {
              type: "Point",
              coordinates: [-72.7738706, 41.6332836],
            },
          },
          sell_price: "$100",
          orig_price: "150",
        },
      ],
    },
    published_at: "30-07-2022",
  },
  {
    id: 4,
    type: "CREATED",
    owner_id: "123663",
    city: "panjim",
    payload: {
      event_date: "30-07-2022",
      event_time: "15:00",
      image:
        "https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=800",
      items: [
        {
          event_id: "4378843",
          event_name: "Musical night4",
          event_title: "IGNITE YOUR ENTREPRENEURIAL SPIRIT",
          event_description:
            "Small Business Expo is America's Largest Business to Business Trade Show, Conference & Networking Event for Small Business Owners, Entrepreneurs & Start-Ups.",
          location: {
            loc_address: {
              name: "abc xyz",
              address_1: "abc xyz",
              address_2: "abc xyz",
              city_name: "abc xyz",
              state_id: 62,
              state_short_name: "abc xyz",
              postal_code: "abc xyz",
              phone_number: "878997798987",
              country_name: "India",
              country_code: 91,
              is_commercial: true,
              company_name: "abc",
            },
            loc_geometry: {
              type: "Point",
              coordinates: [-72.7738706, 41.6332836],
            },
          },
          sell_price: "$100",
          orig_price: "150",
        },
      ],
    },
    published_at: "30-07-2022",
  },
  {
    id: 5,
    type: "CREATED",
    owner_id: "123663",
    city: "pune",
    payload: {
      event_date: "30-07-2022",
      event_time: "15:00",
      image:
        "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      items: [
        {
          event_id: "4378843",
          event_name: "Musical night5",
          event_title: "IGNITE YOUR ENTREPRENEURIAL SPIRIT",
          event_description:
            "Small Business Expo is America's Largest Business to Business Trade Show, Conference & Networking Event for Small Business Owners, Entrepreneurs & Start-Ups.",
          location: {
            loc_address: {
              name: "abc xyz",
              address_1: "abc xyz",
              address_2: "abc xyz",
              city_name: "abc xyz",
              state_id: 62,
              state_short_name: "abc xyz",
              postal_code: "abc xyz",
              phone_number: "878997798987",
              country_name: "India",
              country_code: 91,
              is_commercial: true,
              company_name: "abc",
            },
            loc_geometry: {
              type: "Point",
              coordinates: [-72.7738706, 41.6332836],
            },
          },
          sell_price: "$100",
          orig_price: "150",
        },
      ],
    },
    published_at: "30-07-2022",
  },
  {
    id: 6,
    type: "CREATED",
    owner_id: "123663",
    city: "pune",
    payload: {
      event_date: "30-07-2022",
      event_time: "15:00",
      image:
        "https://images.pexels.com/photos/2263410/pexels-photo-2263410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      items: [
        {
          event_id: "4378843",
          event_name: "Musical night6",
          event_title: "IGNITE YOUR ENTREPRENEURIAL SPIRIT",
          event_description:
            "Small Business Expo is America's Largest Business to Business Trade Show, Conference & Networking Event for Small Business Owners, Entrepreneurs & Start-Ups.",
          location: {
            loc_address: {
              name: "abc xyz",
              address_1: "abc xyz",
              address_2: "abc xyz",
              city_name: "abc xyz",
              state_id: 62,
              state_short_name: "abc xyz",
              postal_code: "abc xyz",
              phone_number: "878997798987",
              country_name: "India",
              country_code: 91,
              is_commercial: true,
              company_name: "abc",
            },
            loc_geometry: {
              type: "Point",
              coordinates: [-72.7738706, 41.6332836],
            },
          },
          sell_price: "$100",
          orig_price: "150",
        },
      ],
    },
    published_at: "30-07-2022",
  },
  {
    id: 7,
    type: "CREATED",
    owner_id: "123663",
    city: "pune",
    payload: {
      event_date: "30-07-2022",
      event_time: "15:00",
      image:
        "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      items: [
        {
          event_id: "4378843",
          event_name: "Musical night7",
          event_title: "IGNITE YOUR ENTREPRENEURIAL SPIRIT",
          event_description:
            "Small Business Expo is America's Largest Business to Business Trade Show, Conference & Networking Event for Small Business Owners, Entrepreneurs & Start-Ups.",
          location: {
            loc_address: {
              name: "abc xyz",
              address_1: "abc xyz",
              address_2: "abc xyz",
              city_name: "abc xyz",
              state_id: 62,
              state_short_name: "abc xyz",
              postal_code: "abc xyz",
              phone_number: "878997798987",
              country_name: "India",
              country_code: 91,
              is_commercial: true,
              company_name: "abc",
            },
            loc_geometry: {
              type: "Point",
              coordinates: [-72.7738706, 41.6332836],
            },
          },
          sell_price: "$100",
          orig_price: "150",
        },
      ],
    },
    published_at: "30-07-2022",
  },
  {
    id: 8,
    type: "CREATED",
    owner_id: "123663",
    city: "pune",
    payload: {
      event_date: "30-07-2022",
      event_time: "15:00",
      image:
        "https://images.pexels.com/photos/167591/pexels-photo-167591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      items: [
        {
          event_id: "4378843",
          event_name: "Musical night8",
          event_title: "IGNITE YOUR ENTREPRENEURIAL SPIRIT",
          event_description:
            "Small Business Expo is America's Largest Business to Business Trade Show, Conference & Networking Event for Small Business Owners, Entrepreneurs & Start-Ups.",
          location: {
            loc_address: {
              name: "abc xyz",
              address_1: "abc xyz",
              address_2: "abc xyz",
              city_name: "abc xyz",
              state_id: 62,
              state_short_name: "abc xyz",
              postal_code: "abc xyz",
              phone_number: "878997798987",
              country_name: "India",
              country_code: 91,
              is_commercial: true,
              company_name: "abc",
            },
            loc_geometry: {
              type: "Point",
              coordinates: [-72.7738706, 41.6332836],
            },
          },
          sell_price: "$100",
          orig_price: "150",
        },
      ],
    },
    published_at: "30-07-2022",
  },
];

const SeatSelectionModal = ({ event, show, onClose }) => {
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

const EventCard = ({ event, onSelect }) => {
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

export const Events = () => {
  return <EventList />;
};
