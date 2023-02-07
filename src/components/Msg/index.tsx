import styles from "./styles.module.scss";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

type Props = {
  msg: string;
  status: string;
};

const Msg = ({ msg, status }: Props) => {
  return (
    <div className={`${styles.msg} ${status === "error" && styles.error}`}>
      {status === "success" ? <CheckCircleOutlineIcon /> : <ErrorOutlineIcon />}
      <p>{msg}</p>
    </div>
  );
};

export default Msg;
