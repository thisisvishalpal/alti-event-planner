import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { UploadSection, Feed } from "Components";
import { mockPosts } from "Mock";
import { fetchInitialState } from "Slices";
import { checkUsernameParam } from "Utils";

export const Feeds = () => {
  const feedsState = useSelector(({ allFeeds }) => allFeeds);
  const { feeds, loading, error } = feedsState;

  const dispatch = useDispatch();
  const { username } = useParams();
  const store = useSelector(({ userAuth }) => userAuth);

  useEffect(() => {
    if (!checkUsernameParam(username)) {
      dispatch(fetchInitialState());
    }
  }, []);

  return (
    <div className="container mt-5">
      <UploadSection />
      <h2 className="mb-4">Feeds</h2>
      <Feed posts={mockPosts} />
    </div>
  );
};
