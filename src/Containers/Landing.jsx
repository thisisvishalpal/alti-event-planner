import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavigateButton = ({ to, children, rest }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Button onClick={handleClick} {...rest}>
      {children}
    </Button>
  );
};

const HeroSection = () => {
  return (
    <section style={{ padding: "100px 0" }}>
      <Container>
        <Row className="text-center">
          <Col md={6}>
            <h1 className="display-4">Book Your Event with Ease</h1>
            <p className="lead">
              Find, book, and manage events all in one place.
            </p>

            <NavigateButton variant="primary" size="lg" to={"/events"}>
              Browse Events
            </NavigateButton>
          </Col>
          <Col md={6}>
            <img
              style={{ borderRadius: "8px" }}
              src="https://images.pexels.com/photos/167591/pexels-photo-167591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Event Booking"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export const EventCards = ({ events }) => {
  return (
    <section id="events" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Upcoming Events</h2>
        <Row>
          {events.map((event) => (
            <Col md={4} key={event.id} className="mb-4">
              <Card className="shadow-sm">
                <Card.Img variant="top" src={event.image} />
                <Card.Body>
                  <Card.Title>{event.event_name}</Card.Title>
                  <Card.Text>{event.event_description}</Card.Text>
                  <Button variant="primary" href={`/event/${event.id}`}>
                    Book Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const eventsData = [
  {
    id: 1,
    event_name: "Musical Night 1",
    event_description: "Join us for an unforgettable musical experience.",
    image:
      "https://img.freepik.com/premium-photo/cricket-match-is-taking-place-large-stadium-sun-is-setting-sky-is-bright-orange_36682-25435.jpg",
  },
  {
    id: 2,
    event_name: "Tech Conference 2024",
    event_description:
      "Learn from industry leaders and network with tech enthusiasts.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAEPtjtXAyIl481hMpGNvu9eC8dIhC1jQB0g&s",
  },
  {
    id: 3,
    event_name: "Food Festival",
    event_description: "Explore flavors from around the world in one place.",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/073eac2ed6a0787cb36a28324906598ea692fef7f3d1e9989413f5cbac817261._SX1080_FMjpg_.jpg",
  },
];

export const Landing = () => {
  return (
    <>
      <HeroSection />
      <EventCards events={eventsData} />
    </>
  );
};
