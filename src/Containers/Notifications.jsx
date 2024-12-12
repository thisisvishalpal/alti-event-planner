import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, Badge, Spinner, Alert } from "react-bootstrap";

import "./Notifications.css"; // Add styles if needed
import { fetchUserNotifications } from "Slices";

export const Notifications = () => {
  const notificationsStore = useSelector(
    ({ userNotifications }) => userNotifications
  );
  const dispatch = useDispatch();
  const { data, error, loading } = notificationsStore;

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
          Failed to load notifications. Please try again later.
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
            <ListGroup.Item
              key={notification.id}
              className={`notification-item ${
                notification.isRead ? "read" : "unread"
              }`}
            >
              <div className="notification-content">
                <span className="notification-type">
                  <Badge bg={notification.isRead ? "secondary" : "primary"}>
                    {notification.type}
                  </Badge>
                </span>
                <span className="notification-text">
                  {notification.content}
                </span>
              </div>
              <div className="notification-timestamp">
                {new Date(notification.timestamp).toLocaleString()}
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

// onClick={() => markAsRead(notification.id)}
// const markAsRead = (id) => {
//   setNotifications((prev) =>
//     prev?.map((notif) =>
//       notif.id === id ? { ...notif, isRead: true } : notif
//     )
//   );
// };
