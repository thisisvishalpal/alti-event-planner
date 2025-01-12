import React, { useState } from "react";
import { Tab, Tabs, Container } from "react-bootstrap";

import { SpinnerTwo, UserRow } from "Components";

export const ConnectionTabs = ({
  state,
  followers = [],
  following = [],
  loading,
  error,
}) => {
  const [activeTab, setActiveTab] = useState(state || "followers");

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  if (loading) {
    return <SpinnerTwo />;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <Container className="mt-4">
      <Tabs
        activeKey={activeTab}
        onSelect={handleTabSelect}
        className="mb-3"
        justify
      >
        <Tab eventKey="followers" title={`Followers ${followers?.length}`}>
          {followers?.map(
            (follower) => follower.username && <UserRow user={follower} />
          )}
        </Tab>

        <Tab eventKey="following" title={`Following ${following?.length}`}>
          {following?.map(
            (followed) => followed.username && <UserRow user={followed} />
          )}
        </Tab>
      </Tabs>
    </Container>
  );
};
