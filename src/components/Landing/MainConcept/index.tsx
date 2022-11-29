import BirdImg from "../../../assets/images/bird.svg";
import BookImg from "../../../assets/images/book.svg";
import BeedsImg from "../../../assets/images/beads.svg";
import styles from "./styles.module.scss";

const MainConcept = () => {
  return (
    <section className={styles.mainConcept}>
      <h2 className={styles.sectionTitle}>Main concept</h2>
      <div>
        <img src={BirdImg} alt="bird" />
        <p>
          Share your example for other learners, like messenger
          <span className={styles.fontGreen}>birds</span>
        </p>
      </div>
      <div>
        <img src={BookImg} alt="book" />
        <p>
          Add the vocabulary to your
          <span className={styles.fontGreen}>book</span>
        </p>
      </div>
      <div>
        <img src={BeedsImg} alt="beads" />
        <p>
          Memorize by linking in a sentence like
          <span className={styles.fontGreen}>beeds</span>
        </p>
      </div>
    </section>
  );
};

export default MainConcept;
