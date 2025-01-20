import { useCallback, useState } from "react";
import { Container } from "react-bootstrap";

import "./PostGrid.css";
import { PostModal } from "Components";
import { NoPosts } from ".";
import { useDispatch } from "react-redux";
import { mutateLikeOwnPost, mutateUnlikeOwnPost } from "Slices";

export const UserPosts = ({ posts = [] }) => {
  const dispatch = useDispatch();
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  const handleLike = useCallback(
    (post) => dispatch(mutateLikeOwnPost({ postId: post._id })),
    [dispatch]
  );

  const handleUnlike = useCallback(
    (post) => dispatch(mutateUnlikeOwnPost({ postId: post._id })),
    [dispatch]
  );

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
        <PostModal
          handleCloseModal={handleCloseModal}
          handleLike={handleLike}
          handleUnlike={handleUnlike}
          post={selectedPost}
        />
      )}
    </Container>
  );
};
