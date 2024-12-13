import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { UploadSection, FeedSection } from "Components";
import { fetchUserFeeds } from "Slices";

export const Feeds = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserFeeds());
  }, []);

  return (
    <div className="container mt-3">
      <UploadSection />
      <h2 className="mb-4">Feeds</h2>
      <FeedSection />
    </div>
  );
};
