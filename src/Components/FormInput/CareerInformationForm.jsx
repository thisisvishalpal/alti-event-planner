import { Form, Card } from "react-bootstrap";

export const CareerInformationForm = ({ errors, wantToEdit, register }) => {
  return (
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
        {errors.study && <p className="text-danger">{errors.study.message}</p>}
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
  );
};
