import React, { useEffect } from "react";
import { Form, Button, Col, Row, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { IoMdArrowBack } from "react-icons/io";
import {
  CareerInformationForm,
  SearchFilterForm,
  SpinnerTwo,
  UserRow,
} from "Components";
import { fetchFilter, resetFilter } from "Slices";

export const Filter = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, dirtyFields },
  } = useForm();

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(({ userFilter }) => userFilter);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [data]);

  const onSubmit = (formValues) => {
    if (Object.keys(dirtyFields).length > 0) {
      const updatedValues = Object.keys(dirtyFields).reduce((acc, key) => {
        if (key in formValues) {
          acc[key] = formValues[key];
        }
        return acc;
      }, {});
      dispatch(fetchFilter({ married: "no", ...updatedValues }));
    }
  };

  return (
    <div className="user-search">
      <div className="d-flex justify-content-between">
        <h3>Filter</h3>
        {!!data.length && (
          <Button
            variant="secondary"
            size="sm"
            onClick={() => dispatch(resetFilter())}
          >
            <IoMdArrowBack /> Back
          </Button>
        )}
      </div>

      <small className="text-muted">
        This filter will only give unmarried user
      </small>

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
      {loading && <SpinnerTwo />}
      {data && data?.map((user) => <UserRow key={user._id} user={user} />)}
    </div>
  );
};
