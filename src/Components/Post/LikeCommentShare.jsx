import { useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { FaThumbsUp, FaCommentAlt, FaShare } from "react-icons/fa";
import { Button, Row, Col } from "react-bootstrap";
import { useTheme } from "Theme";
import { mutateLikePost, mutateUnlikePost } from "Slices";

export const LikeCommentShare = ({
  handleComment,
  handleShare,
  isLiked,
  likes,
  postId,
}) => {
  const dispatch = useDispatch();

  const handleToggleLike = useCallback(() => {
    if (isLiked) dispatch(mutateUnlikePost({ postId }));
    else dispatch(mutateLikePost({ postId }));
  }, [isLiked, dispatch, postId]);

  const { theme } = useTheme();

  const allButtons = [
    {
      label: isLiked ? "Liked" : "Like",
      icon: <FaThumbsUp />,
      action: handleToggleLike,
      count: likes,
    },
    {
      label: "Comment",
      icon: <FaCommentAlt />,
      action: handleComment,
    },
    {
      label: "Share",
      icon: <FaShare />,
      action: handleShare,
    },
  ];

  return (
    <Row className="justify-content-around text-center mt-2">
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

LikeCommentShare.propTypes = {
  handleComment: PropTypes.func.isRequired,
  handleShare: PropTypes.func.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  postId: PropTypes.string.isRequired,
};
