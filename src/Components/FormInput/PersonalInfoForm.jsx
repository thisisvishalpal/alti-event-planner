import { Card, Form } from "react-bootstrap";

export const PersonalInfoForm = ({ errors, wantToEdit, register }) => {
  return (
    <Card className="p-4 m-4">
      <h5 className="mb-3">Personal information</h5>
      {/* fullname */}
      <Form.Group className="mb-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your full name"
          disabled={!wantToEdit}
          {...register("fullName", { required: "Full Name is required" })}
        />
        {errors.fullName && (
          <p className="text-danger">{errors.fullName.message}</p>
        )}
      </Form.Group>

      {/* Father name */}
      <Form.Group className="mb-3">
        <Form.Label>Father Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your father name"
          disabled={!wantToEdit}
          {...register("fatherName", {
            required: "Father name is required",
          })}
        />
        {errors.fatherName && (
          <p className="text-danger">{errors.fatherName.message}</p>
        )}
      </Form.Group>

      {/* Phone number */}
      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="phone"
          placeholder="Enter your phone number"
          disabled={!wantToEdit}
          {...register("phoneNumber", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Phone Number must be 10 digits",
            },
          })}
        />
        {errors.phoneNumber && (
          <p className="text-danger">{errors.phoneNumber.message}</p>
        )}
      </Form.Group>

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
          <option value="Other">Other</option>
        </Form.Select>
        {errors.gender && (
          <p className="text-danger">{errors.gender.message}</p>
        )}
      </Form.Group>

      {/* Married */}
      <Form.Group className="mb-3">
        <Form.Label>Married</Form.Label>
        <Form.Select
          disabled={!wantToEdit}
          {...register("married", {
            required: "Marital status is required",
          })}
        >
          <option value="">Select marital status</option>
          <option value="yes">Yes</option>
          <option value="No">No</option>
        </Form.Select>
        {errors.married && (
          <p className="text-danger">{errors.married.message}</p>
        )}
      </Form.Group>

      {/* City */}
      <Form.Group className="mb-3">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          disabled={!wantToEdit}
          placeholder="Enter your city"
          {...register("city", { required: "City is required" })}
        />
        {errors.city && <p className="text-danger">{errors.city.message}</p>}
      </Form.Group>

      {/* Address */}
      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your full address"
          disabled={!wantToEdit}
          {...register("address", {
            required: "Full address is required",
          })}
        />
        {errors.address && (
          <p className="text-danger">{errors.address.message}</p>
        )}
      </Form.Group>
    </Card>
  );
};
