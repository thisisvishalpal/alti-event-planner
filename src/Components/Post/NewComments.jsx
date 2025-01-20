import { Form, InputGroup } from "react-bootstrap";

export const NewComments = ({ addComment, commentRef }) => {
  return (
    <Form onSubmit={addComment}>
      <InputGroup className="mb-3" size="sm">
        <Form.Control
          ref={commentRef}
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">post</InputGroup.Text>
      </InputGroup>
    </Form>
  );
};
