import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export const UserRow = ({ key, imageIcon, alt, followerName, username }) => {
  // console.log(followerName);
  return (
    <>
      <ListGroup.Item key={key}>
        <Link
          to={`/user/${username}`}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div className="d-flex align-items-center">
            <img
              src={imageIcon}
              alt={alt}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
            <span>{followerName}</span>
          </div>
        </Link>
      </ListGroup.Item>
    </>
  );
};
