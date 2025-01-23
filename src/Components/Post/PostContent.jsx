import React from "react";
import { Image } from "react-bootstrap";

export const PostContent = React.memo(
  ({ handleClick = () => {}, post, modal = false, ...rest }) => (
    <div {...rest}>
      {!modal && <p className="feed-post-card-description">{post.content}</p>}
      {post.image && (
        <div class="feed-post-image-container">
          <Image
            src={post.image}
            alt="Post"
            onClick={handleClick}
            className="modal-image feed-post-image"
          />
        </div>
      )}
    </div>
  )
);
