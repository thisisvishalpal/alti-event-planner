import { Col, Card } from "react-bootstrap";

import { PostHeader, PostContent, LikeCommentShare } from ".";

export const PostCard = ({ post, openModal }) => {
  return (
    <Col md={12} key={post._id} className="mb-3">
      <Card className="shadow-sm">
        <Card.Body>
          <PostHeader date={post.createdAt} {...post.author} />
          <PostContent handleClick={() => openModal(post._id)} post={post} />
          <LikeCommentShare
            handleComment={() => openModal(post._id)}
            handleShare={() => openModal(post._id)}
            isLiked={post.isLiked}
            likes={post.likes}
            postId={post._id}
          />
        </Card.Body>
      </Card>
    </Col>
  );
};
