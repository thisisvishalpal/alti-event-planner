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

  const handleTabSelect = (tab) => setActiveTab(tab);

  if (loading) {
    return <SpinnerTwo />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Render tab content based on user data
  const renderTabContent = (users) => {
    if (!users.length) {
      return <p className="text-muted text-center">No users found.</p>;
    }
    return users?.map((user) => <UserRow key={user._id} user={user} />);
  };

  return (
    <Container className="mt-4">
      <Tabs
        activeKey={activeTab}
        onSelect={handleTabSelect}
        className="mb-3"
        justify
      >
        <Tab eventKey="followers" title={`Followers ${followers?.length}`}>
          {renderTabContent(followers)}
        </Tab>

        <Tab eventKey="following" title={`Following ${following?.length}`}>
          {renderTabContent(following)}
        </Tab>
      </Tabs>
    </Container>
  );
};
