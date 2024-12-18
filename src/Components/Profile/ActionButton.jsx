import { useProfile } from "Hooks";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ActionButton = ({ toggleCollapse }) => {
  const navigate = useNavigate();
  const { isAccessingSelfProfile } = useProfile();

  return isAccessingSelfProfile ? (
    <div className="text-end">
      <Button
        variant="primary"
        onClick={() => navigate("/settings")}
        className="me-2"
      >
        Edit Profile
      </Button>
      <Button variant="outline-secondary" onClick={toggleCollapse}>
        View info
      </Button>
    </div>
  ) : (
    <div className="text-end">
      <Button variant="primary" onClick={() => {}} className="me-2">
        Follow
      </Button>
      <Button variant="outline-secondary" onClick={toggleCollapse}>
        View info
      </Button>
    </div>
  );
};
