import { FC, useState, useEffect } from "react";
import { AuthContext } from "../../services/AuthContext";
import { TAuth } from "../../utils/types";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "../Layouts/Layout";
import { ProtectedRoute } from "../../services/ProtectedRoute/ProtectedRoute";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import MainPage from "../../pages/MainPage/MainPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import { AdminPage } from "../../pages/AdminPage/AdminPage";

const App: FC = () => {
  const location = useLocation();
  const [state, setState] = useState<TAuth>({
    isAuth: false,
    token: null,
    userData: null,
    isAdmin: false,
  });

  useEffect(() => {
    localStorage.setItem("previousPage", location.state?.from.pathname || "/");
    const tokenLocal = localStorage.getItem("token") || null;
    const checkLocalToken = tokenLocal ? true : false;
    if (checkLocalToken) {
      setState({ ...state, token: tokenLocal, isAuth: true });
    } else {
      setState({ ...state, token: null, isAuth: false });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, setState }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="" element={<MainPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="admin" element={<AdminPage />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
};

export default App;
