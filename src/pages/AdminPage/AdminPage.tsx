import styles from "./AdminPage.module.css";
import { Search } from "../../components/Search/Search";

export const AdminPage = () => {
  return (
    <section className={styles.search_page}>
      <Search />
    </section>
  );
};
