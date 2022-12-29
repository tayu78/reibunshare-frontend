import styles from "./styles.module.scss";
type Props = {
  tags: { name: string }[];
};

const Tags = ({ tags }: Props) => {
  return (
    <ul className={styles.tags}>
      {tags.map((tag, index) => {
        return (
          <li key={index} className={styles.tag}>
            {tag.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Tags;
