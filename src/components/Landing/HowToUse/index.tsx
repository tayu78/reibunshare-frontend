import styles from "./styles.module.scss";
import CreateIcon from "@mui/icons-material/Create";
import ShareIcon from "@mui/icons-material/Share";
import SearchIcon from "@mui/icons-material/Search";
import CategoryIcon from "@mui/icons-material/Category";
const datas = [
  {
    icon: <CreateIcon />,
    title: "Register",
    detail:
      "Making card with your own example expression. Which enables you to memorize phrases easier.",
  },
  {
    icon: <ShareIcon />,
    title: "Share",
    detail:
      "Post the card so that we can see other expression and get reaction from others.",
  },
  {
    icon: <SearchIcon />,
    title: "Filter",
    detail:
      "Find the useful card by filtering tag. This allows you to search specific language or dialect.",
  },
  {
    icon: <CategoryIcon />,
    title: "Categorize",
    detail:
      "Create book to organize cards  by what you want, like language or dialect. Add your card or useful card made by others into your book. ",
  },
];
const HowToUse = () => {
  return (
    <section className={styles.howToUse}>
      <h2 className={styles.sectionTitle}>How to use?</h2>
      <div className={styles.gridContainer}>
        {datas.map(({ icon, title, detail }) => {
          return (
            <div className={styles.card} key={title}>
              <div className={styles.iconWrapper}>{icon}</div>
              <h3>{title}</h3>
              <p>{detail}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowToUse;
