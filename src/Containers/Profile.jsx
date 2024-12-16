import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";

import { useProfile } from "Hooks";
import { UserInfo, UserPosts } from "Components";
import { fetchOtherProfile } from "Slices";

export const Profile = () => {
  const dispatch = useDispatch();
  const { isAccessingSelfProfile } = useProfile();
  const { username: usernameParam } = useParams();

  const {
    data: userInfoData,
    error: userInfoError,
    loading: userInfoLoading,
  } = useSelector(({ userInfo }) => userInfo);

  const {
    data: otherProfileData,
    error: otherProfileError,
    loading: otherProfileLoading,
  } = useSelector(({ otherProfile }) => otherProfile);

  useEffect(() => {
    if (!isAccessingSelfProfile) {
      dispatch(fetchOtherProfile(usernameParam));
    }
  }, [usernameParam]);

  return (
    <Container>
      <UserInfo
        user={isAccessingSelfProfile ? userInfoData : otherProfileData}
        loading={isAccessingSelfProfile ? userInfoLoading : otherProfileLoading}
        error={isAccessingSelfProfile ? userInfoError : otherProfileError}
      />
      {/* <UserPosts
        posts={
          isAccessingSelfProfile ? userInfoData?.posts : otherProfileData?.posts
        }
        loading={isAccessingSelfProfile ? userInfoLoading : otherProfileLoading}
      /> */}
    </Container>
  );
};
