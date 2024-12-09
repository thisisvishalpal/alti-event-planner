import React, { useState } from "react";
import { Card, Row, Col, Button, Image, Form } from "react-bootstrap";

export const Feed = ({ posts }) => {
  const [likes, setLikes] = useState(posts.map(() => false));
  const [comments, setComments] = useState(posts.map(() => []));

  const handleLike = (index) => {
    setLikes((prev) => prev.map((liked, i) => (i === index ? !liked : liked)));
  };

  const handleAddComment = (index, commentText) => {
    setComments((prev) =>
      prev.map((commentList, i) =>
        i === index ? [...commentList, commentText] : commentList
      )
    );
  };

  return (
    <div className="feeds">
      <Row>
        {posts.map((post, index) => (
          <Col md={6} key={post.id} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                {/* Post Header */}
                <Row className="align-items-center">
                  <Col xs={2}>
                    <Image
                      src={post.user.profilePicture}
                      roundedCircle
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5 className="mb-0">{post.user.name}</h5>
                    <small className="text-muted">{post.date}</small>
                  </Col>
                </Row>

                {/* Post Content */}
                <Card.Text className="mt-3">{post.content}</Card.Text>
                {post.image && (
                  <Image
                    src={post.image}
                    alt="Post"
                    className="img-fluid rounded"
                  />
                )}

                {/* Post Actions */}
                <div className="mt-3 d-flex justify-content-between">
                  <Button
                    variant={likes[index] ? "primary" : "outline-primary"}
                    onClick={() => handleLike(index)}
                  >
                    {likes[index] ? "Liked" : "Like"}
                  </Button>
                  <Button variant="outline-secondary">Share</Button>
                </div>

                {/* Comments Section */}
                <div className="mt-4">
                  <h6>Comments</h6>
                  <ul className="list-unstyled">
                    {comments[index].map((comment, i) => (
                      <li key={i} className="mb-2">
                        <strong>{comment.user}:</strong> {comment.text}
                      </li>
                    ))}
                  </ul>

                  {/* Add Comment Form */}
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const form = e.target;
                      const commentText = form.elements.comment.value.trim();
                      if (commentText) {
                        handleAddComment(index, {
                          user: "You",
                          text: commentText,
                        });
                        form.reset();
                      }
                    }}
                  >
                    <Form.Group controlId={`comment-${index}`}>
                      <Form.Control
                        type="text"
                        placeholder="Add a comment..."
                        name="comment"
                      />
                    </Form.Group>
                  </Form>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
