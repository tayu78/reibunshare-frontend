import styles from "./styles.module.scss";

const SearchContent = () => {
  return (
    <ul className={styles.contents}>
      <li>Japanese</li>
      <li>English</li>
      <li>Chinese</li>
      <li>Spanish</li>
      <li>Portguee</li>
    </ul>
  );
};

export default SearchContent;
