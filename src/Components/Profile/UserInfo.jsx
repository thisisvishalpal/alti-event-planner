import React from "react";
import { Card, Alert } from "react-bootstrap";

import { SpinnerTwo, ProfileUsername } from "Components";

export const UserInfo = ({ user = {}, loading, error }) => {
  if (loading) {
    return (
      <Card className="shadow-sm p-3 m-2 mt-3" style={{ minHeight: "25vh" }}>
        <SpinnerTwo />
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="shadow-sm p-3 m-2 mt-3" style={{ minHeight: "25vh" }}>
        <Alert variant="danger">{error}</Alert>
      </Card>
    );
  }

  return (
    <ProfileUsername
      profilePicture={user.profilePicture}
      fullName={user.fullName}
      posts={user.posts}
      followers={user.followers}
      following={user.following}
      bio={user.bio}
    />
  );
};
