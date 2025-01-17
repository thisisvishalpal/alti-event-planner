import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Tabs, Tab, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { useProfile } from "Hooks";
import {
  AreYouFollowing,
  CareerInformationForm,
  PersonalInfoForm,
  SpinnerTwo,
  UserPosts,
} from "Components";

export const ProfileTabs = ({ following }) => {
  const { register, setValue, watch } = useForm();
  const [activeTab, setActiveTab] = useState("information");
  const { isAccessingSelfProfile } = useProfile();

  const { data: userInfoData, loading: userInfoLoading } = useSelector(
    ({ userInfo }) => userInfo
  );

  const { data: otherProfileData, loading: otherProfileLoading } = useSelector(
    ({ otherProfile }) => otherProfile
  );

  const finalData = isAccessingSelfProfile ? userInfoData : otherProfileData;
  const finalPost = isAccessingSelfProfile
    ? userInfoData?.posts
    : otherProfileData?.posts;
  const finalLoading = isAccessingSelfProfile
    ? userInfoLoading
    : otherProfileLoading;

  useEffect(() => {
    if (finalData) {
      Object.keys(finalData).forEach((key) => {
        setValue(key, finalData[key]);
      });
    }
  }, [finalData, setValue]);

  const renderComponent = (compo) => {
    if (finalLoading) {
      return <SpinnerTwo />;
    }

    return following || isAccessingSelfProfile ? compo : <AreYouFollowing />;
  };

  const tabs = [
    {
      eventKey: "posts",
      title: "Posts",
      component: <UserPosts posts={finalPost} />,
    },
    {
      eventKey: "information",
      title: "Information",
      component: (
        <Card className="p-4 m-2 mb-4">
          <PersonalInfoForm errors={{}} register={register} />
        </Card>
      ),
    },
    {
      eventKey: "career",
      title: "Career",
      component: (
        <Card className="p-4 m-2">
          <CareerInformationForm
            errors={{}}
            register={register}
            watch={watch}
          />
        </Card>
      ),
    },
  ];

  return (
    <Tabs
      activeKey={activeTab}
      onSelect={setActiveTab}
      className="mb-3"
      justify
    >
      {tabs.map((tab) => (
        <Tab key={tab.eventKey} eventKey={tab.eventKey} title={tab.title}>
          {renderComponent(tab.component)}
        </Tab>
      ))}
    </Tabs>
  );
};
