import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Card, Alert } from "react-bootstrap";

import { useProfile } from "Hooks";
import {
  ActionButton,
  ProfileTabs,
  ProfileUsername,
  SpinnerTwo,
} from "Components";
import { fetchOtherProfile, mutateFollowThem } from "Slices";

export const Profile = () => {
  const dispatch = useDispatch();
  const { isAccessingSelfProfile } = useProfile();
  const { username: usernameParam } = useParams();
  const [youFollowThem, setYouFollowThem] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

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
    setYouFollowThem(otherProfileData.followers.includes(userInfoData._id));
  }, [otherProfileData.followers, userInfoData._id]);

  useEffect(() => {
    if (!isAccessingSelfProfile) {
      dispatch(fetchOtherProfile(usernameParam));
    }
  }, [usernameParam, dispatch, isAccessingSelfProfile]);

  const handleFollowThem = async () => {
    dispatch(mutateFollowThem({ userIdToFollow: otherProfileData._id }));
  };

  return (
    <Container>
      {(userInfoError || otherProfileError) && (
        <Alert variant="danger" className="text-center">
          An error occurred while loading the Profile. Please try again.
        </Alert>
      )}
      {(userInfoLoading || otherProfileLoading) && <SpinnerTwo />}

      {!userInfoError &&
        !otherProfileError &&
        !userInfoLoading &&
        !otherProfileLoading && (
          <>
            <Card
              className="shadow-sm p-3 m-2 mt-3"
              style={{ minHeight: "25vh" }}
            >
              <ProfileUsername
                user={isAccessingSelfProfile ? userInfoData : otherProfileData}
              />
              <ActionButton
                following={youFollowThem}
                toggleFollowing={handleFollowThem}
              />
            </Card>

            <ProfileTabs
              following={youFollowThem}
              isAccessingSelfProfile={isAccessingSelfProfile}
            />
          </>
        )}
    </Container>
  );
};
