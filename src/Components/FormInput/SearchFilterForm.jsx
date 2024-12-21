import { Form } from "react-bootstrap";

export const SearchFilterForm = ({ errors, wantToEdit, register }) => {
  return (
    <>
      <h5 className="mb-3">Basic Preference</h5>
      {/* Age */}
      <Form.Group className="mb-3">
        <Form.Label>From age to</Form.Label>
        <Form.Select
          disabled={!wantToEdit}
          {...register("age", { required: "Age is required" })}
        >
          <option value="">Select your prefered age</option>
          <option value="21-25">21 - 25</option>
          <option value="26-30">26 - 30</option>
          <option value="31-35">31 - 35</option>
          <option value="36-40">36 - 40</option>
          <option value="41-45">41 - 45</option>
          <option value="46-50">46 - 50</option>
        </Form.Select>
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
