import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  Form,
  Container,
  ProgressBar,
  Card,
  Alert,
} from "react-bootstrap";

import { apiRoutes, urls } from "Utils";
import { axiosInstance } from "Services";
import {
  CareerInformationForm,
  PersonalInfoForm,
  UsernameEmailForm,
} from "Components";

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
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

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
          // dispatch(signIn({ username: user.username }));
          navigate(urls.signIn, {
            state: {
              message:
                "Succesfully signed up, please sign in with credentials !",
            },
          });
        }
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
        wantToEdit={true}
        register={register}
        watch={watch}
        showHeading={false}
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
    generateStep(CareerInformationForm, false, watch),
    generateStep(UsernameEmailForm, true, watch),
  ];

  const isLastStep = currentStep === steps.length;
  const getProgress = () => (currentStep / steps.length) * 100;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [currentStep]);

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
          margin: "5px",
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
        <h2 className="text-center mb-1">Sign up</h2>

        <div className="mt-4">{steps[currentStep - 1]}</div>

        <ProgressBar now={getProgress()} className="my-4" />

        <p className="mt-3 text-center">
          Already have an account? <Link to={urls.signIn}>Sign In</Link>
        </p>
      </Card>
    </Container>
  );
};
