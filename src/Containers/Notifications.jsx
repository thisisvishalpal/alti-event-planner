import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ListGroup, Spinner, Alert } from "react-bootstrap";

import "./Notifications.css"; // Add styles if needed
import { fetchUserNotifications } from "Slices";
import { NotificationRow } from "Components";

export const Notifications = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector(
    ({ userNotifications }) => userNotifications
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    dispatch(fetchUserNotifications());
  }, [dispatch]);

  return (
    <div className="notifications-page">
      <h5>Your Notifications</h5>

      {loading && (
        <div className="loading-container">
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p>Loading notifications...</p>
        </div>
      )}

      {error && (
        <Alert variant="danger" className="error-message">
          {error}
        </Alert>
      )}

      {!loading && !error && data?.length === 0 && (
        <Alert variant="info" className="empty-notifications">
          You have no new notifications.
        </Alert>
      )}

      {!loading && !error && data?.length > 0 && (
        <ListGroup>
          {data.map((notification) => (
            <NotificationRow
              key={notification._id}
              notification={notification}
            />
          ))}
        </ListGroup>
      )}
    </div>
  );
};
