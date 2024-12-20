import React from "react";
import { Form } from "react-bootstrap";

export const SearchTypeSelector = ({ searchType, handleToggle }) => {
  return (
    <div className="d-flex align-items-center switch-container mb-4">
      <span className="label me-2">By name</span>
      <Form.Check
        disabled={true}
        type="switch"
        id="custom-switch"
        checked={searchType}
        onChange={handleToggle}
        className="me-2"
      />
      <span className="label">By filters</span>
    </div>
  );
};
