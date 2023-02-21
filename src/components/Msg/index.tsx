import styles from "./styles.module.scss";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CancelIcon from "@mui/icons-material/Cancel";

type Props = {
  msg: string;
  status: string;
  closeFn?: () => void;
};

const Msg = ({ msg, status, closeFn }: Props) => {
  return (
    <div className={`${styles.msg} ${status === "error" && styles.error}`}>
      {closeFn && (
        <div className={styles.cancelBtn} onClick={closeFn}>
          <CancelIcon />
        </div>
      )}
      {status === "success" ? <CheckCircleOutlineIcon /> : <ErrorOutlineIcon />}
      <p>{msg}</p>
    </div>
  );
};

export default Msg;
