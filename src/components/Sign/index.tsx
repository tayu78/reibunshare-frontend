import { useEffect, useReducer, ChangeEvent, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./styles.module.scss";
import signReducer from "./reducer";
import {
  setAccountNameAction,
  setConfirmPasswordAction,
  setEmailAction,
  setPasswordAction,
  setUsernameAction,
} from "./reducer/actions";
import { signUp, login } from "../../services/authServices";
import InputField from "../../components/Form/InputField";
import { IUser } from "../../types/user";

type Props = {
  isLogin?: boolean;
};

const Sign = ({ isLogin }: Props) => {
  const initialState = {
    accountName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [signState, dispatch] = useReducer(signReducer, initialState);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const { accountName, email, password, username } = signState;
    e.preventDefault();
    if (isLogin) {
      const { data, responseType } = await login({ email, password } as IUser);
      console.log("login: ", data);
    } else {
      const { data, responseType } = await signUp({
        accountName,
        email,
        password,
        username,
      });
      console.log("signup: ", data);
    }
  };

  const navigate = useNavigate();

  return (
    <div className={styles.sign}>
      <h1>
        Welcome {isLogin && "back"} to
        <span className={styles.fontGreen}>ReibunShare</span> !!!
      </h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formBoard}>
          <div className={styles.formContent}>
            <p>{isLogin ? "LogIn" : "SignUp"}</p>
            {isLogin ? (
              <>
                <InputField
                  placeholder="Email"
                  handleChange={(e) =>
                    dispatch(setEmailAction(e as ChangeEvent<HTMLInputElement>))
                  }
                  value={signState.email}
                />
                <InputField
                  placeholder="Password"
                  handleChange={(e) =>
                    dispatch(
                      setPasswordAction(e as ChangeEvent<HTMLInputElement>)
                    )
                  }
                  value={signState.password}
                />
              </>
            ) : (
              <>
                <InputField
                  placeholder="AccountName"
                  handleChange={(e) =>
                    dispatch(
                      setAccountNameAction(e as ChangeEvent<HTMLInputElement>)
                    )
                  }
                  value={signState.accountName}
                />
                <InputField
                  placeholder="Username"
                  handleChange={(e) =>
                    dispatch(
                      setUsernameAction(e as ChangeEvent<HTMLInputElement>)
                    )
                  }
                  value={signState.username}
                />
                <InputField
                  placeholder="Email"
                  handleChange={(e) =>
                    dispatch(setEmailAction(e as ChangeEvent<HTMLInputElement>))
                  }
                  value={signState.email}
                />
                <InputField
                  placeholder="Password"
                  handleChange={(e) =>
                    dispatch(
                      setPasswordAction(e as ChangeEvent<HTMLInputElement>)
                    )
                  }
                  value={signState.password}
                />
                <InputField
                  placeholder="ConfirmPassword"
                  handleChange={(e) =>
                    dispatch(
                      setConfirmPasswordAction(
                        e as ChangeEvent<HTMLInputElement>
                      )
                    )
                  }
                  value={signState.confirmPassword}
                />
              </>
            )}
            <button type="submit">{isLogin ? "LogIn" : "SignUp"}</button>
          </div>
          {isLogin ? (
            <p>
              Not have an account yet? <br />-{" "}
              <Link to={"/signup"}>here to signup </Link>
            </p>
          ) : (
            <p>
              Already have an account? <br />-{" "}
              <Link to={"/login"}>here to login </Link>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Sign;
