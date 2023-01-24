import { FC, useState, useEffect } from "react";
import { AuthContext } from "../../services/AuthContext";
import { TAuth, TUsersDataDetail } from "../../utils/types";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layouts/Layout";
import { ProtectedRoute } from "../../services/ProtectedRoute/ProtectedRoute";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import MainPage from "../../pages/MainPage/MainPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import { AdminPage } from "../../pages/AdminPage/AdminPage";
import MapPage from "../../pages/MapPage/MapPage";
import { Search } from "../Search/Search";
import ProfileDetailsPage from "../../pages/ProfileDetailsPage/ProfileDetailsPage";
import { getProfiles } from "../../utils/api/api";

const App: FC = () => {
  const [state, setState] = useState<TAuth>({
    isAuth: false,
    userData: null,
    isAdmin: false,
  });
  //Проверяем, записан ли токен в локальном хранилище, если да,
  //то записываем в переменную.
  const tokenLocal = localStorage.getItem("token") || null;

  useEffect(() => {
    if (tokenLocal) {
      //Записываем данные первого пользователя полученного из массива переданного бекендом
      getProfiles().then((res: TUsersDataDetail) =>
        setState({ ...state, isAuth: true, userData: res.items[0] })
      );
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, setState }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            <Route index element={<MainPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="details" element={<ProfileDetailsPage />} />
            <Route path="admin" element={<AdminPage />} />
            <Route path="map" element={<MapPage />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
};

export default App;
