import React, { useEffect } from "react";
import { Form, Button, Col, Row, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { IoMdArrowBack } from "react-icons/io";
import {
  CareerInformationForm,
  SearchFilterForm,
  SearchResults,
} from "Components";
import { fetchFilter, resetFilter } from "Slices";

export const Filter = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(({ userFilter }) => userFilter);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [data]);

  const onSubmit = (data) => {
    dispatch(fetchFilter(data));
  };

  return (
    <div className="user-search">
      <Row className="mb-3 justify-content-between">
        <Col xs="auto">
          <h3>Filter</h3>
        </Col>
        <Col xs="auto">
          {!!data.length && (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => dispatch(resetFilter())}
            >
              <IoMdArrowBack /> Back
            </Button>
          )}
        </Col>
      </Row>

      {error && (
        <Alert key="danger" variant="danger">
          {error}
        </Alert>
      )}
      {!data.length && (
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
            required={false}
          />

          <div className="text-end">
            <Button variant="primary" type="submit" block>
              Search
            </Button>
          </div>
        </Form>
      )}

      {data && <SearchResults data={data} loading={loading} />}
    </div>
  );
};
