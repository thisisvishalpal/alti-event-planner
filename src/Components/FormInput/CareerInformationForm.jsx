import { Form } from "react-bootstrap";

export const CareerInformationForm = ({
  errors,
  wantToEdit,
  register,
  watch,
}) => {
  const occupation = watch("occupation");

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
          <option value="">Select occupation</option>
          <option value="private">Private</option>
          <option value="government">Government</option>
          <option value="business">Business</option>
          <option value="other">Other</option>
          <option value="none">None</option>
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
          <option value="">Select study</option>
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
      {occupation !== "none" && (
        <Form.Group className="mb-3">
          <Form.Label>Salary per month</Form.Label>
          <Form.Select
            disabled={!wantToEdit}
            {...register("salary", { required: "Salary is required" })}
          >
            <option value="">Select salary</option>
            <option value="0to10000">0 to 10,000</option>
            <option value="10000to25000">10,000 to 25,000</option>
            <option value="25000to50000">25,000 to 50,000</option>
            <option value="50000to100000">50,000 to 1 Lac</option>
            <option value="100000to200000">1 Lac to 2 Lac</option>
            <option value="200000to500000">2 Lac to 5 Lac</option>
          </Form.Select>
          {errors.salary && (
            <p className="text-danger">{errors.salary.message}</p>
          )}
        </Form.Group>
      )}
    </>
  );
};
