import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "./styles.module.scss";

const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(-1)} className={styles.backBtn}>
      <ArrowBackIcon />
    </div>
  );
};

export default BackBtn;
