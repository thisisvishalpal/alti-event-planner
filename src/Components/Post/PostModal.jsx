import React, { useCallback } from "react";
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
import { useProfile } from "Hooks";
import { useLocation } from "react-router-dom";

export const PostModal = () => {
  const { pathname } = useLocation();
  const { isAccessingSelfProfile } = useProfile();
  const { data: userInfoData } = useSelector(({ userInfo }) => userInfo);
  const { data: otherProfileData } = useSelector(
    ({ otherProfile }) => otherProfile
  );
  const finalData = isAccessingSelfProfile
    ? userInfoData.posts
    : otherProfileData.posts;

  const { data } = useSelector(({ userFeeds }) => userFeeds);
  const { isModalOpen, modalData, closeModal } = useModal();

  const feedFilter = useCallback(
    () => data.find(({ _id }) => _id === modalData),
    [data, modalData]
  );
  const postFilter = useCallback(
    () => finalData.find(({ _id }) => _id === modalData),
    [finalData, modalData]
  );
  const finalPost =
    pathname === "/feeds" || pathname === "/" ? feedFilter() : postFilter();

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
            <p>{content}</p>
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
