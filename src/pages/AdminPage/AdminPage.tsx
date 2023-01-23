import styles from "./AdminPage.module.css";
import { Search } from "../../components/Search/Search";
import { FC, useContext } from "react";
import { AuthContext } from "../../services/AuthContext";
import { Navigate } from "react-router";
import { useLocation } from "react-router";

export const AdminPage: FC = (): JSX.Element => {
  const location = useLocation();
  const { state } = useContext(AuthContext);

  if (!state.isAdmin) {
    return <Navigate to={"/"} state={{ from: location }} />
  }

  return (
    <section className={styles.search_page}>
      <Search />
    </section>
  );
};
