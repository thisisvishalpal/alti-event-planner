import React, { useEffect } from "react";
import axios, { HttpStatusCode } from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { UserInfo, UserPosts } from "Components";
import { checkUsernameParam } from "Utils";
import {
  fetchUserInfo,
  fetchUserInfoFailure,
  fetchUserInfoSuccess,
} from "Slices";

export const Profile = () => {
  const { data, error, loading } = useSelector(({ userInfo }) => userInfo);
  const { username } = useParams();
  const dispatch = useDispatch();

  // console.log(username, "profile");
  useEffect(() => {
    if (!checkUsernameParam(username)) {
      dispatch(fetchUserInfo());
      axios
        .get("http://localhost:8000/user/username", {
          params: {
            username: username,
          },
        })
        .then(({ data }) => {
          if (data.status === HttpStatusCode?.Ok)
            dispatch(fetchUserInfoSuccess(data.data));
          // console.log(data);
        })
        .catch(({ message }) => {
          dispatch(fetchUserInfoFailure(message));
          // console.log(message);
        });
    }
  }, [username]);

  // console.log(username, "from profile component");

  return (
    <div className="container mt-5">
      <UserInfo user={data} loading={loading} />
      <UserPosts posts={data?.posts} loading={loading} />
    </div>
  );
};
