import { Link } from "react-router-dom";
import { Badge, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { timeAgo } from "Helpers";
import { mutateReadNotification } from "Slices";

export const NotificationRow = ({ notification }) => {
  const dispatch = useDispatch();

  const handleClick = () => console.log("handle click");
  // dispatch(mutateReadNotification(notification._id));

  return (
    <Link className="no-text-deco" to={notification.link}>
      <ListGroup.Item
        className={`notification-item ${
          notification.isRead ? "read" : "unread"
        }`}
        onClick={handleClick}
      >
        <div className="notification-content">
          <Badge
            className="notification-type"
            bg={notification.isRead ? "secondary" : "primary"}
          >
            {notification.type}
          </Badge>

          <span className="notification-text">{notification.message}</span>
          <div className="notification-timestamp">
            {timeAgo(notification.createdAt)}
          </div>
        </div>
      </ListGroup.Item>
    </Link>
  );
};
