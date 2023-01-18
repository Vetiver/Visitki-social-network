import { FC, useState } from "react";
import { AuthContext } from "../../services/AuthContext";
import { TAuth } from "../../utils/types";
import { SearchPage } from "../../pages/SearchPage/SearchPage";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layouts/Layout";
import { ProtectedRoute } from "../../services/ProtectedRoute/ProtectedRoute";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import MainPage from "../../pages/MainPage/MainPage";
import LoginPage from "../../pages/LoginPage/LoginPage";

const App: FC = () => {
  const [state, setState] = useState<TAuth>({
    isAuth: false,
    token: null,
    userData: null,
    isAdmin: false,
  });
  
  return (
    <AuthContext.Provider value={{ state, setState }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            <Route index path="main" element={<MainPage />} />
            <Route path="profile" element={<ProfilePage />} />
            
            <Route path="search" element={<SearchPage />} />
            
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        
        {/* <Route path="/" element={<FileNotFoundPage />} /> */}
      </Routes>
    </AuthContext.Provider>
  );
};

export default App;
