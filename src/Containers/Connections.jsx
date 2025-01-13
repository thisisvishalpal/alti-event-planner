import React, { useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { SearchBar, ConnectionTabs } from "Components";
import { fetchUserConnections } from "Slices";

export const Connections = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector(
    ({ userConnections }) => userConnections
  );

  const [filter, setFilter] = useState("");
  const [filterFollowers, setFilterFollowers] = useState(data.followers);
  const [filterFollowing, setFilterFollowing] = useState(data.following);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    dispatch(fetchUserConnections());
  }, []);

  const followersResults = data?.followers?.filter(
    (user) =>
      user?.fullName.toLowerCase().includes(filter.toLowerCase()) ||
      user?.username.toLowerCase().includes(filter.toLowerCase())
  );
  const followingResults = data?.following?.filter(
    (user) =>
      user?.fullName.toLowerCase().includes(filter.toLowerCase()) ||
      user?.username.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    setFilterFollowers(followersResults);
    setFilterFollowing(followingResults);
  }, [filter, data]);

  const handleInputChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Container className="mt-4">
      <SearchBar
        heading="Search connections"
        value={filter}
        handleChange={handleInputChange}
        placeholder="Search by name or username"
      />

      {error && <Alert variant="danger">{error}</Alert>}

      <ConnectionTabs
        loading={loading}
        state={location?.state}
        followers={filterFollowers}
        following={filterFollowing}
      />
    </Container>
  );
};
