import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  Form,
  Container,
  ProgressBar,
  Card,
  Alert,
} from "react-bootstrap";

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

export const ActionButton = ({ prevStep, isFirstStep, isLastStep }) => {
  return (
    <div className="d-flex justify-content-between">
      <Button variant="secondary" onClick={prevStep} disabled={isFirstStep}>
        Previous
      </Button>
      {isLastStep ? (
        <Button variant="success" type="submit">
          Submit
        </Button>
      ) : (
        <Button variant="primary" type="submit">
          Next
        </Button>
      )}
    </div>
  );
};
export const SignupTwo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const wantToEdit = true;
  const [currentStep, setCurrentStep] = useState(1);
  const [serverError, setServerError] = useState([]);

  const isFirstStep = currentStep === 1;

  const nextStep = () => {
    if (!isLastStep) setCurrentStep(currentStep + 1);
  };

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
      setServerError(error.response.data.errors);
    }
  };

  const prevStep = () => {
    setCurrentStep((prevState) => prevState - 1);
    setServerError([]);
  };

  const generateStep = (FormComponent, isLastStep = false, watch) => (
    <Form onSubmit={handleSubmit(isLastStep ? onSubmit : nextStep)}>
      <FormComponent
        errors={errors}
        wantToEdit={wantToEdit}
        register={register}
        watch={watch}
      />
      <ActionButton
        prevStep={prevStep}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
      />
    </Form>
  );

  const steps = [
    generateStep(PersonalInfoForm),
    generateStep(CareerInformationForm),
    generateStep(UsernameEmailForm, true, watch),
  ];

  const isLastStep = currentStep === steps.length;
  const getProgress = () => (currentStep / steps.length) * 100;

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
        {serverError.length > 0 && (
          <Alert variant="danger">
            <ul>
              {serverError?.map((error) => (
                <li>{error.msg}</li>
              ))}
            </ul>
          </Alert>
        )}

        <div className="mt-4">{steps[currentStep - 1]}</div>

        <ProgressBar now={getProgress()} className="my-4" />

        <p className="mt-3 text-center">
          Already have an account? <Link to={urls.signIn}>Sign In</Link>
        </p>
      </Card>
    </Container>
  );
};
