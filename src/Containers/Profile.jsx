import React, { useEffect } from "react";
import { HttpStatusCode } from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { UserInfo, UserPosts } from "Components";
import {
  fetchOtherProfile,
  fetchOtherProfileSuccess,
  fetchOtherProfileFailure,
} from "Slices";
import { axiosInstance } from "Services";

export const Profile = () => {
  const { data, error, loading } = useSelector(({ userInfo }) => userInfo);
  const {
    data: profileData,
    error: profileError,
    loading: profileLoading,
  } = useSelector(({ otherProfile }) => otherProfile);

  const { username } = useParams();
  const dispatch = useDispatch();

  // console.log(username, "username from profile");
  const mainLogic = data?.username !== username;
  useEffect(() => {
    if (mainLogic) {
      console.log("yes control is coming here");
      dispatch(fetchOtherProfile());
      axiosInstance
        .get("http://localhost:8000/user/username", {
          params: {
            username: username,
          },
        })
        .then(({ data }) => {
          if (data.status === HttpStatusCode?.Ok)
            dispatch(fetchOtherProfileSuccess(data.data));
          // console.log(data);
        })
        .catch(({ message }) => {
          dispatch(fetchOtherProfileFailure(message));
          // console.log(message);
        });
    }
  }, [username]);

  return (
    <div className="container">
      <UserInfo
        user={mainLogic ? profileData : data}
        loading={mainLogic ? profileLoading : loading}
      />
      <UserPosts
        posts={mainLogic ? profileData?.posts : data?.posts}
        loading={mainLogic ? profileLoading : loading}
      />
    </div>
  );
};
