import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { SearchBar, ConnectionTabs } from "Components";
import { fetchUserConnections } from "Slices";

export const Connections = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { data, loading } = useSelector(
    ({ userConnections }) => userConnections
  );

  const [filterFollowers, setFilterFollowers] = useState(data.followers);
  const [filterFollowing, setFilterFollowing] = useState(data.following);
  const [filter, setFilter] = useState("");

  const handleInputChange = (e) => {
    setFilter(e.target.value);
  };

  // const followersResults = followers.filter(
  //   (user) =>
  //     user.name.toLowerCase().includes(filter.toLowerCase()) ||
  //     user.username.toLowerCase().includes(filter.toLowerCase())
  // );
  // const followingResults = following.filter(
  //   (user) =>
  //     user.name.toLowerCase().includes(filter.toLowerCase()) ||
  //     user.username.toLowerCase().includes(filter.toLowerCase())
  // );

  // useEffect(() => {
  //   setFilterFollowers(followersResults);
  //   setFilterFollowing(followingResults);
  // }, [filter, data]);

  useEffect(() => {
    dispatch(fetchUserConnections());
  }, []);

  return (
    <Container className="m-4">
      <SearchBar
        heading="Search Users"
        value={filter}
        handleChange={handleInputChange}
        placeholder="Search by name or username"
      />
      <ConnectionTabs
        loading={loading}
        state={location?.state}
        followers={data.followers}
        following={data.following}
      />
    </Container>
  );
};
