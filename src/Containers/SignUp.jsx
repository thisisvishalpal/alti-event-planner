import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Button, Form, Container, ProgressBar, Card } from "react-bootstrap";

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

  const wantToEdit = true;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "90vh" }}
    >
      <div className="signup-form">
        <h2 className="text-center mb-4">Sign Up</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* step 1 */}
          <PersonalInfoForm
            errors={errors}
            wantToEdit={wantToEdit}
            register={register}
          />
          {/* step 2 */}
          <CareerInformationForm
            errors={errors}
            wantToEdit={wantToEdit}
            register={register}
          />

          {/* step 3 */}
          <UsernameEmailForm
            errors={errors}
            wantToEdit={wantToEdit}
            register={register}
          />
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
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

const Stepper = ({ steps, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const isLastStep = currentStep === steps.length;
  const isFirstStep = currentStep === 1;

  const nextStep = () => {
    if (!isLastStep) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (!isFirstStep) setCurrentStep(currentStep - 1);
  };

  const getProgress = () => (currentStep / steps.length) * 100;

  return (
    <Container>
      {/* <h4 className="text-center">
        Step {currentStep} of {steps.length}
      </h4> */}

      {/* Step Content */}
      <div className="mt-4">{steps[currentStep - 1]}</div>

      <ProgressBar now={getProgress()} className="my-4" />

      <div className="d-flex justify-content-between">
        <Button variant="secondary" onClick={prevStep} disabled={isFirstStep}>
          Previous
        </Button>
        {!isLastStep ? (
          <Button variant="primary" onClick={nextStep}>
            Next
          </Button>
        ) : (
          <Button variant="success" onClick={onSubmit}>
            Submit
          </Button>
        )}
      </div>
    </Container>
  );
};

export const SignupTwo = () => {
  const {
    register,
    handleSubmit,
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

  const wantToEdit = true; // Example flag for conditional rendering

  const steps = [
    <PersonalInfoForm
      errors={errors}
      wantToEdit={wantToEdit}
      register={register}
    />,
    <CareerInformationForm
      errors={errors}
      wantToEdit={wantToEdit}
      register={register}
    />,
    <>
      <UsernameEmailForm
        errors={errors}
        wantToEdit={wantToEdit}
        register={register}
      />
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required",
          })}
        />
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}
      </Form.Group>
    </>,
  ];

  return (
    <Container
      style={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          maxWidth: "500px",
          width: "100%",
          padding: "20px",
          margin: "50px",
        }}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Stepper steps={steps} onSubmit={handleSubmit(onSubmit)} />
        </Form>
      </Card>
    </Container>
  );
};
