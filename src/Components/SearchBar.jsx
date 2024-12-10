import { Form, InputGroup } from "react-bootstrap";

export const SearchBar = ({ heading, handleChange, value, placeholder }) => {
  return (
    <>
      <h5>{heading}</h5>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </InputGroup>
    </>
  );
};
