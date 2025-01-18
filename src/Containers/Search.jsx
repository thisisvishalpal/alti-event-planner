import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "react-bootstrap";
import { useDebounce } from "use-debounce";

import "./Search.css";
import { SearchBar, SpinnerTwo, UserRow } from "Components";
import { fetchSearch } from "Slices";

export const Search = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector(({ userSearch }) => userSearch);
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 300);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  useEffect(() => {
    if (debouncedQuery.trim()) {
      dispatch(fetchSearch({ query: debouncedQuery }));
    }
  }, [debouncedQuery, dispatch]);

  return (
    <div className="user-search">
      <SearchBar
        heading="Search users"
        value={query}
        handleChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name or username"
        aria-label="Search users"
      />
      {error && (
        <Alert key="searchError" className="mt-3" variant="danger">
          {error}
        </Alert>
      )}

      {loading && <SpinnerTwo />}

      {!data.length && !loading && query && (
        <Alert key="searchWarning" className="mt-3" variant="warning">
          No results found. Try searching for different keywords!
        </Alert>
      )}

      {data && data.map((user) => <UserRow key={user._id} user={user} />)}
    </div>
  );
};
