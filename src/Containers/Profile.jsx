import React from "react";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { UserInfo, UserPosts } from "Components";

export const Profile = () => {
  const { data, error, loading } = useSelector(({ userInfo }) => userInfo);
  const { username } = useParams();
  const dispatch = useDispatch();
  console.log(username, "from profiel component");
  // useEffect(() => {
  //   dispatch(fetchUserInfo());
  //   axios
  //     .get("http://localhost:8000/user/username", {
  //       params: {
  //         username,
  //       },
  //     })
  //     .then(({ status, data }) => {
  //       if (status === Ok) dispatch(fetchUserInfoSuccess(data));
  //       console.log(data);
  //     })
  //     .catch(({ message }) => {
  //       dispatch(fetchUserInfoFailure(message));
  //       console.log(message);
  //     });
  // }, []);

  return (
    <div className="container mt-5">
      <UserInfo user={data} loading={loading} />
      <UserPosts posts={data?.posts} loading={loading} />
    </div>
  );
};
