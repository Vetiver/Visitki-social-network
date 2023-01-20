import { FC, useState, useEffect } from "react";
import { AuthContext } from "../../services/AuthContext";
import { TAuth } from "../../utils/types";
import { SearchPage } from "../../pages/SearchPage/SearchPage";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layouts/Layout";
import { ProtectedRoute } from "../../services/ProtectedRoute/ProtectedRoute";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import MainPage from "../../pages/MainPage/MainPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NoteFoundPage/NotFoundPage";

const App: FC = () => {
  const [state, setState] = useState<TAuth>({
    isAuth: false,
    token: null,
    userData: null,
    isAdmin: false,
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
            {/* Название компонента непонятное. Страница поиска чего именно? Надо поменять */}
            <Route path="/" element={<SearchPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
};

export default App;
