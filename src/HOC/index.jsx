import { memo } from "react";
import { useSelector } from "react-redux";
import { SignIn, Landing } from "Containers";
import { useNavigate } from "react-router-dom";

export const LoginCheck = memo(({ children }) => {
  const store = useSelector(({ userInfo }) => userInfo);
  const { data, loading, error } = store;
  console.log(data, "from login check");

  return <>{data?.isLoggedIn ? children : <Landing />}</>;
});
