import { useEffect } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Header, Footer } from "Components";
import {
  Landing,
  Events,
  NotFound,
  Feeds,
  SignIn,
  SignUp,
  Friends,
  UserAccount,
} from "Containers";
import { urls } from "Utils";

import { mockPosts } from "Mock";
import { fetchUserInfo, fetchUserInfoSuccess } from "Slices";
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
    path: "/:username",
    element: <UserAccount />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserInfo());
    setTimeout(() => {
      dispatch(
        fetchUserInfoSuccess({
          profilePicture: "https://pbs.twimg.com/media/Fe3abQPaAAAN3s-.jpg",
          userName: "thisisvishalpal",
          firstName: "Vishal",
          lastName: "Pal",
          city: "Gwalior",
          state: "M.P.",
          phoneNumber: 9806980256,
          bio: "Find what you love & let it kill you.",
          followers: 820,
          following: 299,
          posts: mockPosts,
          private: true,
          gotra: ["dubele", "mohaniya"],
          age: 28,
          gender: "male",
        })
      );
    }, 500);
  }, []);

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
