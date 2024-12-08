import { createBrowserRouter, Outlet } from "react-router-dom";

import { Header, Footer } from "Components";
import {
  Landing,
  Events,
  NotFound,
  Feeds,
  SignIn,
  SignUp,
  Friends,
  MyAccount,
} from "Containers";
import { urls } from "Utils";

const { root, events, feeds, signIn, signUp, friends, myAccount } = urls;

const ChildRoutes = [
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
    path: friends,
    element: <Friends />,
  },
  {
    path: myAccount,
    element: <MyAccount />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const Layout = () => {
  return (
    <>
      <Header />
      <div
        style={{
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export const Router = createBrowserRouter([
  {
    path: root,
    element: <Layout />,
    children: ChildRoutes,
  },
]);
