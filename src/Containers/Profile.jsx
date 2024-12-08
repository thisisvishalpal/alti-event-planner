import { UserPosts } from "Components/UserPosts";
import React from "react";

import { useSelector } from "react-redux";
import { UserInfo } from "Components";

export const Profile = () => {
  const { data, error, loading } = useSelector(({ userInfo }) => userInfo);

  return (
    <div className="container mt-5">
      <UserInfo user={data} loading={loading} />
      <UserPosts posts={data?.posts} loading={loading} />
    </div>
  );
};
