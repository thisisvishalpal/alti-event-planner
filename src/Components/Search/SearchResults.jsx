import { ListGroup, Image, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SearchResults = ({ data }) => {
  return (
    <ListGroup className="suggestions-list">
      {data?.map((user) => (
        <Link to={`/user/${user?.username}`}>
          <ListGroup.Item key={user.id} className="suggestion-item">
            <div className="suggestion-details">
              <Image
                src={user.profilePicture}
                alt={`${user.name}'s profile`}
                roundedCircle
                className="profile-picture"
              />
              <div className="user-info">
                <span className="user-name">{user.name}</span>
                <span className="user-username">@{user.username}</span>
                <Badge bg="info" className="mutual-connections">
                  {user.mutualConnections} mutual connections
                </Badge>
              </div>
            </div>
          </ListGroup.Item>
        </Link>
      ))}
    </ListGroup>
  );
};
