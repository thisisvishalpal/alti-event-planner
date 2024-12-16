import React, { useEffect, useState } from "react";
import { Tab, Tabs, Container, ListGroup } from "react-bootstrap";
import { followers, following } from "Mock";
import { useLocation } from "react-router-dom";
import { SearchBar, UserRow } from "Components";

export const ConnectionTabs = ({ state, followers, following }) => {
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
              <UserRow
                key={follower.id}
                imageIcon={follower.profilePicture}
                followerName={follower.name}
                alt={follower.name}
                username={follower?.username}
              />
            ))}
          </ListGroup>
        </Tab>

        <Tab eventKey="following" title={`Following ${following.length}`}>
          <ListGroup>
            {following.map((followed) => (
              <UserRow
                key={followed.id}
                imageIcon={followed.profilePicture}
                followerName={followed.name}
                alt={followed.name}
                username={followed?.username}
              />
            ))}
          </ListGroup>
        </Tab>
      </Tabs>
    </Container>
  );
};

export const Connections = () => {
  const location = useLocation();

  const [filterFollowers, setFilterFollowers] = useState(followers);
  const [filterFollowing, setFilterFollowing] = useState(following);
  const [filter, setFilter] = useState("");

  const handleInputChange = (e) => {
    setFilter(e.target.value);
  };

  const followersResults = followers.filter(
    (user) =>
      user.name.toLowerCase().includes(filter.toLowerCase()) ||
      user.username.toLowerCase().includes(filter.toLowerCase())
  );
  const followingResults = following.filter(
    (user) =>
      user.name.toLowerCase().includes(filter.toLowerCase()) ||
      user.username.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    setFilterFollowers(followersResults);
    setFilterFollowing(followingResults);
  }, [filter]);

  return (
    <Container className="m-4">
      <SearchBar
        heading="Search Users"
        value={filter}
        handleChange={handleInputChange}
        placeholder="Search by name or username"
      />
      <ConnectionTabs
        state={location?.state}
        followers={filterFollowers}
        following={filterFollowing}
      />
    </Container>
  );
};
