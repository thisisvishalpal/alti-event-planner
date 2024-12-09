import React, { useState } from "react";
import { Tab, Tabs, Container, ListGroup } from "react-bootstrap";
import { followers, following } from "Mock";
import { useLocation } from "react-router-dom";

export const ConnectionTabs = ({ state, followers, following }) => {
  console.log(state, "from tabs");
  const [activeTab, setActiveTab] = useState(state || "followers");

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container className="mt-4">
      <Tabs
        activeKey={activeTab}
        onSelect={handleTabSelect}
        className="mb-3"
        justify
      >
        <Tab eventKey="followers" title={`Followers ${followers.length}`}>
          <ListGroup>
            {followers.map((follower) => (
              <ListGroup.Item key={follower.id}>
                <div className="d-flex align-items-center">
                  <img
                    src={follower.profilePicture}
                    alt={follower.name}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                  <span>{follower.name}</span>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Tab>

        <Tab eventKey="following" title={`Following ${following.length}`}>
          <ListGroup>
            {following.map((followed) => (
              <ListGroup.Item key={followed.id}>
                <div className="d-flex align-items-center">
                  <img
                    src={followed.profilePicture}
                    alt={followed.name}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                  <span>{followed.name}</span>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Tab>
      </Tabs>
    </Container>
  );
};

export const Connections = () => {
  const location = useLocation();
  console.log(location, "from connections");

  return (
    <ConnectionTabs
      state={location?.state}
      followers={followers}
      following={following}
    />
  );
};
