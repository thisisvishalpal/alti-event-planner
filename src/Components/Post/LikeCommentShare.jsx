import { FaThumbsUp, FaCommentAlt, FaShare } from "react-icons/fa";
import { Button, Row, Col } from "react-bootstrap";
import { useTheme } from "Theme";

export const LikeCommentShare = ({
  handleLike,
  handleUnlike,
  openModal = () => {},
  post = {},
}) => {
  const { theme } = useTheme();

  const allButtons = [
    {
      label: post.isLiked ? "Liked" : "Like",
      icon: <FaThumbsUp />,
      action: () => (post.isLiked ? handleUnlike(post) : handleLike(post)),
      count: post.likes,
    },
    {
      label: "Comment",
      icon: <FaCommentAlt />,
      action: () => openModal(post),
    },
    {
      label: "Share",
      icon: <FaShare />,
      action: () => openModal(post),
    },
  ];

  return (
    <Row className="justify-content-around text-center pt-3">
      {allButtons.map(({ label, icon, action, count }, idx) => (
        <Col xs={4} key={idx}>
          <Button
            variant={theme === "light" ? "light" : "dark"}
            className={`w-100 d-flex align-items-center justify-content-center ${
              label === "Liked" ? "text-primary" : ""
            }`}
            onClick={action}
          >
            {icon}
            <span className="ms-2">
              {label} {count > 0 && `(${count})`}
            </span>
          </Button>
        </Col>
      ))}
    </Row>
  );
};
