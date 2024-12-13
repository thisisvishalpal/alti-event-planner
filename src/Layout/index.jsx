import { Outlet } from "react-router-dom";

import { Header, Footer, Aside, RightAside } from "Components";
import { useAuthenticated } from "Hooks";
import "./Layout.css";

export const Layout = () => {
  const isAuth = useAuthenticated();
  return (
    <>
      <Header />
      <div
        style={
          isAuth
            ? {
                display: "grid",
                gridTemplateColumns: "2fr 4fr 2fr",
                gap: "20px",
                padding: "20px",
                minHeight: "100vh",
              }
            : {
                minHeight: "100vh",
              }
        }
      >
        {/* Aside Section */}
        {isAuth && <Aside />}

        {/* Main Content */}
        <main>
          <Outlet />
        </main>

        {isAuth && <RightAside />}
      </div>
      <Footer />
    </>
  );
};
