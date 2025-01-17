import { Form } from "react-bootstrap";
import { LanguageForm } from ".";
import { ConfirmPassword } from "./ConfirmPasswordForm";

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
        <ConfirmPassword errors={errors} register={register} watch={watch} />
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
