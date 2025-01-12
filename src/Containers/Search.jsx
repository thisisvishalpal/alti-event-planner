import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "react-bootstrap";

import "./Search.css";
import { SearchBar, SearchResults } from "Components";
import { fetchSearch } from "Slices";

export const Search = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector(({ userSearch }) => userSearch);
  const [query, setQuery] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  useEffect(() => {
    if (query) {
      dispatch(fetchSearch({ query }));
    }
  }, [query, dispatch]);

  return (
    <div className="user-search">
      <SearchBar
        heading="Search Users"
        value={query}
        handleChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name or username"
      />
      {error && (
        <Alert key="searchError" className="mt-3" variant="danger">
          {error}
        </Alert>
      )}
      {!data.length && (
        <Alert key="searchWarning" className="mt-3" variant="warning">
          Try searching your friends !
        </Alert>
      )}
      {loading && <div className="loading">Loading...</div>}
      {!loading && <SearchResults data={data} />}
    </div>
  );
};
