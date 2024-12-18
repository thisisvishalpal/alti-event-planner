import { Card, Form } from "react-bootstrap";

export const UsernameEmailForm = ({ errors, wantToEdit, register }) => {
  return (
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
          disabled={true}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
      </Form.Group>
    </Card>
  );
};
