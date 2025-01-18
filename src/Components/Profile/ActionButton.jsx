import { useProfile } from "Hooks";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ActionButton = ({ following, toggleFollowing }) => {
  const navigate = useNavigate();
  const { isAccessingSelfProfile } = useProfile();

  return isAccessingSelfProfile ? (
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
  ) : (
    <div className="text-end">
      <Button
        variant="primary"
        // disabled={following}
        onClick={toggleFollowing}
        className="me-2"
      >
        {following ? "Unfollow" : "Follow"}
      </Button>
      <Button
        disabled={!following}
        variant="outline-secondary"
        onClick={() => {}}
      >
        Message
      </Button>
    </div>
  );
};
