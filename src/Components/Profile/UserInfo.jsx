import React, { useState, useEffect } from "react";
import { Card, Alert, Collapse } from "react-bootstrap";
import { useForm } from "react-hook-form";

import {
  PersonalInfoForm,
  CareerInformationForm,
  SpinnerTwo,
  ProfileUsername,
} from "Components";

export const UserInfo = ({ user = {}, loading, error }) => {
  const { register, setValue } = useForm();
  const [showCollapse, setShowCollapse] = useState(false);

  useEffect(() => {
    setValue("fullName", user.fullName);
    setValue("fatherName", user.fatherName);
    setValue("username", user.username);
    setValue("email", user.email);
    setValue("phoneNumber", user.phoneNumber);
    setValue("age", user.age);
    setValue("gender", user.gender);
    setValue("occupation", user.occupation);
    setValue("city", user.city);
    setValue("study", user.study);
    setValue("married", user.married);
    setValue("address", user.address);
    setValue("salary", user.salary);
  }, [user]);

  const wantToEdit = false;

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
    <Card className="shadow-sm p-3 m-2 mt-3" style={{ minHeight: "25vh" }}>
      <ProfileUsername
        profilePicture={user.profilePicture}
        fullName={user.fullName}
        posts={user.posts}
        toggleCollapse={() => setShowCollapse((prev) => !prev)}
        followers={user.followers}
        following={user.following}
        bio={user.bio}
      />
      <Collapse in={showCollapse}>
        <div>
          <Card className="p-4 m-4">
            <PersonalInfoForm
              errors={{}}
              wantToEdit={wantToEdit}
              register={register}
            />
          </Card>
          <Card className="p-4 m-4">
            <CareerInformationForm
              errors={{}}
              wantToEdit={wantToEdit}
              register={register}
            />
          </Card>
        </div>
      </Collapse>
    </Card>
  );
};
