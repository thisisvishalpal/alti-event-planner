import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Button, Form, Container } from "react-bootstrap";

import { signIn } from "Slices";
import { urls } from "Utils";
import { axiosInstance } from "Services";

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
      const response = await axiosInstance.post("auth/signup", data);
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

  const longSignupForm = false;
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="signup-form">
        <h2 className="text-center mb-4">Sign Up</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              {...register("fullName", { required: "Full Name is required" })}
            />
            {errors.fullName && (
              <p className="text-danger">{errors.fullName.message}</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
          </Form.Group>

          {longSignupForm && (
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone Number must be 10 digits",
                  },
                })}
              />
              {errors.phoneNumber && (
                <p className="text-danger">{errors.phoneNumber.message}</p>
              )}
            </Form.Group>
          )}

          {longSignupForm && (
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your city"
                {...register("city", { required: "City is required" })}
              />
              {errors.city && (
                <p className="text-danger">{errors.city.message}</p>
              )}
            </Form.Group>
          )}

          {longSignupForm && (
            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your age"
                {...register("age", {
                  required: "Age is required",
                  min: {
                    value: 18,
                    message: "You must be at least 18 years old",
                  },
                })}
              />
              {errors.age && (
                <p className="text-danger">{errors.age.message}</p>
              )}
            </Form.Group>
          )}

          {longSignupForm && (
            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                {...register("gender", { required: "Gender is required" })}
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Select>
              {errors.gender && (
                <p className="text-danger">{errors.gender.message}</p>
              )}
            </Form.Group>
          )}

          {longSignupForm && (
            <Form.Group className="mb-3">
              <Form.Label>Study</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your field of study"
                {...register("study", { required: "Study field is required" })}
              />
              {errors.study && (
                <p className="text-danger">{errors.study.message}</p>
              )}
            </Form.Group>
          )}

          {longSignupForm && (
            <Form.Group className="mb-3">
              <Form.Label>Occupation</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your occupation"
                {...register("occupation", {
                  required: "Occupation is required",
                })}
              />
              {errors.occupation && (
                <p className="text-danger">{errors.occupation.message}</p>
              )}
            </Form.Group>
          )}

          {longSignupForm && (
            <Form.Group className="mb-3">
              <Form.Label>Married</Form.Label>
              <Form.Select
                {...register("married", {
                  required: "Marital status is required",
                })}
              >
                <option value="">Select marital status</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Form.Select>
              {errors.married && (
                <p className="text-danger">{errors.married.message}</p>
              )}
            </Form.Group>
          )}

          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username (optional)"
              {...register("username")}
            />
          </Form.Group>

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
