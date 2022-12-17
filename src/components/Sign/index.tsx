import { useEffect, useReducer, ChangeEvent, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./styles.module.scss";
import signReducer from "./reducer";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import {
  setAccountNameAction,
  setConfirmPasswordAction,
  setEmailAction,
  setPasswordAction,
  setUsernameAction,
} from "./reducer/actions";
// import { signUp, login } from "../../services/authServices";
import InputField from "../../components/Form/InputField";
import { IUser } from "../../types/user";
import { registerUser, userLogin } from "../../redux/features/user/userSlice";

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

  const { isLoading, error, isAuthenticated } = useAppSelector(
    (store) => store.user
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated]);
  const appDispatch = useAppDispatch();

  const [signState, dispatch] = useReducer(signReducer, initialState);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const { accountName, email, password, username } = signState;
    e.preventDefault();
    if (isLogin) {
      appDispatch(userLogin({ email, password } as IUser));
    } else {
      if (signState.password !== signState.confirmPassword) {
        alert("password does not match");
        return;
      }
      appDispatch(registerUser({ accountName, email, password, username }));
    }
  };

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
