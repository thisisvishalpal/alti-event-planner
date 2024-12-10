import { NotFound, SignIn, SignUp, Landing, AccessDenied } from "Containers";
import { urls } from "Utils";

const {
  root,
  signIn,
  signUp,
  feeds,
  profile,
  connections,
  notifications,
  messages,
  search,
  settings,
} = urls;

export const LoggedOutRoutes = [
  {
    path: root,
    element: <Landing />,
  },
  {
    path: signIn,
    element: <SignIn />,
  },
  {
    path: signUp,
    element: <SignUp />,
  },
  {
    path: feeds,
    element: <AccessDenied />,
  },
  {
    path: profile,
    element: <AccessDenied />,
  },
  {
    path: connections,
    element: <AccessDenied />,
  },
  {
    path: notifications,
    element: <AccessDenied />,
  },
  {
    path: messages,
    element: <AccessDenied />,
  },
  {
    path: search,
    element: <AccessDenied />,
  },
  {
    path: settings,
    element: <AccessDenied />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
