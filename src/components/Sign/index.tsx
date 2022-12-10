import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
type Props = {
  isLogin?: boolean;
};

const Sign = ({ isLogin }: Props) => {
  const navigate = useNavigate();
  return (
    <div className={styles.sign}>
      <h1>
        Welcome to <span className={styles.fontGreen}>ReibunShare</span> !!!
      </h1>
      <form>
        <div className={styles.formBoard}>
          <div className={styles.formContent}>
            <p>{isLogin ? "LogIn" : "SignUp"}</p>
            <input placeholder="Username" />
            <input placeholder="Email" />
            <input placeholder="Password" />
            <input placeholder="ConfirmPassword" />
            <button
              onClick={() => {
                navigate("/home");
              }}
            >
              {isLogin ? "LogIn" : "SignUp"}
            </button>
          </div>
          <p>
            Alreacy have an account? <br />- <a>here to login </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Sign;
