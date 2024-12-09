import React from "react";
import { useSelector } from "react-redux";

import { UploadSection, Feed } from "Components";
import { mockPosts } from "Mock";

export const Feeds = () => {
  const feedsState = useSelector(({ allFeeds }) => allFeeds);
  const { feeds, loading, error } = feedsState;

  return (
    <div className="container mt-5">
      <UploadSection />
      <h2 className="mb-4">Feeds</h2>
      <Feed posts={mockPosts} />
    </div>
  );
};
