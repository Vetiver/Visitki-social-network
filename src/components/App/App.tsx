import { FC, useState, useEffect, useContext } from "react";
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
import { getUserProfile } from "../../utils/api/api";
import { TContext } from "../../utils/types";

const App: FC = () => {
  const [profile, setProfileInfo] = useState<any>(null);
  const [state, setState] = useState<TAuth>({
    isAuth: false,
    userData: null,
    isAdmin: true,
    _id: null,
    allUsers: null,
  });
  //Проверяем, записан ли токен в локальном хранилище, если да,
  //то записываем в переменную.
  const tokenLocal = localStorage.getItem("token") || null;
  console.log(profile);
  useEffect(() => {
    if (tokenLocal !== null) {
      //Записываем данные первого пользователя полученного из массива переданного бекендом
      getProfiles().then((res: TUsersDataDetail) =>
        setState({
          ...state,
          isAuth: true,
          userData: res.items[0],
          _id: res.items[0]._id,
          allUsers: res.items,
        })
      );
      getUserProfile(state._id).then((res) => setProfileInfo(res));
    }
  }, [state._id]);

  return (
    <AuthContext.Provider value={{ state, setState }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            <Route index element={<MainPage />} />
            <Route path="profile" element={<ProfilePage profile={profile} />} />
            <Route
              path="details/:id"
              element={<ProfileDetailsPage allUsers={state.allUsers} />}
            />
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
