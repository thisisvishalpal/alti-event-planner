import { useSelector } from "react-redux";

export const useAuthenticated = () => {
  const { isAuthenticated, loading, username } = useSelector(
    ({ userAuth }) => userAuth
  );

  return { isAuthenticated, loading, username };
};
