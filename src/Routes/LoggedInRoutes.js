import {
  NotFound,
  Feeds,
  Profile,
  Connections,
  Notifications,
  Messages,
  Search,
  SignIn,
} from "Containers";
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
} = urls;

export const LoggedInRoutes = [
  {
    path: root,
    element: <Feeds />,
  },
  {
    path: feeds,
    element: <Feeds />,
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
    path: notifications,
    element: <Notifications />,
  },
  {
    path: messages,
    element: <Messages />,
  },
  {
    path: search,
    element: <Search />,
  },
  {
    path: signIn,
    element: <SignIn />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
