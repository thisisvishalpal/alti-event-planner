import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col, Button, Image, Alert } from "react-bootstrap";
import { SpinnerTwo } from "Components";
import { FaThumbsUp, FaCommentAlt, FaShare } from "react-icons/fa";
import { useTheme } from "Theme";
import { PostModal } from "Components/Profile";

const PostHeader = ({ profilePicture, name, date }) => {
  return (
    <Row className="align-items-center">
      <Col xs={2}>
        <Image src={profilePicture} roundedCircle className="img-fluid" />
      </Col>
      <Col>
        <h5 className="mb-0">{name}</h5>
        <small className="text-muted">{date}</small>
      </Col>
    </Row>
  );
};

const PostContent = ({ content, image }) => {
  return (
    <>
      <Card.Text className="mt-3">{content}</Card.Text>
      <div className="text-center">
        {image && (
          <Image src={image} alt="Post" className="img-fluid rounded" />
        )}
      </div>
    </>
  );
};
const LikeCommentShare = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const { theme } = useTheme();

  const handleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleComment = () => {
    alert("Comment button clicked!");
  };

  const handleShare = () => {
    alert("Share button clicked!");
  };

  return (
    <div className="like-comment-share">
      <Row className="justify-content-around text-center pt-3">
        <Col xs={4}>
          <Button
            variant={theme === "light" ? "light" : "dark"}
            className={`w-100 d-flex align-items-center justify-content-center ${
              liked ? "text-primary" : ""
            }`}
            onClick={handleLike}
          >
            <FaThumbsUp className="me-2" />
            {liked ? "Liked" : "Like"} {likes > 0 && `(${likes})`}
          </Button>
        </Col>
        <Col xs={4}>
          <Button
            variant={theme === "light" ? "light" : "dark"}
            className="w-100 d-flex align-items-center justify-content-center"
            onClick={handleComment}
          >
            <FaCommentAlt className="me-2" />
            Comment
          </Button>
        </Col>
        <Col xs={4}>
          <Button
            variant={theme === "light" ? "light" : "dark"}
            className="w-100 d-flex align-items-center justify-content-center"
            onClick={handleShare}
          >
            <FaShare className="me-2" />
            Share
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export const FeedSection = () => {
  const feedsState = useSelector(({ userFeeds }) => userFeeds);
  const { data, loading, error } = feedsState;
  const [postModal, setPostModal] = useState(false);
  const [post, setPost] = useState({});

  const openModal = (post) => {
    setPost(post);
    setPostModal(true);
  };

  const closeModal = () => {
    setPostModal((prev) => !prev);
    setPost({});
  };

  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>}
      {loading && <SpinnerTwo />}
      {postModal && (
        <PostModal
          handleCloseModal={closeModal}
          image={post.image}
          content={post.content}
        />
      )}
      <Row>
        {data?.map((post, index) => (
          <Col md={12} key={post.id} className="mb-3">
            <Card className="shadow-sm">
              <Card.Body onClick={() => openModal(post)}>
                <PostHeader
                  profilePicture={post.user.profilePicture}
                  name={post.user.name}
                  date={post.date}
                />
                <PostContent content={post.content} image={post.image} />
                <LikeCommentShare />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
