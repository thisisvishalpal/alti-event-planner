import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export const UserRow = ({ user }) => {
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
