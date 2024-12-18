import { Form } from "react-bootstrap";

export const UsernameEmailForm = ({ errors, wantToEdit = false, register }) => {
  return (
    <>
      <h5 className="mb-3">Account information</h5>

      {/* Username */}
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          disabled={!wantToEdit}
          type="text"
          placeholder="Your Username"
          {...register("username", {
            required: "Username is required",
          })}
        />
        {errors.username && (
          <p className="text-danger">{errors.username.message}</p>
        )}
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
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
      </Form.Group>
    </>
  );
};
