import { Outlet } from "react-router-dom";

import { Header, Footer, Aside } from "Components";
import { useAuthenticated } from "Hooks";
import "./Layout.css";

export const Layout = () => {
  const isAuth = useAuthenticated();
  // console.log(isAuth, "value");
  return (
    <>
      <Header />
      <div
        style={
          isAuth
            ? {
                display: "grid",
                gridTemplateColumns: "2fr 4fr 2fr", // Sidebar: Main Content: Right Section ratio
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

        {/* Right Section */}
        {isAuth && (
          <aside>
            {/* Content for the right-side fixed section */}
            <h3>Right Section</h3>
            <p>This is some additional content for authenticated users.</p>
          </aside>
        )}
      </div>
      <Footer />
    </>
  );
};
