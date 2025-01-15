import React from "react";
import { Row, Col, Form, InputGroup } from "react-bootstrap";
import { LikeCommentShare, PostContent, PostHeader } from "Components/Feeds";

const AllComments = ({ comments }) => {
  return (
    <>
      {/* <h6>Comments</h6> */}
      <div className="comments-section mb-3">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="mb-2">
              <strong>{comment.userName}</strong>
              <p className="mb-1">{comment.text}</p>
              <small className="text-muted">{comment.date}</small>
            </div>
          ))
        ) : (
          <p className="text-muted">
            Be the first one to comment on this post.
          </p>
        )}
      </div>
    </>
  );
};
const NewComments = ({ addComment }) => {
  return (
    <Form onSubmit={addComment}>
      <InputGroup className="mb-3" size="sm">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">post</InputGroup.Text>
      </InputGroup>
    </Form>
  );
};

export const PostModal = ({
  handleCloseModal,
  handleLike = () => {},
  author,
  createdAt,
  image,
  content,
  likes,
  comments,
}) => {
  const addComment = () => {
    console.log("comment created");
  };

  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={handleCloseModal}>
          &times;
        </button>

        <Row>
          <Col md={9} sm={12}>
            <PostHeader date={createdAt} {...author} />
            <PostContent
              post={{ content, image }}
              modal={true}
              className="mb-2"
            />
            <LikeCommentShare />
          </Col>
          <Col md={3} sm={12}>
            <p>{content}</p>
            <AllComments comments={comments} />
            <NewComments addComment={addComment} />
          </Col>
        </Row>
      </div>
    </div>
  );
};
