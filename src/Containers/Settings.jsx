import { useEffect, useState } from "react";
import { Form, Card, Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import {
  CareerInformationForm,
  PersonalInfoForm,
  SecurityForm,
  ThemeToggler,
  UsernameEmailForm,
} from "Components";
import { useTheme } from "Theme";

export const Settings = () => {
  const { toggleTheme } = useTheme();
  const { data } = useSelector(({ userInfo }) => userInfo);
  const [wantToEdit, setWantToEdit] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("fullName", data.fullName);
    setValue("fatherName", data.fatherName);
    setValue("username", data.username);
    setValue("email", data.email);
    setValue("phoneNumber", data.phoneNumber);
    setValue("age", data.age);
    setValue("gender", data.gender);
    setValue("occupation", data.occupation);
    setValue("city", data.city);
    setValue("study", data.study);
    setValue("married", data.married);
    setValue("salary", data.salary);
    setValue("address", data.address);
  }, [data]);
  const onSubmit = () => {
    console.log("submit clicked");
  };

  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Card className="p-4 m-4">
          <UsernameEmailForm
            errors={errors}
            wantToEdit={false}
            register={register}
          />
        </Card>
        <Card className="p-4 m-4">
          <PersonalInfoForm
            errors={errors}
            wantToEdit={wantToEdit}
            register={register}
          />
        </Card>
        <Card className="p-4 m-4">
          <CareerInformationForm
            errors={errors}
            wantToEdit={wantToEdit}
            register={register}
          />
        </Card>
        <div className="text-end">
          <Button
            variant="success"
            onClick={() => setWantToEdit(true)}
            disabled={wantToEdit}
            className="me-2"
          >
            Edit details
          </Button>
          <Button disabled={!wantToEdit} variant="primary" type="submit">
            Save
          </Button>
        </div>
      </Form>

      <SecurityForm register={register} />

      <Card className="p-4 m-4">
        <h5 className="mb-3">Select theme</h5>
        <ThemeToggler
          labelLeft="Light"
          labelRight="Dark"
          onChange={toggleTheme}
        />
      </Card>
    </Container>
  );
};
