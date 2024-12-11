import {
  NotFound,
  Feeds,
  Profile,
  Connections,
  Notifications,
  Messages,
  Search,
  SignIn,
  SignUp,
  Settings,
  AccessDenied,
  Landing,
} from "Containers";
import { useAuthenticated } from "Hooks";
import { Navigate } from "react-router-dom";
import { urls } from "Utils";

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

export const Routes = () => {
  const isAuthenticated = useAuthenticated();

  return [
    {
      path: root,
      element: isAuthenticated ? <Feeds /> : <Landing />,
    },
    {
      path: feeds,
      element: isAuthenticated ? <Feeds /> : <AccessDenied />,
    },
    {
      path: profile,
      element: isAuthenticated ? <Profile /> : <AccessDenied />,
    },
    {
      path: connections,
      element: isAuthenticated ? <Connections /> : <AccessDenied />,
    },
    {
      path: notifications,
      element: isAuthenticated ? <Notifications /> : <AccessDenied />,
    },
    {
      path: messages,
      element: isAuthenticated ? <Messages /> : <AccessDenied />,
    },
    {
      path: search,
      element: isAuthenticated ? <Search /> : <AccessDenied />,
    },
    {
      path: settings,
      element: isAuthenticated ? <Settings /> : <AccessDenied />,
    },
    // Redirect authenticated users trying to access signIn or signUp
    {
      path: signIn,
      element: isAuthenticated ? <Navigate to={root} replace /> : <SignIn />,
    },
    {
      path: signUp,
      element: isAuthenticated ? <Navigate to={root} replace /> : <SignUp />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];
};
