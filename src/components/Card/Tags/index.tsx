import styles from "./styles.module.scss";
type Props = {
  tags: string[];
};

const Tags = ({ tags }: Props) => {
  return (
    <ul className={styles.tags}>
      {tags.map((tag, index) => {
        return (
          <li key={index} className={styles.tag}>
            {tag}
          </li>
        );
      })}
    </ul>
  );
};

export default Tags;
