import { Form } from "react-bootstrap";

export const LanguageForm = ({ errors, wantToEdit = false, register }) => (
  <Form.Group className="mb-3">
    <Form.Label>Language</Form.Label>
    <Form.Select
      disabled={!wantToEdit}
      {...register("language", { required: "Language is required" })}
    >
      <option value="">Select your language</option>
      <option value="english">English</option>
      <option value="hindi">हिन्दी</option>
    </Form.Select>
    {errors.language && (
      <p className="text-danger">{errors.language.message}</p>
    )}
  </Form.Group>
);
