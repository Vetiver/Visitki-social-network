import { FC, useContext } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export const ProtectedRoute: FC = () => {
  const location = useLocation();
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }

  return <Outlet />;
};
