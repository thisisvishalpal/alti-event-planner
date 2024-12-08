import {
  Landing,
  Events,
  NotFound,
  Feeds,
  SignIn,
  SignUp,
  Profile,
  Connections,
} from "Containers";
import { urls } from "Utils";

const { root, events, feeds, signIn, signUp, profile, connections } = urls;

export const ChildRoutes = [
  { path: root, element: <Landing /> },
  {
    path: events,
    element: <Events />,
  },
  {
    path: feeds,
    element: <Feeds />,
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
    path: profile,
    element: <Profile />,
  },
  {
    path: connections,
    element: <Connections />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
