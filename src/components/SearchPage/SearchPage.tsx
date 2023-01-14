import styles from "./SearchPage.module.css";
import { Search } from "../Search/Search";

export const SearchPage = () => {
  return (
    <section className={styles.search_page}>
      <Search />
    </section>
  );
};
