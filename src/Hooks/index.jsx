import { useSelector } from "react-redux";

export const useAuthenticated = () => {
  const { isAuthenticated, loading } = useSelector(({ userAuth }) => userAuth);

  return { isAuthenticated, loading };
};
