import { Form } from "react-bootstrap";

export const CareerInformationForm = ({ errors, wantToEdit, register }) => {
  return (
    <>
      <h5 className="mb-3">Career Information</h5>

      {/* Occupation */}
      <Form.Group className="mb-3">
        <Form.Label>Occupation</Form.Label>
        <Form.Select
          disabled={!wantToEdit}
          {...register("occupation", { required: "Occupation is required" })}
        >
          <option value="">Select your occupation</option>
          <option value="private">Private</option>
          <option value="government">Government</option>
          <option value="business">Business</option>
          <option value="nothing">Nothing</option>
          <option value="other">Other</option>
        </Form.Select>

        {errors.occupation && (
          <p className="text-danger">{errors.occupation.message}</p>
        )}
      </Form.Group>

      {/* Study */}
      <Form.Group className="mb-3">
        <Form.Label>Study</Form.Label>
        <Form.Select
          disabled={!wantToEdit}
          {...register("study", { required: "Study is required" })}
        >
          <option value="">Select your study</option>
          <option value="5">5th</option>
          <option value="8">8th</option>
          <option value="10">10th</option>
          <option value="12">12th</option>
          <option value="diploma">Diploma</option>
          <option value="graduation">Graduation</option>
          <option value="postgraduation">Post Graduation</option>
          <option value="phd">PHD</option>
        </Form.Select>
        {errors.study && <p className="text-danger">{errors.study.message}</p>}
      </Form.Group>

      {/* Salary per month */}
      <Form.Group className="mb-3">
        <Form.Label>Salary per month</Form.Label>
        <Form.Control
          type="number"
          disabled={!wantToEdit}
          placeholder="Enter your monthly salary"
          {...register("salary", {
            required: "Salary field is required",
            min: {
              value: 0,
              message: "Salary must be more than 0",
            },
            max: {
              value: 1000000,
              message: "Salary cannot be more than 10 lacs",
            },
          })}
        />
        {errors.salary && (
          <p className="text-danger">{errors.salary.message}</p>
        )}
      </Form.Group>
    </>
  );
};
