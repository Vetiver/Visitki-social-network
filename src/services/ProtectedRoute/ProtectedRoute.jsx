import { Route } from "react-router-dom";
import { Redirect, useLocation } from "react-router-dom";



export default function ProtectedRoute({
  anonymous = false,
  isAuth,
  isAdmin = false,
  children,
  path,
  ...rest
}) {
  const location = useLocation();

  if (anonymous && isAuth) {
    return <Redirect to="/login" />;
  }

  if (!anonymous && isAuth && !isAdmin) {
    return <Redirect to={{ pathname: "/", state: { from: location } }} />;
  }

  if(!anonymous && isAuth && isAdmin) {
    return <Redirect to={{ pathname: "/moder", state: { from: location } }} />;
  }

  return <Route exact={true} {...rest}>{children}</Route>;
}

