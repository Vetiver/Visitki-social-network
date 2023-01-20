import { FC, useState, useEffect } from "react";
import { AuthContext } from "../../services/AuthContext";
import { TAuth } from "../../utils/types";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layouts/Layout";
import { ProtectedRoute } from "../../services/ProtectedRoute/ProtectedRoute";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import MainPage from "../../pages/MainPage/MainPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import { AdminPage } from "../../pages/AdminPage/AdminPage";
import MapPage from "../../pages/MapPage/MapPage";


const App: FC = () => {
  const [state, setState] = useState<TAuth>({
    isAuth: false,
    userData: null,
    isAdmin: false,
    token: null,
  });


  const tokenLocal = localStorage.getItem("token") || null;

  useEffect(() => {
    const checkLocalToken = () => {
      if (tokenLocal) {
        setState({ ...state, isAuth: true, token: tokenLocal });
        return true;
      }
      return false;
    };
    if (checkLocalToken())
      setState({ ...state, token: tokenLocal, isAuth: true });
  }, []);

  return (
    <AuthContext.Provider value={{ state, setState }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            <Route index element={<MainPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="admin" element={<AdminPage />} />
            <Route path="/map" element={<MapPage />} />

          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
};

export default App;
