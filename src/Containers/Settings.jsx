import { useEffect, useState } from "react";
import { Form, Card, Button, Container, Tab, Tabs } from "react-bootstrap";
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
  const [activeTab, setActiveTab] = useState("account");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Prefill form values from Redux data
  useEffect(() => {
    if (data) {
      Object.keys(data).forEach((key) => {
        setValue(key, data[key]);
      });
    }
  }, [data, setValue]);

  const onSubmit = () => {
    console.log("Form submitted");
  };

  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Tabs
          activeKey={activeTab}
          onSelect={setActiveTab}
          className="mb-3"
          justify
        >
          {/* Account Tab */}
          <Tab eventKey="account" title="Account">
            <Card className="p-4 m-4">
              <UsernameEmailForm
                errors={errors}
                wantToEdit={false}
                register={register}
              />
            </Card>
          </Tab>

          {/* Personal Tab */}
          <Tab eventKey="personal" title="Personal">
            <Card className="p-4 m-4">
              <PersonalInfoForm
                errors={errors}
                wantToEdit={wantToEdit}
                register={register}
              />
            </Card>
          </Tab>

          {/* Career Tab */}
          <Tab eventKey="career" title="Career">
            <Card className="p-4 m-4">
              <CareerInformationForm
                errors={errors}
                wantToEdit={wantToEdit}
                register={register}
              />
            </Card>
          </Tab>

          {/* Security Tab */}
          <Tab eventKey="security" title="Security">
            <SecurityForm register={register} />
          </Tab>

          {/* Theme Tab */}
          <Tab eventKey="theme" title="Theme">
            <Card className="p-4 m-4">
              <h5 className="mb-3">Select Theme</h5>
              <ThemeToggler
                labelLeft="Light"
                labelRight="Dark"
                onChange={toggleTheme}
              />
            </Card>
          </Tab>
        </Tabs>

        {/* Action Buttons */}
        <div className="text-end">
          <Button
            variant="success"
            onClick={() => setWantToEdit(true)}
            disabled={wantToEdit}
            className="me-2"
          >
            Edit Details
          </Button>
          <Button variant="primary" type="submit" disabled={!wantToEdit}>
            Save
          </Button>
        </div>
      </Form>
    </Container>
  );
};
