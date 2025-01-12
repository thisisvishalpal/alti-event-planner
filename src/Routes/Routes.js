import { Suspense } from "react";
import { Navigate } from "react-router-dom";
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

export const LoggedInRoutes = [
  {
    path: root,
    element: <Feeds />,
    fallBack: <Landing />,
    isActive: true,
  },
  {
    to: root,
    path: feeds,
    element: <Feeds />,
    fallBack: <AccessDenied />,
    label: "Feeds",
    isActive: true,
  },
  {
    // to: `user/${data?.username}`,
    path: profile,
    element: <Profile />,
    fallBack: <AccessDenied />,
    // label: "Profile",
    isActive: true,
  },
  {
    to: connections,
    path: connections,
    element: <Connections />,
    fallBack: <AccessDenied />,
    label: "Connections",
    isActive: true,
  },
  {
    to: notifications,
    path: notifications,
    element: <Notifications />,
    fallBack: showThis ? <AccessDenied /> : <NotFound />,
    label: "Notifications",
    isActive: showThis,
  },
  {
    to: messages,
    path: messages,
    element: <Messages />,
    fallBack: showThis ? <AccessDenied /> : <NotFound />,
    label: "Messages",
    isActive: showThis,
  },
  {
    to: search,
    path: search,
    element: <Search />,
    fallBack: <AccessDenied />,
    label: "Search",
    isActive: true,
  },
  {
    to: filter,
    path: filter,
    element: <Filter />,
    fallBack: <AccessDenied />,
    label: "Filter",
    isActive: true,
  },
  {
    to: settings,
    path: settings,
    element: <Settings />,
    fallBack: <AccessDenied />,
    label: "Settings",
    isActive: true,
  },
];

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
