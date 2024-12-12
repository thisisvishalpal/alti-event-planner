import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { UploadSection, FeedSection } from "Components";
import { fetchUserFeeds } from "Slices";

export const Feeds = () => {
  const dispatch = useDispatch();
  const userAuth = useSelector((userAuth) => userAuth);
  const { username } = useParams();

  useEffect(() => {
    // dispatch(fetchUserInfo());
    dispatch(fetchUserFeeds());
  }, []);

  return (
    <div className="container mt-5">
      <UploadSection />
      <h2 className="mb-4">Feeds</h2>
      <FeedSection />
    </div>
  );
};
