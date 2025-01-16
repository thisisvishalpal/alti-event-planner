import { useEffect, useState } from "react";
import {
  Form,
  Card,
  Button,
  Container,
  Tab,
  Tabs,
  Alert,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import {
  CareerInformationForm,
  LanguageForm,
  PersonalInfoForm,
  SecurityForm,
  SpinnerTwo,
  ThemeToggler,
  UsernameEmailForm,
} from "Components";
import { useTheme } from "Theme";
import { mutateUserUpdate } from "Slices";

export const Settings = () => {
  const dispatch = useDispatch();
  const { toggleTheme } = useTheme();
  const { data, loading, error } = useSelector(({ userInfo }) => userInfo);

  const [activeTab, setActiveTab] = useState("account");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, dirtyFields },
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  // Prefill form values from Redux data
  useEffect(() => {
    if (data) {
      Object.entries(data).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [data, setValue]);

  const onSubmit = (formValues) => {
    if (Object.keys(dirtyFields).length > 0) {
      // Destructure values from data based on dirtyFields keys
      const updatedValues = Object.keys(dirtyFields).reduce((acc, key) => {
        if (key in formValues) {
          acc[key] = formValues[key];
        }
        return acc;
      }, {});
      dispatch(mutateUserUpdate(updatedValues));
    }
  };

  // Tabs configuration
  const tabs =
    //  useMemo(  () =>
    [
      {
        eventKey: "account",
        title: "Account",
        component: (
          <UsernameEmailForm
            errors={errors}
            wantToEdit={false}
            register={register}
            showNewPassword={false}
          />
        ),
      },
      {
        eventKey: "personal",
        title: "Personal",
        component: (
          <PersonalInfoForm
            errors={errors}
            wantToEdit={true}
            register={register}
          />
        ),
      },
      {
        eventKey: "career",
        title: "Career",
        component: (
          <CareerInformationForm
            errors={errors}
            wantToEdit={true}
            register={register}
            watch={watch}
          />
        ),
      },
      {
        eventKey: "security",
        title: "Security",
        component: <SecurityForm register={register} />,
      },
      {
        eventKey: "theme",
        title: "Language",
        component: (
          <>
            <h5 className="mb-3">Select Theme</h5>
            <ThemeToggler
              labelLeft="Light"
              labelRight="Dark"
              onChange={toggleTheme}
            />
            <hr />
            <LanguageForm
              errors={errors}
              wantToEdit={true}
              register={register}
            />
          </>
        ),
      },
    ];
  //   [errors, register, toggleTheme, watch]
  // );

  const renderComponent = (component) => {
    if (loading) return <SpinnerTwo />;
    if (error) return <Alert variant="danger">{error}</Alert>;
    return <Card className="p-4 m-2">{component}</Card>;
  };

  return (
    <Container className="mt-4">
      <h3 className="m-2 mb-3">Settings</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Tabs
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
          className="mb-3"
          justify
        >
          {tabs.map(({ eventKey, title, component }) => (
            <Tab eventKey={eventKey} title={title} key={eventKey}>
              {renderComponent(component)}
            </Tab>
          ))}
        </Tabs>
        <div className="text-end">
          <Button
            variant="primary"
            type="submit"
            disabled={
              activeTab === "account" || Object.keys(dirtyFields).length === 0
            }
          >
            Save
          </Button>
        </div>
      </Form>
    </Container>
  );
};
