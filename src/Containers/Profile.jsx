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
import { fetchOtherProfile, mutateFollowThem } from "Slices";

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    if (!isAccessingSelfProfile) {
      dispatch(fetchOtherProfile(usernameParam));
    }
  }, [usernameParam, dispatch, isAccessingSelfProfile]);

  const handleFollowThem = () => {
    dispatch(mutateFollowThem({ userIdToFollow: otherProfileData._id }));
  };

  const finalData = isAccessingSelfProfile ? userInfoData : otherProfileData;
  const isLoading = userInfoLoading || otherProfileLoading;
  const isError = userInfoError || otherProfileError;

  const youFollowThem = otherProfileData.email ? true : false;

  return (
    <Container>
      {isError && (
        <Alert variant="danger" className="text-center">
          An error occurred while loading the Profile. Please try again.
        </Alert>
      )}
      {isLoading && <SpinnerTwo />}

      {!isError && !isLoading && (
        <>
          <Card
            className="shadow-sm p-3 m-2 mt-3"
            style={{ minHeight: "25vh" }}
          >
            <ProfileUsername user={finalData} />
            <ActionButton
              following={youFollowThem}
              toggleFollowing={handleFollowThem}
            />
          </Card>

          <ProfileTabs following={youFollowThem} />
        </>
      )}
    </Container>
  );
};
