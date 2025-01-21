import React from "react";
import { useSelector } from "react-redux";
import { Row, Alert } from "react-bootstrap";

import { SpinnerTwo, PostModal, PostCard } from "Components";

export const FeedSection = () => {
  const {
    data = [],
    loading,
    error,
  } = useSelector(({ userFeeds }) => userFeeds);

  return (
    <>
      {error && <Alert variant="danger">{error || "An error occurred."}</Alert>}
      {loading && <SpinnerTwo />}

      {!loading && !error && data.length === 0 && (
        <Alert variant="info">No posts available to show.</Alert>
      )}

      <PostModal />

      <Row>
        {data.map((post) => (
          <PostCard post={post} />
        ))}
      </Row>
    </>
  );
};
