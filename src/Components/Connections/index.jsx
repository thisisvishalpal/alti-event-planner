import React, { useState } from "react";
import { Tab, Tabs, Container, ListGroup } from "react-bootstrap";

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
          <ListGroup>
            {followers?.map(
              (follower) =>
                follower.username && (
                  <UserRow
                    key={follower?.id}
                    imageIcon={follower?.profilePicture}
                    followerName={follower?.fullName}
                    alt={follower?.fullName}
                    username={follower?.username}
                  />
                )
            )}
          </ListGroup>
        </Tab>

        <Tab eventKey="following" title={`Following ${following?.length}`}>
          <ListGroup>
            {following?.map(
              (followed) =>
                followed.username && (
                  <UserRow
                    key={followed?.id}
                    imageIcon={followed?.profilePicture}
                    followerName={followed?.fullName}
                    alt={followed?.fullName}
                    username={followed?.username}
                  />
                )
            )}
          </ListGroup>
        </Tab>
      </Tabs>
    </Container>
  );
};
