import React from "react";
import { UserRow } from "Components";
import { Spinner } from "react-bootstrap";
import PropTypes from "prop-types";

export const SearchResults = ({ data, loading }) => {
  if (loading) {
    return (
      <div className="text-center my-3">
        <Spinner animation="border" role="status" aria-label="Loading" />
      </div>
    );
  }

  // if (!data?.length) {
  //   return <div className="text-center my-3">No users found.</div>;
  // }

  return (
    <>
      {data.map((user) => (
        <UserRow key={user._id} user={user} />
      ))}
    </>
  );
};

SearchResults.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      username: PropTypes.string,
      fullName: PropTypes.string,
      profilePicture: PropTypes.string,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};
