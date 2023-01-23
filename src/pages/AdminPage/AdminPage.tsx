import styles from "./AdminPage.module.css";
import { Search } from "../../components/Search/Search";
import { FC } from "react";

export const AdminPage:FC = (): JSX.Element => {
  return (
    <section className={styles.search_page}>
      <Search />
    </section>
  );
};
