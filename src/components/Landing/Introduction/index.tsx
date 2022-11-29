import LogoImg from "../../../assets/images/logo.svg";
import styles from "./styles.module.scss";

const Introduction = () => {
  return (
    <section className={styles.introduction}>
      <img src={LogoImg} alt="logo" />
      <p>
        Even if you have practiced English words for a long time with vocabulary
        books, it is difficult to remember all of them since it's endless.
      </p>
      <p>
        The example sentences in those books can be sometimes useful, but we
        don't use them in daily conversations.
      </p>
      <p>
        You might try to create your own sentences for each words to memorize
        them easily, but sometimes just hearing them from native speakers help.
      </p>
      <p>This app will help us solve this problem.</p>
    </section>
  );
};

export default Introduction;
