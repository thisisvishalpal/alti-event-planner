import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Search.css";
import { SearchBar, SearchResults } from "Components";
import { fetchSearch, resetSearch } from "Slices";

export const Search = () => {
  const dispatch = useDispatch();
  const { data, errror, loading } = useSelector(({ userSearch }) => userSearch);
  const [query, setQuery] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    return () => dispatch(resetSearch());
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

      {loading && <div className="loading">Loading...</div>}
      {!loading && <SearchResults data={data} />}
    </div>
  );
};
