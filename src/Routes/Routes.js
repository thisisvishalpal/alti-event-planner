import { Suspense } from "react";
import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  NotFound,
  Feeds,
  Profile,
  Connections,
  Notifications,
  Messages,
  Search,
  Filter,
  SignIn,
  Settings,
  AccessDenied,
  Landing,
  SignupTwo,
} from "Containers";
import { Spinner } from "Components";

import { urls } from "Utils";
import { Placeholder } from "./Placeholder";

const {
  root,
  feeds,
  profile,
  connections,
  notifications,
  messages,
  search,
  filter,
  signIn,
  signUp,
  settings,
} = urls;

const showThis = false;

export const useLoggedInRoutes = () => {
  const { t } = useTranslation();

  return [
    {
      path: root,
      element: <Feeds />,
      fallBack: <Landing />,
      isActive: true,
    },
    {
      path: feeds,
      element: <Feeds />,
      fallBack: <AccessDenied />,
      label: t("navigations.feeds"),
      isActive: true,
    },
    {
      path: profile,
      element: <Profile />,
      fallBack: <AccessDenied />,
      // label: "Profile",
      isActive: true,
    },
    {
      path: connections,
      element: <Connections />,
      fallBack: <AccessDenied />,
      label: t("navigations.connections"),
      isActive: true,
    },
    {
      path: notifications,
      element: <Notifications />,
      fallBack: <AccessDenied />,
      label: t("navigations.notifications"),
      isActive: true,
    },
    {
      path: messages,
      element: <Messages />,
      fallBack: showThis ? <AccessDenied /> : <NotFound />,
      label: t("navigations.messages"),
      isActive: showThis,
    },
    {
      path: search,
      element: <Search />,
      fallBack: <AccessDenied />,
      label: t("navigations.search"),
      isActive: true,
    },
    {
      path: filter,
      element: <Filter />,
      fallBack: <AccessDenied />,
      label: t("navigations.filter"),
      isActive: true,
    },
    {
      path: settings,
      element: <Settings />,
      fallBack: <AccessDenied />,
      label: t("navigations.settings"),
      isActive: true,
    },
  ];
};

export const LoggedOutRoutes = [
  {
    path: signIn,
    element: <Navigate to={root} replace />,
    fallBack: <SignIn />,
    isActive: true,
  },
  {
    path: signUp,
    element: <Navigate to={root} replace />,
    fallBack: <SignupTwo />,
    isActive: true,
  },
];

export const NotFoundRoutes = [
  {
    path: "*",
    element: <NotFound />,
    fallBack: <NotFound />,
    isActive: true,
  },
];

export const Routes = () => {
  const LoggedInRoutes = useLoggedInRoutes();

  return [...LoggedInRoutes, ...LoggedOutRoutes, ...NotFoundRoutes].map(
    ({ path, element, fallBack, isActive }) => ({
      path: path,
      element: (
        <Suspense fallback={<Spinner />}>
          <Placeholder fallBack={fallBack} isActive={isActive}>
            {element}
          </Placeholder>
        </Suspense>
      ),
    })
  );
};
