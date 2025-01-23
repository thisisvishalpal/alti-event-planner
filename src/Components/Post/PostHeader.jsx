import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

import { timeAgo } from "Helpers";

export const PostHeader = React.memo(
  ({ profilePicture, fullName, date, username }) => (
    <div className="feed-post-card-header">
      <Link to={`/user/${username}`}>
        <Image
          src={profilePicture}
          roundedCircle
          className="me-3"
          style={{ width: "50px", height: "50px" }}
        />
      </Link>
      <div>
        <Link
          className="text-decoration-none text-black"
          to={`/user/${username}`}
        >
          <h6 className="mb-0">{fullName}</h6>
        </Link>
        <small className="text-muted">{timeAgo(date)}</small>
      </div>
    </div>
  )
);
