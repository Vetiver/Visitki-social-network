import { FC } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";

export const ProtectedRoute: FC = () => {
  const location = useLocation();
  const tokenLocal = localStorage.getItem("token") || null;

  if (!tokenLocal) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }

  return <Outlet />;
};
