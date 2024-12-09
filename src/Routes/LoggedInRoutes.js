import {
  Events,
  NotFound,
  Feeds,
  Profile,
  Connections,
  Notifications,
  Messages,
  Search,
} from "Containers";
import { urls } from "Utils";

const {
  root,
  events,
  feeds,
  profile,
  connections,
  notifications,
  messages,
  search,
} = urls;

export const LoggedInRoutes = [
  {
    path: root,
    element: <Feeds />,
  },
  {
    path: events,
    element: <Events />,
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
    path: "*",
    element: <NotFound />,
  },
];
