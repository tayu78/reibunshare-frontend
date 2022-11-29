import styles from "./styles.module.scss";
import FindImg from "../../../assets/images/find-replace.svg";
import IPhoneImg from "../../../assets/images/iphone.svg";
const HowToUse = () => {
  return (
    <section className={styles.howToUse}>
      <h2 className={styles.sectionTitle}>How to use?</h2>
      <div className={styles.gridContainer}>
        <div>
          <div className={styles.container}>
            <div>
              <img src={FindImg} alt="find" />
              <h3>register the words or phrases</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam, architecto perspiciatis at dolores in quos deleniti.
              Delectus, aut minus! Nobis dignissimos nam natus tempore fugit?
              Obcaecati nam impedit doloremque!
            </p>
          </div>
          <div className={styles.container}>
            <div>
              <img src={FindImg} alt="find" />
              <h3>post the sentences</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam, architecto perspiciatis at dolores in quos deleniti.
              Delectus, aut minus! Nobis dignissimos nam natus tempore fugit?
              Obcaecati nam impedit doloremque!
            </p>
          </div>
          <div className={styles.container}>
            <div>
              <img src={FindImg} alt="find" />
              <h3>filter with languages and dialects</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam, architecto perspiciatis at dolores in quos deleniti.
              Delectus, aut minus! Nobis dignissimos nam natus tempore fugit?
              Obcaecati nam impedit doloremque!
            </p>
          </div>
        </div>

        <div>
          <img src={IPhoneImg} alt="iphone" />
        </div>
        <div>
          <div className={styles.container}>
            <div>
              <img src={FindImg} alt="find" />
              <h3>add vocabulary to your book</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam, architecto perspiciatis at dolores in quos deleniti.
              Delectus, aut minus! Nobis dignissimos nam natus tempore fugit?
              Obcaecati nam impedit doloremque!
            </p>
          </div>
          <div className={styles.container}>
            <div>
              <img src={FindImg} alt="find" />
              <h3>favorite the useful sentences</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam, architecto perspiciatis at dolores in quos deleniti.
              Delectus, aut minus! Nobis dignissimos nam natus tempore fugit?
              Obcaecati nam impedit doloremque!
            </p>
          </div>
          <div className={styles.container}>
            <div>
              <img src={FindImg} alt="find" />
              <h3>listen how to pronounce</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ipsam, architecto perspiciatis at dolores in quos deleniti.
              Delectus, aut minus! Nobis dignissimos nam natus tempore fugit?
              Obcaecati nam impedit doloremque!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
