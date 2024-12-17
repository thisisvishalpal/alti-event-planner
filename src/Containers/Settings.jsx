import { useEffect, useState } from "react";
import { Form, Col, Row, Card, Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { ThemeToggler } from "Components";
import { useTheme } from "Theme";

export const Settings = () => {
  const { toggleTheme } = useTheme();
  const { data } = useSelector(({ userInfo }) => userInfo);
  const [wantToEdit, setWantToEdit] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("fullName", data.fullName);
    setValue("fatherName", data.fatherName);
    setValue("username", data.username);
    setValue("email", data.email);
    setValue("phoneNumber", data.phoneNumber);
    setValue("age", data.age);
    setValue("gender", data.gender);
    setValue("occupation", data.occupation);
    setValue("city", data.city);
    setValue("study", data.study);
    setValue("married", data.married);
  }, [data]);
  console.log(data);
  const onSubmit = () => {
    console.log("submit clicked");
  };

  return (
    <Container className="mt-4">
      <Card className="p-4 m-4">
        <h5 className="mb-3">Account information</h5>

        {/* Username */}
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            disabled={true}
            type="text"
            placeholder="Your Username"
            {...register("username")}
          />
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            disabled={!wantToEdit}
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
      </Card>

      <Card className="p-4 m-4">
        <h5 className="mb-3">Personal information</h5>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* fullname */}
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              disabled={!wantToEdit}
              {...register("fullName", { required: "Full Name is required" })}
            />
            {errors.fullName && (
              <p className="text-danger">{errors.fullName.message}</p>
            )}
          </Form.Group>

          {/* Father name */}
          <Form.Group className="mb-3">
            <Form.Label>Father Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your father name"
              disabled={!wantToEdit}
              {...register("fatherName", {
                required: "Father name is required",
              })}
            />
            {errors.fatherName && (
              <p className="text-danger">{errors.fatherName.message}</p>
            )}
          </Form.Group>

          {/* Phone number */}
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="phone"
              placeholder="Enter your phone number"
              disabled={!wantToEdit}
              {...register("phoneNumber", {
                required: "Phone number is required",
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

          {/* Age */}
          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your age"
              disabled={!wantToEdit}
              {...register("age", {
                required: "Age is required",
                min: {
                  value: 18,
                  message: "You must be at least 18 years old",
                },
              })}
            />
            {errors.age && <p className="text-danger">{errors.age.message}</p>}
          </Form.Group>

          {/* Gender */}
          <Form.Group className="mb-3">
            <Form.Label>Gender</Form.Label>
            <Form.Select
              disabled={!wantToEdit}
              {...register("gender", { required: "Gender is required" })}
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="Other">Other</option>
            </Form.Select>
            {errors.gender && (
              <p className="text-danger">{errors.gender.message}</p>
            )}
          </Form.Group>

          {/* Married */}
          <Form.Group className="mb-3">
            <Form.Label>Married</Form.Label>
            <Form.Select
              disabled={!wantToEdit}
              {...register("married", {
                required: "Marital status is required",
              })}
            >
              <option value="">Select marital status</option>
              <option value="yes">Yes</option>
              <option value="No">No</option>
            </Form.Select>
            {errors.married && (
              <p className="text-danger">{errors.married.message}</p>
            )}
          </Form.Group>

          {/* City */}
          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              disabled={!wantToEdit}
              placeholder="Enter your city"
              {...register("city", { required: "City is required" })}
            />
            {errors.city && (
              <p className="text-danger">{errors.city.message}</p>
            )}
          </Form.Group>

          {/* Address */}
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full address"
              disabled={!wantToEdit}
              {...register("address", {
                required: "Full address is required",
              })}
            />
            {errors.address && (
              <p className="text-danger">{errors.address.message}</p>
            )}
          </Form.Group>

          <div className="text-end">
            <Button
              variant="success"
              onClick={() => setWantToEdit(true)}
              disabled={wantToEdit}
              className="me-2"
            >
              Edit details
            </Button>
            <Button disabled={!wantToEdit} variant="primary" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </Card>

      <Card className="p-4 m-4">
        <h5 className="mb-3">Career Information</h5>

        {/* Occupation */}
        <Form.Group className="mb-3">
          <Form.Label>Occupation</Form.Label>
          <Form.Control
            type="text"
            disabled={!wantToEdit}
            placeholder="Enter your occupation"
            {...register("occupation", {
              required: "Occupation is required",
            })}
          />
          {errors.occupation && (
            <p className="text-danger">{errors.occupation.message}</p>
          )}
        </Form.Group>

        {/* Study */}
        <Form.Group className="mb-3">
          <Form.Label>Study</Form.Label>
          <Form.Control
            type="text"
            disabled={!wantToEdit}
            placeholder="Enter your field of study"
            {...register("study", { required: "Study field is required" })}
          />
          {errors.study && (
            <p className="text-danger">{errors.study.message}</p>
          )}
        </Form.Group>

        {/* Salary per month */}
        <Form.Group className="mb-3">
          <Form.Label>Salary per month</Form.Label>
          <Form.Control
            type="number"
            disabled={!wantToEdit}
            placeholder="Enter your monthly salary"
            {...register("salary", { required: "Salary field is required" })}
          />
          {errors.salary && (
            <p className="text-danger">{errors.salary.message}</p>
          )}
        </Form.Group>
      </Card>

      <Card className=" p-4 m-4">
        <h5 className="mb-3">Security</h5>

        {/* Update Password */}
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />
          </Form.Group>
          <h6>Update Password</h6>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="currentPassword">
                <Form.Label>Current Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter current password"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="newPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter new password"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Notification Preferences */}
          <h6>Notification Preferences</h6>
          <Form.Group className="mb-3" controlId="emailNotifications">
            <Form.Check
              type="switch"
              label="Receive email notifications"
              defaultChecked
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="smsNotifications">
            <Form.Check type="switch" label="Receive SMS notifications" />
          </Form.Group>

          {/* Privacy Settings */}
          <h6>Privacy Settings</h6>
          <Form.Group className="mb-3" controlId="privacySettings">
            <Form.Check type="checkbox" label="Make my profile private" />
          </Form.Group>

          {/* Save Settings Button */}
          <div className="text-end">
            <Button variant="success">Save Changes</Button>
          </div>
        </Form>
      </Card>

      <Card className="p-4 m-4">
        <h5 className="mb-3">Theme Settings</h5>
        <ThemeToggler
          labelLeft="Light"
          labelRight="Dark"
          onChange={toggleTheme}
        />
      </Card>
    </Container>
  );
};
