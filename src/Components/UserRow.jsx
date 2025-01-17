import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { shape, string } from "prop-types";

export const UserRowTwo = ({ user }) => {
  return (
    <Link to={`/user/${user?.username}`} className="text-decoration-none">
      <Card key={user.id} className="suggestion-item">
        <Image
          src={user.profilePicture}
          alt={`${user.fullName}'s profile`}
          className="profile-picture"
          roundedCircle
        />
        <span className="fw-bold">{user.fullName}</span>
        <span className="text-secondary">@{user.username}</span>
      </Card>
    </Link>
  );
};

export const UserRow = ({ user }) => {
  return (
    <Link to={`/user/${user?.username}`} className="text-decoration-none">
      <Card className="suggestion-item">
        <div className="d-flex align-items-center">
          <Image
            src={user?.profilePicture}
            alt={`${user?.fullName || "User"}'s profile`}
            className="profile-picture"
            roundedCircle
          />
          <div className="ms-4">
            <span className="fw-bold">{user?.fullName || "Unknown User"}</span>
            <br />
            <span className="text-secondary">
              @{user?.username || "unknown"}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

UserRow.propTypes = {
  user: shape({
    id: string.isRequired,
    username: string.isRequired,
    fullName: string.isRequired,
    profilePicture: string,
  }).isRequired,
};
