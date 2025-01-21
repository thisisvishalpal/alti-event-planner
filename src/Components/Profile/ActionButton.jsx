import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useProfile } from "Hooks";
import { ShareButton } from "Components";

export const ActionButton = ({
  followsYou,
  following,
  toggleFollowing,
  handleRemoveFollower,
  username,
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

      <ShareButton username={username} />
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
