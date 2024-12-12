import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { UserInfo, UserPosts } from "Components";
import { fetchOtherProfile, fetchUserInfo } from "Slices";

export const Profile = () => {
  const dispatch = useDispatch();
  const { username: usernameParam } = useParams();
  const { username } = useSelector(({ userAuth }) => userAuth);

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

  const isAccessingSelfProfile = usernameParam
    ? username === usernameParam
    : username;

  useEffect(() => {
    if (isAccessingSelfProfile) {
      dispatch(fetchUserInfo());
    } else {
      dispatch(fetchOtherProfile(usernameParam));
    }
  }, [usernameParam]);

  return (
    <div className="container">
      <UserInfo
        user={isAccessingSelfProfile ? userInfoData : otherProfileData}
        loading={isAccessingSelfProfile ? userInfoLoading : otherProfileLoading}
      />
      {/* <UserPosts
        posts={
          isAccessingSelfProfile ? userInfoData?.posts : otherProfileData?.posts
        }
        loading={isAccessingSelfProfile ? userInfoLoading : otherProfileLoading}
      /> */}
    </div>
  );
};
