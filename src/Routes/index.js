import { createBrowserRouter, Outlet } from "react-router-dom";

import { Header, Footer } from "Components";
import { Landing, Events, Shows, NotFound } from "Containers";

import { urls } from "./../Utils";

const { root, events, shows } = urls;

const ChildRoutes = [
  { path: root, element: <Landing /> },
  {
    path: events,
    element: <Events />,
  },
  {
    path: shows,
    element: <Shows />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  // {
  //   path: about,
  //   element: <About />,
  // },
  // {
  //   path: contact,
  //   element: <Contact />,
  // },
  //these below routes will get deleted once BE login logic is complete
  // {
  //   path: signIn,
  //   element: <Signin />,
  // },
  // {
  //   path: signUp,
  //   element: <Signup />,
  // },
];

const Layout = () => {
  return (
    <>
      <Header />
      <div
        style={{
          // display: "flex",
          minHeight: "100vh",
        }}
      >
        {/* <Sidebar /> */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: root,
    element: <Layout />,
    children: ChildRoutes,
  },
]);
