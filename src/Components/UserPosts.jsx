import { Card, Container, Row, Col, Spinner } from "react-bootstrap";

export const UserPosts = ({ posts = [], loading }) => {
  return (
    <Container className="my-posts">
      <h3 className="mb-4">My Posts</h3>
      {loading ? (
        <Spinner />
      ) : (
        <Row>
          {posts.length > 0 ? (
            posts?.map((post) => (
              <Col md={6} lg={4} key={post.id} className="mb-4">
                <Card className="shadow-sm">
                  <Card.Img
                    variant="top"
                    src={post.image}
                    alt="Post visual"
                    className="post-image"
                  />
                  <Card.Body>
                    <Card.Title>{post.user.name}</Card.Title>
                    <Card.Text className="text-muted">{post.content}</Card.Text>
                    <Card.Text className="text-end text-muted">
                      <small>{post.date}</small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <h4>No posts</h4>
          )}
        </Row>
      )}
    </Container>
  );
};
