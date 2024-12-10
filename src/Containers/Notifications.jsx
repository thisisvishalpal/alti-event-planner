import React, { useState, useEffect } from "react";
import { ListGroup, Badge } from "react-bootstrap";
import "./Notifications.css"; // Add styles if needed

const mockNotifications = [
  {
    id: 1,
    type: "Message",
    content: "You received a new message from Alice",
    isRead: false,
    timestamp: "2024-12-09T10:30:00Z",
  },
  {
    id: 2,
    type: "Connection",
    content: "Bob sent you a connection request",
    isRead: true,
    timestamp: "2024-12-08T14:20:00Z",
  },
  {
    id: 3,
    type: "Event",
    content: "Reminder: Team meeting at 3 PM",
    isRead: false,
    timestamp: "2024-12-09T09:00:00Z",
  },
]; // Replace with API data

export const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Replace with an actual API call to fetch notifications
    setNotifications(mockNotifications);
  }, []);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  return (
    <div className="notifications-page">
      <h5>Your Notifications</h5>
      <ListGroup>
        {notifications.map((notification) => (
          <ListGroup.Item
            key={notification.id}
            className={`notification-item ${
              notification.isRead ? "read" : "unread"
            }`}
            onClick={() => markAsRead(notification.id)}
          >
            <div className="notification-content">
              <span className="notification-type">
                <Badge bg={notification.isRead ? "secondary" : "primary"}>
                  {notification.type}
                </Badge>
              </span>
              <span className="notification-text">{notification.content}</span>
            </div>
            <div className="notification-timestamp">
              {new Date(notification.timestamp).toLocaleString()}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
