import React, { useState, useEffect } from "react";
import { ListGroup, Image, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Search.css"; // Add custom styles if necessary
import { axiosInstance } from "Services";
import { SearchBar } from "Components";
import { apiRoutes } from "Utils";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length > 1) {
      setLoading(true);
      // Simulate an API call for suggestions
      axiosInstance
        .get(apiRoutes.searchUser, { params: { query } })
        .then((response) => {
          setSuggestions(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching suggestions:", error);
          setLoading(false);
        });
    } else {
      setSuggestions([]);
    }
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
      {!loading && suggestions.length > 0 && (
        <ListGroup className="suggestions-list">
          {suggestions.map((user) => (
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
