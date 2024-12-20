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
  signIn,
  signUp,
  settings,
} = urls;

export const LoggedInRoutes = [
  {
    path: root,
    element: <Feeds />,
    fallBack: <Landing />,
  },
  {
    to: root,
    path: feeds,
    element: <Feeds />,
    fallBack: <AccessDenied />,
    label: "Feeds",
  },
  {
    // to: `user/${data?.username}`,
    path: profile,
    element: <Profile />,
    fallBack: <AccessDenied />,
    // label: "Profile",
  },
  {
    to: connections,
    path: connections,
    element: <Connections />,
    fallBack: <AccessDenied />,
    label: "Connections",
  },
  {
    to: notifications,
    path: notifications,
    element: <Notifications />,
    fallBack: <AccessDenied />,
    label: "Notifications",
  },
  {
    to: messages,
    path: messages,
    element: <Messages />,
    fallBack: <AccessDenied />,
    label: "Messages",
  },
  {
    to: search,
    path: search,
    element: <Search />,
    fallBack: <AccessDenied />,
    label: "Search",
  },
  {
    to: settings,
    path: settings,
    element: <Settings />,
    fallBack: <AccessDenied />,
    label: "Settings",
  },
];

export const LoggedOutRoutes = [
  {
    path: signIn,
    element: <Navigate to={root} replace />,
    fallBack: <SignIn />,
  },
  {
    path: signUp,
    element: <Navigate to={root} replace />,
    fallBack: <SignupTwo />,
  },
];

export const NotFoundRoutes = [
  {
    path: "*",
    element: <NotFound />,
    fallBack: <NotFound />,
  },
];

export const Routes = () => {
  return [...LoggedInRoutes, ...LoggedOutRoutes, ...NotFoundRoutes].map(
    ({ path, element, fallBack }) => ({
      path: path,
      element: (
        <Suspense fallback={<Spinner />}>
          <Placeholder fallBack={fallBack}>{element}</Placeholder>
        </Suspense>
      ),
    })
  );
};
