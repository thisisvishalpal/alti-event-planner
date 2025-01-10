import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import {
  CareerInformationForm,
  SearchFilterForm,
  SearchResults,
} from "Components";
import { fetchSearch, resetSearch } from "Slices";

export const Filter = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(({ userSearch }) => userSearch);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    dispatch(resetSearch());
  }, []);

  const onSubmit = (data) => {
    dispatch(fetchSearch(data)).then(() => {
      setShowResults(true);
    });
  };

  const handleShow = () => {
    dispatch(resetSearch());
    setShowResults((prev) => !prev);
  };

  return (
    <div className="user-search">
      <Row className="mb-3 justify-content-between">
        <Col xs="auto">
          <h3>Filter</h3>
        </Col>
        <Col xs="auto">
          {(!!data.length || error) && (
            <Button variant="secondary" size="sm" onClick={handleShow}>
              {showResults ? "Show filter" : "Show results"}
            </Button>
          )}
        </Col>
      </Row>

      {!showResults && (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <SearchFilterForm
            showHeading={false}
            errors={errors}
            wantToEdit={true}
            register={register}
          />

          <CareerInformationForm
            showHeading={false}
            errors={errors}
            wantToEdit={true}
            register={register}
            watch={watch}
          />

          <div className="text-end">
            <Button variant="primary" type="submit" block>
              Search
            </Button>
          </div>
        </Form>
      )}

      {error && <h4>{error}</h4>}
      {showResults && <SearchResults data={data} loading={loading} />}
    </div>
  );
};
