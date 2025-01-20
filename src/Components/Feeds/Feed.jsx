import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row, Col, Alert } from "react-bootstrap";

import {
  LikeCommentShare,
  PostContent,
  PostHeader,
  SpinnerTwo,
  PostModal,
} from "Components";
import { mutateLikePost, mutateUnlikePost } from "Slices";

export const FeedSection = () => {
  const dispatch = useDispatch();
  const {
    data = [],
    loading,
    error,
  } = useSelector(({ userFeeds }) => userFeeds);
  const [postModal, setPostModal] = useState(false);
  const [post, setPost] = useState({});

  const openModal = useCallback((post) => {
    setPost(post);
    setPostModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setPost({});
    setPostModal(false);
  }, []);

  const handleLike = (e) => dispatch(mutateLikePost({ postId: e._id }));
  const handleUnlike = (e) => dispatch(mutateUnlikePost({ postId: e._id }));

  return (
    <>
      {error && <Alert variant="danger">{error || "An error occurred."}</Alert>}
      {loading && <SpinnerTwo />}
      {postModal && (
        <PostModal
          handleCloseModal={closeModal}
          handleLike={handleLike}
          handleUnlike={handleUnlike}
          post={post}
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
                  handleUnlike={handleUnlike}
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
