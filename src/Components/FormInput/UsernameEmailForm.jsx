import { Form } from "react-bootstrap";
import { LanguageForm } from ".";

export const UsernameEmailForm = ({
  showHeading = true,
  errors,
  wantToEdit = false,
  register,
  watch,
  showNewPassword = true,
  showLanguage = true,
}) => {
  return (
    <>
      {showHeading && <h5 className="mb-3">Account information</h5>}

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
        {!wantToEdit && (
          <Form.Text>Please contact support to update !</Form.Text>
        )}
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
        {!wantToEdit && (
          <Form.Text>Please contact to support to update !</Form.Text>
        )}
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
      </Form.Group>

      {showNewPassword && (
        <>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-danger">{errors.confirmPassword.message}</p>
            )}
          </Form.Group>
        </>
      )}
      {showLanguage && (
        <LanguageForm
          errors={errors}
          wantToEdit={wantToEdit}
          register={register}
        />
      )}
    </>
  );
};
