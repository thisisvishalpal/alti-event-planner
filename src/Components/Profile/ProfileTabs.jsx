import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Tabs, Tab, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { useProfile } from "Hooks";
import {
  AreYouFollowing,
  CareerInformationForm,
  PersonalInfoForm,
  UserPosts,
} from "Components";

export const ProfileTabs = ({ following }) => {
  const { register, setValue, watch } = useForm();
  const [activeTab, setActiveTab] = useState("information");
  const { isAccessingSelfProfile } = useProfile();

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
