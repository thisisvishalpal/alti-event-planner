import { createBrowserRouter, Outlet } from "react-router-dom";

import { Header, Footer } from "Components";
import { urls } from "Utils";
import { ChildRoutes } from "./LoggedInRoutes";

const { root } = urls;

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
