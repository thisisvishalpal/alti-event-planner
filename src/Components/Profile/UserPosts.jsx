import { useState } from "react";
import { Container } from "react-bootstrap";

import "./PostGrid.css";
import { PostModal } from "Components";
import { NoPosts } from ".";

export const UserPosts = ({ posts = [] }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <Container>
      {/* <h3 className="mb-4">My Posts</h3> */}
      {posts.length ? (
        <div className="post-grid">
          {posts.map((post) => (
            <div
              key={post._id}
              className="post-card"
              onClick={() => handlePostClick(post)}
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.content}
                  className="post-image"
                />
              )}
              <p className="post-content">{post.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <NoPosts />
      )}

      {selectedPost && (
        <PostModal handleCloseModal={handleCloseModal} {...selectedPost} />
      )}
    </Container>
  );
};
