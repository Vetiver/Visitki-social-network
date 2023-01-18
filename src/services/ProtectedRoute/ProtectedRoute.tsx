import { FC, useContext } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export const ProtectedRoute: FC = () => {
  const location = useLocation();
  const { state } = useContext(AuthContext);
  console.log("попка")
  console.log(state.token)
  if (!state.token) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }

  return <Outlet />;
};
