import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

import { timeAgo } from "Helpers";

export const PostHeader = React.memo(
  ({ profilePicture, fullName, date, username }) => (
    <Link className="text-decoration-none text-black" to={`/user/${username}`}>
      <div className="d-flex align-items-center modal-header">
        <Image
          src={profilePicture}
          roundedCircle
          className="me-3"
          style={{ width: "50px", height: "50px" }}
        />
        <div>
          <h6 className="mb-0">{fullName}</h6>
          <small className="text-muted">{timeAgo(date)}</small>
        </div>
      </div>
    </Link>
  )
);
