import React, { useState, useEffect } from "react";
import { Collapse, Card, Form, Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import "./Search.css"; // Add custom styles if necessary
import {
  CareerInformationForm,
  SearchBar,
  SearchFilterForm,
  SearchResults,
  SearchTypeSelector,
} from "Components";
import { fetchSearch } from "Slices";

export const Search = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { data, loading } = useSelector(({ userSearch }) => userSearch);
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState(true);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (query) {
      dispatch(fetchSearch({ query }));
    }
  }, [query, dispatch]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const onSubmit = (data) => {
    dispatch(fetchSearch(data)).then(() => {
      setShowResults(true);
    });
  };

  const toggleShowResults = () => {
    setShowResults((prev) => !prev);
  };

  return (
    <div className="user-search">
      <Row>
        <Col>
          <SearchTypeSelector
            disabled={false}
            searchType={searchType}
            handleToggle={() => setSearchType((prev) => !prev)}
          />
        </Col>
        <Col>
          {searchType && (
            <Button
              disabled={!data.length}
              size="sm"
              onClick={toggleShowResults}
            >
              {showResults ? "Show filter" : "Show results"}
            </Button>
          )}
        </Col>
      </Row>

      {!searchType ? (
        <>
          <SearchBar
            heading="Search Users"
            value={query}
            handleChange={handleInputChange}
            placeholder="Search by name or username"
          />

          {loading && <div className="loading">Loading...</div>}
          {!loading && data?.length > 0 && <SearchResults data={data} />}
        </>
      ) : (
        <>
          <Collapse in={searchType && !showResults}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Card className="p-4 m-4">
                <SearchFilterForm
                  errors={errors}
                  wantToEdit={true}
                  register={register}
                />
              </Card>
              <Card className="p-4 m-4">
                <CareerInformationForm
                  errors={errors}
                  wantToEdit={true}
                  register={register}
                  watch={watch}
                />
              </Card>
              <div className="text-end">
                <Button variant="primary" type="submit" block>
                  Search
                </Button>
              </div>
            </Form>
          </Collapse>
          {loading && <div className="loading">Loading...</div>}
          {!loading && data?.length > 0 && showResults && (
            <SearchResults data={data} />
          )}
        </>
      )}
    </div>
  );
};
