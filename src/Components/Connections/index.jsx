import React, { useState } from "react";
import { Tab, Tabs, Container } from "react-bootstrap";

import { ShowMessage, UserRow } from "Components";

export const ConnectionTabs = ({ state, followers = [], following = [] }) => {
  const [activeTab, setActiveTab] = useState(state || "followers");

  const handleTabSelect = (tab) => setActiveTab(tab);

  // Render tab content based on user data
  const renderTabContent = (users) => {
    if (!users.length) {
      return (
        <ShowMessage
          heading="No users found."
          secondary="Try connecting with new users."
        />
      );
    }
    return users?.map((user) => <UserRow key={user._id} user={user} />);
  };

  return (
    <Container className="mt-4">
      <Tabs activeKey={activeTab} onSelect={handleTabSelect} justify>
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
