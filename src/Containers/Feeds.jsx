import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { UploadSection, FeedSection } from "Components";
import { fetchUserFeeds } from "Slices";

export const Feeds = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    dispatch(fetchUserFeeds());
  }, []);

  return (
    <Container className="mt-3">
      <UploadSection />
      <h3 className="mb-4">{t("routes.feeds.title")}</h3>
      <FeedSection />
    </Container>
  );
};
