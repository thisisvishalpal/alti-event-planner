import { Outlet } from "react-router-dom";

import { Header, Footer, Aside, RightAside } from "Components";
import { useAuthenticated } from "Hooks";
import "./Layout.css";

const authStyles = {
  minWidth: "100vw",
  display: "grid",
  gridTemplateColumns: "2fr 4fr 2fr",
  gap: "20px",
  padding: "20px",
  minHeight: "100vh",
};
const unAuthStyles = {
  minHeight: "100vh",
  minWidth: "100vw",
};
export const Layout = () => {
  const { isAuthenticated } = useAuthenticated();
  return (
    <>
      <Header />
      <div style={isAuthenticated ? authStyles : unAuthStyles}>
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
