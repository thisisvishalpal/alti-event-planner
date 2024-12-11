import { useSelector } from "react-redux";

export const useAuthenticated = () => {
  const { isAuthenticated } = useSelector(({ userAuth }) => userAuth);

  return isAuthenticated;
};
