import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";

import { UploadSection, FeedSection } from "Components";
import { fetchUserFeeds } from "Slices";

export const Feeds = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserFeeds());
  }, []);

  return (
    <Container className="mt-3">
      <UploadSection />
      <h2 className="mb-4">Feeds</h2>
      <FeedSection />
    </Container>
  );
};
