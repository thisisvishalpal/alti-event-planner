import { useProfile } from "Hooks";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ActionButton = ({
  followsYou,
  following,
  toggleFollowing,
  handleRemoveFollower,
}) => {
  const navigate = useNavigate();
  const { isAccessingSelfProfile } = useProfile();

  const renderSelfProfileActions = () => (
    <div className="text-end">
      <Button
        variant="primary"
        onClick={() => navigate("/settings")}
        className="me-2"
      >
        Edit profile
      </Button>
      <Button variant="outline-secondary" onClick={() => {}}>
        Share profile
      </Button>
    </div>
  );

  const renderOtherProfileActions = () => (
    <div className="text-end">
      <Button variant="primary" onClick={toggleFollowing} className="me-2">
        {following ? "Unfollow" : followsYou ? "Follow back" : "Follow"}
      </Button>
      {following ? (
        <Button variant="outline-secondary" onClick={() => {}}>
          Message
        </Button>
      ) : followsYou ? (
        <Button variant="outline-secondary" onClick={handleRemoveFollower}>
          Remove follower
        </Button>
      ) : (
        <Button variant="outline-secondary" onClick={() => {}}>
          Block
        </Button>
      )}
    </div>
  );

  return isAccessingSelfProfile
    ? renderSelfProfileActions()
    : renderOtherProfileActions();
};
