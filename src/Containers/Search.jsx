import React, { useState, useEffect } from "react";
import { Collapse, Card, Form, Button } from "react-bootstrap";
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
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(({ userSearch }) => userSearch);
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState(true);

  useEffect(() => {
    dispatch(fetchSearch(query));
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const onSubmit = () => {
    console.log(errors);
  };

  return (
    <div className="user-search">
      <SearchTypeSelector
        searchType={searchType}
        handleToggle={() => setSearchType((prev) => !prev)}
      />
      {!searchType && (
        <SearchBar
          heading="Search Users"
          value={query}
          handleChange={handleInputChange}
          placeholder="Search by name or username"
        />
      )}
      <Collapse in={searchType}>
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
      {!loading && data?.length > 0 && <SearchResults data={data} />}
    </div>
  );
};
