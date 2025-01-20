import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Container, Card, Alert } from "react-bootstrap";

import { useProfile } from "Hooks";
import {
  ActionButton,
  ProfileTabs,
  ProfileUsername,
  SpinnerTwo,
} from "Components";
import {
  fetchOtherProfile,
  mutateFollowThem,
  mutateRemoveFollower,
  mutateUnfollowThem,
} from "Slices";

export const Profile = () => {
  const dispatch = useDispatch();
  const { isAccessingSelfProfile } = useProfile();
  const { username: usernameParam } = useParams();

  const {
    data: userInfoData,
    error: userInfoError,
    loading: userInfoLoading,
  } = useSelector(({ userInfo }) => userInfo, shallowEqual);

  const {
    data: otherProfileData,
    error: otherProfileError,
    loading: otherProfileLoading,
  } = useSelector(({ otherProfile }) => otherProfile, shallowEqual);

  const youFollowThem = otherProfileData.email ? true : false;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    if (!isAccessingSelfProfile) {
      dispatch(fetchOtherProfile(usernameParam));
    }
  }, [usernameParam, dispatch, isAccessingSelfProfile]);

  const handleFollowThem = () => {
    youFollowThem
      ? dispatch(mutateUnfollowThem({ userIdToUnfollow: otherProfileData._id }))
      : dispatch(mutateFollowThem({ userIdToFollow: otherProfileData._id }));
  };

  const removeFollower = () => {
    dispatch(mutateRemoveFollower({ followerId: otherProfileData._id }));
  };

  const finalData = isAccessingSelfProfile ? userInfoData : otherProfileData;
  const isLoading = userInfoLoading || otherProfileLoading;
  const isError = userInfoError || otherProfileError;

  const shareData = {
    title: "Check this out!",
    text: "I found something interesting to share with you.",
    url: `https://alti-event-planner.vercel.app/${usernameParam}`,
  };

  return (
    <Container>
      {isError && (
        <Alert variant="danger" className=" mt-3 text-center">
          {isError}
        </Alert>
      )}
      {isLoading && <SpinnerTwo />}

      {!isError && !isLoading && (
        <>
          <Card
            className="shadow-sm p-3 m-2 mt-3"
            style={{ minHeight: "25vh" }}
          >
            <ProfileUsername
              following={youFollowThem}
              followsYou={otherProfileData.followsYou}
              user={finalData}
            />
            <ActionButton
              following={youFollowThem}
              followsYou={otherProfileData.followsYou}
              toggleFollowing={handleFollowThem}
              handleRemoveFollower={removeFollower}
              shareData={shareData}
            />
          </Card>

          <ProfileTabs following={youFollowThem} />
        </>
      )}
    </Container>
  );
};
