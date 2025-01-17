import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { ConfirmPassword } from "./ConfirmPasswordForm";

export const SecurityForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const changePassword = () => {};

  return (
    <>
      <h5 className="mb-3">Security</h5>

      {/* Update Password */}
      <Form onSubmit={handleSubmit(changePassword)}>
        <Form.Group className="mb-3">
          <Form.Label>Old Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            {...register("oldPassword", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          {errors.oldPassword && (
            <p className="text-danger">{errors.oldPassword.message}</p>
          )}
        </Form.Group>
        <ConfirmPassword register={register} watch={watch} errors={errors} />
      </Form>
      <Form>
        {/* Notification Preferences */}
        <h6>Notification Preferences</h6>
        <Form.Group className="mb-3" controlId="emailNotifications">
          <Form.Check
            type="switch"
            label="Receive email notifications"
            defaultChecked
            disabled
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="smsNotifications">
          <Form.Check
            type="switch"
            disabled
            label="Receive SMS notifications"
          />
        </Form.Group>

        {/* Privacy Settings */}
        <h6>Privacy Settings</h6>
        <Form.Group className="mb-3" controlId="privacySettings">
          <Form.Check
            disabled
            type="checkbox"
            label="Make my profile private"
          />
        </Form.Group>

        {/* Save Settings Button */}
        <div className="text-end">
          <Button variant="primary">Save Changes</Button>
        </div>
      </Form>
    </>
  );
};
