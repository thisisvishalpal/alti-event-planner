import { Container } from "react-bootstrap";

import "./PostGrid.css";
import { PostModal } from "Components";
import { NoPosts } from ".";
import { useModal } from "Context";

export const UserPosts = ({ posts = [] }) => {
  const { openModal } = useModal();

  return (
    <Container>
      {/* <h3 className="mb-4">My Posts</h3> */}
      {posts.length ? (
        <div className="post-grid">
          {posts.map((post) => (
            <div
              key={post._id}
              className="post-card"
              onClick={() => openModal(post._id)}
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

      <PostModal />
    </Container>
  );
};
