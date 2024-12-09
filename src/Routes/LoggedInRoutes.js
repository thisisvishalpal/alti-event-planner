import { Events, NotFound, Feeds, Profile, Connections } from "Containers";
import { urls } from "Utils";

const { root, events, feeds, profile, connections } = urls;

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
    path: "*",
    element: <NotFound />,
  },
];
