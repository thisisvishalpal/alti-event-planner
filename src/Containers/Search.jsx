import React, { useState, useEffect } from "react";
import { ListGroup, Image, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Search.css"; // Add custom styles if necessary
import { SearchBar } from "Components";
import { fetchSearch } from "Slices";

export const Search = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(({ userSearch }) => userSearch);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  console.log(data);

  useEffect(() => {
    dispatch(fetchSearch(query));
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="user-search">
      <SearchBar
        heading="Search Users"
        value={query}
        handleChange={handleInputChange}
        placeholder="Search by name or username"
      />

      {loading && <div className="loading">Loading...</div>}
      {!loading && data?.length > 0 && (
        <ListGroup className="suggestions-list">
          {data?.map((user) => (
            <Link to={`/user/${user?.username}`}>
              <ListGroup.Item key={user.id} className="suggestion-item">
                <div className="suggestion-details">
                  <Image
                    src={user.profilePicture}
                    alt={`${user.name}'s profile`}
                    roundedCircle
                    className="profile-picture"
                  />
                  <div className="user-info">
                    <span className="user-name">{user.name}</span>
                    <span className="user-username">@{user.username}</span>
                    <Badge bg="info" className="mutual-connections">
                      {user.mutualConnections} mutual connections
                    </Badge>
                  </div>
                </div>
              </ListGroup.Item>
            </Link>
          ))}
        </ListGroup>
      )}
    </div>
  );
};
