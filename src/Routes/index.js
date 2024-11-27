import { createBrowserRouter, Outlet } from "react-router-dom";

import { Header, Footer } from "Components";
import { Landing, Events, NotFound } from "Containers";
import { urls } from "Utils";

const { root, events } = urls;

const ChildRoutes = [
  { path: root, element: <Landing /> },
  {
    path: events,
    element: <Events />,
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
