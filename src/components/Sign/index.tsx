import { useEffect, useReducer, ChangeEvent, FormEvent, useState } from "react";
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
import InputField from "../../components/Form/InputField";
import { IUser } from "../../types/user";
import { registerUser, userLogin } from "../../redux/features/user/userSlice";
import Spinner from "../Loading/Spinner";

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

  const errorInitialState = {
    email: [],
    password: [],
    confirmPassword: [],
    accountName: [],
    username: [],
  };
  const [errorState, setErrorState] = useState(errorInitialState);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isError = Object.values(errorState).some((errorArray) => {
      return errorArray.length > 0;
    });

    if (isError) {
      return;
    }

    const { accountName, email, password, username } = signState;

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

  const validate = (key: string) => {
    let errors: string[] = [];

    switch (key) {
      case "email":
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!signState[key]!.trim()) {
          errors.push("Email field is required. It cannot be empty.");
          break;
        }
        if (!signState[key]!.match(regex)) {
          errors.push("Please provide valid email address.");
        }
        break;
      case "password":
        const MIN_PASSWORD_LENGTH = 8;
        // check length
        if (signState[key]!.length < MIN_PASSWORD_LENGTH) {
          errors.push(
            `Password must consist of at least ${MIN_PASSWORD_LENGTH} characters.`
          );
        }
        // check special character inclusion
        const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (!signState[key]!.match(specialChars)) {
          errors.push(
            "Password must contain at least one special characters. (Example: !, @, %)."
          );
        }
        // check number inclusion
        const nums = /\d+/g;
        if (!signState[key]!.match(nums)) {
          errors.push("Password must contain at least one number.");
        }
        break;
      case "confirmPassword":
        if (signState[key] !== signState["password"]) {
          errors.push("Password does not match.");
        }
        break;
      case "accountName":
        if (!signState[key].trim()) {
          errors.push("Account name field is required. It cannot be empty.");
        }
        break;
      case "username":
        if (!signState[key]!.trim()) {
          errors.push("User name field is required. It cannot be empty.");
        }
        break;
    }

    setErrorState((prev) => {
      return {
        ...prev,
        [key]: errors,
      };
    });
  };

  return (
    <div className={styles.sign}>
      <h1>
        Welcome {isLogin && "back"} to&nbsp;
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
                  value={signState.email!}
                  onBlur={() => validate("email")}
                  errorMessages={errorState["email"]}
                />
                <InputField
                  placeholder="Password"
                  type="password"
                  handleChange={(e) =>
                    dispatch(
                      setPasswordAction(e as ChangeEvent<HTMLInputElement>)
                    )
                  }
                  value={signState.password!}
                  onBlur={() => validate("password")}
                  errorMessages={errorState["password"]}
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
                  onBlur={() => validate("accountName")}
                  errorMessages={errorState["accountName"]}
                />
                <InputField
                  placeholder="Username"
                  handleChange={(e) =>
                    dispatch(
                      setUsernameAction(e as ChangeEvent<HTMLInputElement>)
                    )
                  }
                  value={signState.username!}
                  onBlur={() => validate("username")}
                  errorMessages={errorState["username"]}
                />
                <InputField
                  placeholder="Email"
                  handleChange={(e) =>
                    dispatch(setEmailAction(e as ChangeEvent<HTMLInputElement>))
                  }
                  value={signState.email!}
                  onBlur={() => validate("email")}
                  errorMessages={errorState["email"]}
                />
                <InputField
                  placeholder="Password"
                  type="password"
                  handleChange={(e) =>
                    dispatch(
                      setPasswordAction(e as ChangeEvent<HTMLInputElement>)
                    )
                  }
                  value={signState.password!}
                  onBlur={() => validate("password")}
                  errorMessages={errorState["password"]}
                />
                <InputField
                  placeholder="ConfirmPassword"
                  type="password"
                  handleChange={(e) =>
                    dispatch(
                      setConfirmPasswordAction(
                        e as ChangeEvent<HTMLInputElement>
                      )
                    )
                  }
                  value={signState.confirmPassword}
                  onBlur={() => validate("confirmPassword")}
                  errorMessages={errorState["confirmPassword"]}
                />
              </>
            )}
            <button type="submit" disabled={isLoading}>
              {isLoading && <Spinner />}
              {isLogin ? "LogIn" : "SignUp"}
            </button>
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
