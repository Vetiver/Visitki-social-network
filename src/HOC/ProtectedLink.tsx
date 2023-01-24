import { useContext } from "react";
import { useLocation } from "react-router";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../services/AuthContext";
import { TProtectedLink } from "../utils/types";

const ProtectedLink = ({ children, to, className }: TProtectedLink) => {
  const location = useLocation();
  //Нужен будет для логики админ или нет
  const { state, setState } = useContext(AuthContext);

  const checkAuth = () => {
    const tokenLocal = localStorage.getItem("token") || null;
    //Если токен кончился или отозван, то делается переадресация, при клике на любую ссылку нашего router.
    if (!tokenLocal) {
      setState({ ...state, isAuth: false });
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  };

  return (
    <Link to={to} className={className} onClick={checkAuth}>
      {children}
    </Link>
  );
};

export default ProtectedLink;
