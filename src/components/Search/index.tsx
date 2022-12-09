import styles from "./styles.module.scss";
import SearchContent from "./SearchContent";

const Search = () => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search by keyword" />
      <ul className={styles.tabLists}>
        <li>Top</li>
        <li>User</li>
        <li>Language</li>
        <li>Dialect</li>
      </ul>
      <SearchContent />
    </div>
  );
};

export default Search;
