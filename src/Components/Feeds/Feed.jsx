import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col, Button, Image, Alert } from "react-bootstrap";

import { FaThumbsUp, FaCommentAlt, FaShare } from "react-icons/fa";
import { SpinnerTwo } from "Components";
import { timeAgo } from "Helpers";
import { useTheme } from "Theme";
import { PostModal } from "Components/Profile";
import { Link } from "react-router-dom";

export const PostHeader = React.memo(
  ({ profilePicture, fullName, date, username }) => (
    <Link className="text-decoration-none text-black" to={`user/${username}`}>
      <div className="d-flex align-items-center modal-header">
        <Image
          src={profilePicture}
          roundedCircle
          className="me-3"
          style={{ width: "50px", height: "50px" }}
        />
        <div>
          <h5 className="mb-0">{fullName}</h5>
          <small className="text-muted">{timeAgo(date)}</small>
        </div>
      </div>
    </Link>
  )
);

export const PostContent = React.memo(
  ({ handleClick = () => {}, post, modal = false, ...rest }) => (
    <div {...rest}>
      {!modal && <p>{post.content}</p>}
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

export const LikeCommentShare = ({ openModal = () => {}, post = {} }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const { theme } = useTheme();

  const handleLike = () => {
    setLiked((prevLiked) => !prevLiked);
    setLikes((prevLikes) => (liked ? prevLikes - 1 : prevLikes + 1));
  };

  const allButtons = [
    {
      label: liked ? "Liked" : "Like",
      icon: <FaThumbsUp />,
      action: handleLike,
      count: likes,
    },
    {
      label: "Comment",
      icon: <FaCommentAlt />,
      action: () => openModal(post),
    },
    {
      label: "Share",
      icon: <FaShare />,
      action: () => openModal(post),
    },
  ];

  return (
    <Row className="justify-content-around text-center pt-3">
      {allButtons.map(({ label, icon, action, count }, idx) => (
        <Col xs={4} key={idx}>
          <Button
            variant={theme === "light" ? "light" : "dark"}
            className={`w-100 d-flex align-items-center justify-content-center ${
              label === "Liked" ? "text-primary" : ""
            }`}
            onClick={action}
          >
            {icon}
            <span className="ms-2">
              {label} {count > 0 && `(${count})`}
            </span>
          </Button>
        </Col>
      ))}
    </Row>
  );
};

export const FeedSection = () => {
  const {
    data = [],
    loading,
    error,
  } = useSelector(({ userFeeds }) => userFeeds);
  const [postModal, setPostModal] = useState(false);
  const [post, setPost] = useState({});

  const openModal = useCallback((post) => {
    console.log(post, "post");
    setPost(post);
    setPostModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setPostModal(false);
    setPost({});
  }, []);

  const handleLike = () => {
    console.log("liked clicked!");
  };

  return (
    <>
      {error && <Alert variant="danger">{error || "An error occurred."}</Alert>}
      {loading && <SpinnerTwo />}
      {postModal && (
        <PostModal
          handleCloseModal={closeModal}
          handleLike={handleLike}
          {...post}
        />
      )}
      {!loading && !error && data.length === 0 && (
        <Alert variant="info">No posts available to show.</Alert>
      )}
      <Row>
        {data.map((post) => (
          <Col md={12} key={post._id} className="mb-3">
            <Card className="shadow-sm">
              <Card.Body>
                <PostHeader date={post.createdAt} {...post.author} />
                <PostContent handleClick={openModal} post={post} />
                <LikeCommentShare
                  handleLike={handleLike}
                  openModal={openModal}
                  post={post}
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
