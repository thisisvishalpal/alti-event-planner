import { Link } from "react-router-dom";
import { Badge, ListGroup } from "react-bootstrap";
import { timeAgo } from "Helpers";

export const NotificationRow = ({ notification }) => {
  return (
    <Link to={notification.link}>
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
          <span className="notification-text">{notification.message}</span>
        </div>
        <div className="notification-timestamp">
          {timeAgo(notification.createdAt)}
        </div>
      </ListGroup.Item>
    </Link>
  );
};
