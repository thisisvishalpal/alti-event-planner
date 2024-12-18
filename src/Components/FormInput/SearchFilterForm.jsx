import { Form } from "react-bootstrap";

export const SearchFilterForm = ({ errors, wantToEdit, register }) => {
  return (
    <>
      <h5 className="mb-3">Basic Preference</h5>
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
            max: {
              value: 99,
              message: "Age cannot be more than 99 years",
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
          <option value="other">Other</option>
        </Form.Select>
        {errors.gender && (
          <p className="text-danger">{errors.gender.message}</p>
        )}
      </Form.Group>
      {/* City */}
      <Form.Group className="mb-3">
        <Form.Label>City</Form.Label>

        <Form.Select
          disabled={!wantToEdit}
          {...register("city", { required: "City is required" })}
        >
          <option value="">Select your city</option>
          <option value="gwalior">Gwalior</option>
          <option value="bhopal">Bhopal</option>
          <option value="indore">Indore</option>
          <option value="morena">Morena</option>
          <option value="dabra">Dabra</option>
        </Form.Select>
        {errors.city && <p className="text-danger">{errors.city.message}</p>}
      </Form.Group>
    </>
  );
};
