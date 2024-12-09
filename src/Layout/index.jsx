import { Outlet } from "react-router-dom";

import { Header, Footer } from "Components";

export const Layout = () => {
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
