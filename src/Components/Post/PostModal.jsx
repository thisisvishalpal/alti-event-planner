import React, { useMemo } from "react";
import { useModal } from "Context";
import { Row, Col } from "react-bootstrap";
import {
  LikeCommentShare,
  PostContent,
  PostHeader,
  AllComments,
  NewComments,
} from "Components";
import { useSelector } from "react-redux";

export const PostModal = () => {
  const { data } = useSelector(({ userFeeds }) => userFeeds);
  const { isModalOpen, modalData, closeModal } = useModal();

  const finalPost = useMemo(() => {
    return data.find((post) => post._id === modalData);
  }, [data, modalData]);

  const commentRef = React.useRef(null);

  if (!isModalOpen || !modalData || !finalPost || !data) return null;

  const { author, createdAt, image, content, comments, _id, isLiked, likes } =
    finalPost;

  const handleComment = () => commentRef.current.focus();
  const handleShare = () => console.log("share clicked");

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={closeModal}>
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
            <LikeCommentShare
              handleComment={handleComment}
              handleShare={handleShare}
              isLiked={isLiked}
              likes={likes}
              postId={_id}
            />
          </Col>
          <Col md={3} sm={12}>
            <h5>{content}</h5>
            <AllComments comments={comments} />
            <NewComments
              commentRef={commentRef}
              addComment={() => console.log("comment clicked")}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};
