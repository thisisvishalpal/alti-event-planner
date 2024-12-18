import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Button, Form, Container } from "react-bootstrap";

import { signIn } from "Slices";
import { apiRoutes, urls } from "Utils";
import { axiosInstance } from "Services";
import {
  CareerInformationForm,
  PersonalInfoForm,
  UsernameEmailForm,
} from "Components";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post(apiRoutes.userSignUp, data);
      if (response.status === 201) {
        const { user } = response.data;
        if (user.username) {
          dispatch(signIn({ username: user.username }));
        }
        navigate(urls.signIn); // Redirect to Sign In
      }
    } catch (error) {
      console.error(error.response?.data?.message || "An error occurred");
    }
  };

  const longSignupForm = true;
  const wantToEdit = true;
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "90vh" }}
    >
      <div className="signup-form">
        <h2 className="text-center mb-4">Sign Up</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <UsernameEmailForm
            errors={errors}
            wantToEdit={wantToEdit}
            register={register}
          />

          {longSignupForm && (
            <>
              <PersonalInfoForm
                errors={errors}
                wantToEdit={wantToEdit}
                register={register}
              />

              <CareerInformationForm
                errors={errors}
                wantToEdit={wantToEdit}
                register={register}
              />
            </>
          )}

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />
          </Form.Group>

          <Button variant="primary" type="submit" block>
            Sign Up
          </Button>
        </Form>

        <p className="mt-3 text-center">
          Already have an account? <Link to={`/${urls.signIn}`}>Sign In</Link>
        </p>
      </div>
    </Container>
  );
};
