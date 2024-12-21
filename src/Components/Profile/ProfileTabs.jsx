import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Tabs, Tab, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { useProfile } from "Hooks";
import {
  AreYouFollowing,
  CareerInformationForm,
  PersonalInfoForm,
  UserPosts,
} from "Components";
import { fetchOtherProfile } from "Slices";

export const ProfileTabs = ({ following }) => {
  const { register, setValue, watch } = useForm();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("information");
  const { isAccessingSelfProfile } = useProfile();
  const { username: usernameParam } = useParams();

  const {
    data: userInfoData,
    // error: userInfoError,
    loading: userInfoLoading,
  } = useSelector(({ userInfo }) => userInfo);

  const {
    data: otherProfileData,
    // error: otherProfileError,
    loading: otherProfileLoading,
  } = useSelector(({ otherProfile }) => otherProfile);

  useEffect(() => {
    if (!isAccessingSelfProfile) {
      dispatch(fetchOtherProfile(usernameParam));
    }
  }, [usernameParam, dispatch, isAccessingSelfProfile]);

  const finalData = isAccessingSelfProfile ? userInfoData : otherProfileData;
  useEffect(() => {
    if (finalData) {
      Object.keys(finalData).forEach((key) => {
        setValue(key, finalData[key]);
      });
    }
  }, [finalData, setValue]);
  const wantToEdit = false;

  return (
    <Tabs
      activeKey={activeTab}
      onSelect={setActiveTab}
      className="mb-3"
      justify
    >
      <Tab eventKey="posts" title="Posts">
        {following || isAccessingSelfProfile ? (
          <UserPosts
            posts={
              isAccessingSelfProfile
                ? userInfoData?.posts
                : otherProfileData?.posts
            }
            loading={
              isAccessingSelfProfile ? userInfoLoading : otherProfileLoading
            }
          />
        ) : (
          <AreYouFollowing />
        )}
      </Tab>
      <Tab eventKey="information" title="Information">
        {following || isAccessingSelfProfile ? (
          <Card className="p-4 m-4">
            <PersonalInfoForm
              errors={{}}
              wantToEdit={wantToEdit}
              register={register}
            />
          </Card>
        ) : (
          <AreYouFollowing />
        )}
      </Tab>

      <Tab eventKey="career" title="Career">
        {following || isAccessingSelfProfile ? (
          <Card className="p-4 m-4">
            <CareerInformationForm
              errors={{}}
              wantToEdit={wantToEdit}
              register={register}
              watch={watch}
            />
          </Card>
        ) : (
          <AreYouFollowing />
        )}
      </Tab>
    </Tabs>
  );
};
