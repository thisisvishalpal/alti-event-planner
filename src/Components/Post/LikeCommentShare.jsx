import { useState } from "react";
import { FaThumbsUp, FaCommentAlt, FaShare } from "react-icons/fa";
import { Button, Row, Col } from "react-bootstrap";
import { useTheme } from "Theme";

export const LikeCommentShare = ({ openModal = () => {}, post = {} }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const { theme } = useTheme();

  const handleLike = () => {
    setLiked((prevLiked) => !prevLiked);
    setLikes((prevLikes) => (liked ? prevLikes - 1 : prevLikes + 1));
  };

  const allButtons = [
    {
      label: liked ? "Liked" : "Like",
      icon: <FaThumbsUp />,
      action: handleLike,
      count: likes,
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
