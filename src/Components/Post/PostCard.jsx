import { Col } from "react-bootstrap";

import { PostHeader, PostContent, LikeCommentShare } from ".";
import { useModal } from "Context";

export const PostCard = ({ post }) => {
  const { openModal } = useModal();

  return (
    <Col md={12} key={post._id} className="feed-post-card">
      <PostHeader date={post.createdAt} {...post.author} />
      <PostContent handleClick={() => openModal(post._id)} post={post} />
      <LikeCommentShare
        handleComment={() => openModal(post._id)}
        handleShare={() => openModal(post._id)}
        isLiked={post.isLiked}
        likes={post.likes}
        postId={post._id}
      />
    </Col>
  );
};
