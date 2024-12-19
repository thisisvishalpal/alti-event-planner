import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Card } from "react-bootstrap";

import { useProfile } from "Hooks";
import { ActionButton, ProfileTabs, UserInfo } from "Components";
import { fetchOtherProfile } from "Slices";

export const Profile = () => {
  const [youFollowThem, setYouFollowThem] = useState(false);
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
      <Card className="shadow-sm p-3 m-2 mt-3" style={{ minHeight: "25vh" }}>
        <UserInfo
          user={isAccessingSelfProfile ? userInfoData : otherProfileData}
          loading={
            isAccessingSelfProfile ? userInfoLoading : otherProfileLoading
          }
          error={isAccessingSelfProfile ? userInfoError : otherProfileError}
        />
        <ActionButton
          following={youFollowThem}
          toggleFollowing={() => setYouFollowThem((prev) => !prev)}
        />
      </Card>

      <ProfileTabs
        following={youFollowThem}
        isAccessingSelfProfile={isAccessingSelfProfile}
      />
    </Container>
  );
};
