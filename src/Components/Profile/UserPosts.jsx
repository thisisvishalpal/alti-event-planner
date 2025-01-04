import { useState } from "react";
import { Container, Spinner } from "react-bootstrap";

import "./PostGrid.css";

const PostGrid = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <div>
      <div className="post-grid">
        {posts.map((post) => (
          <div
            key={post.id}
            className="post-card"
            onClick={() => handlePostClick(post)}
          >
            {post.image && (
              <img src={post.image} alt={post.content} className="post-image" />
            )}
            <p className="post-content">{post.content}</p>
          </div>
        ))}
      </div>

      {selectedPost && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
          >
            <button className="close-modal" onClick={handleCloseModal}>
              &times;
            </button>
            <div className="modal-body">
              {selectedPost.image && (
                <img
                  src={selectedPost.image}
                  alt={selectedPost.content}
                  className="modal-image"
                />
              )}
              <p>{selectedPost.content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const UserPosts = ({ posts = [], loading }) => {
  return (
    <Container className="my-posts">
      <h3 className="mb-4">My Posts</h3>
      {loading ? <Spinner /> : <PostGrid posts={posts} />}
    </Container>
  );
};
