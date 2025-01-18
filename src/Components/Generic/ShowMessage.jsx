import React from "react";
import { Container, Card } from "react-bootstrap";

export const ShowMessage = ({ heading, secondary }) => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "20vh" }}
    >
      <Card className="text-center p-4" style={{ maxWidth: "400px" }}>
        <h5>{heading}</h5>
        {secondary && <p>{secondary}</p>}
      </Card>
    </Container>
  );
};
