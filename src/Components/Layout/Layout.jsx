import { Outlet } from "react-router-dom";

import { Header, Footer, Aside, RightAside } from "Components";
import { useAuthenticated } from "Hooks";
import "./Layout.css";

export const Layout = () => {
  const { isAuthenticated } = useAuthenticated();
  return (
    <>
      <Header />
      <div className={isAuthenticated ? "layout-auth" : "layout-unAuth"}>
        {/* Aside Section */}
        {isAuthenticated && <Aside />}

        {/* Main Content */}
        <main>
          <Outlet />
        </main>

        {isAuthenticated && <RightAside />}
      </div>
      <Footer />
    </>
  );
};
