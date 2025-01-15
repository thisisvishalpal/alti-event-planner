import React from "react";
import { Image } from "react-bootstrap";

export const PostContent = React.memo(
  ({ handleClick = () => {}, post, modal = false, ...rest }) => (
    <div {...rest}>
      {!modal && <h5>{post.content}</h5>}
      {post.image && (
        <div className="text-center">
          <Image
            style={{ cursor: "pointer" }}
            src={post.image}
            alt="Post"
            onClick={() => handleClick(post)}
            className={modal ? "modal-image img-fluid" : "img-fluid rounded"}
          />
        </div>
      )}
    </div>
  )
);
