import styles from "./AdminPage.module.css";
import { Search } from "../../components/Search/Search";
import { FC } from "react";

export const AdminPage:FC = () => {
  return (
    <section className={styles.search_page}>
      <Search />
    </section>
  );
};
