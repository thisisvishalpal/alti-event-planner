import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { EventCard, SeatSelectionModal } from "Components";
import { fetchEvents } from "Services";

export const EventList = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const { events, error, loading } = useSelector((state) => state.allEvents);

  useEffect(() => {
    dispatch(fetchEvents()); // Fetch data on mount
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
        {events.length ? (
          events?.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onSelect={handleSelectEvent}
            />
          ))
        ) : (
          <h3 style={{ textAlign: "center" }}>Please try after sometime</h3>
        )}
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
