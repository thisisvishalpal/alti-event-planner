import { Form, InputGroup } from "react-bootstrap";

export const SearchBar = ({ heading, handleChange, value, placeholder }) => {
  return (
    <>
      <h3>{heading}</h3>
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
