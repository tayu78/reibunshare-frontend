import { useReducer, ChangeEvent, useRef, useState, FormEvent } from "react";
import profileReducer from "../reducer";
import {
  setProfileImgAction,
  setEmailAction,
  setUsernameAction,
} from "../reducer/actions";
import {
  updateProfileInfo,
  uploadProfileImg,
} from "../../../services/userServices";
import { getUserInformation } from "../../../redux/features/user/userSlice";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import styles from "./styles.module.scss";
import LogoImg from "../../../assets/images/logo.svg";
import Avatar from "../../Avatar";
import Btn from "../../Btn";
import InputField from "../../Form/InputField";
import validateForm from "../../../utils/validateForm";

type Props = {
  closeModal: (e: FormEvent<HTMLFormElement>, isFormSubmit: boolean) => void;
};

const ProfileEdit = ({ closeModal }: Props) => {
  const { userInfo } = useAppSelector((store) => store.user);
  const appDispatch = useAppDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const initialState = {
    img: {} as File,
    email: userInfo.email!,
    username: userInfo.username,
  };

  const [profileState, dispatch] = useReducer(profileReducer, initialState);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [filePreview, setFilePreview] = useState(userInfo.img as string);

  const handleUploadFileButtonClick = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    dispatch(setProfileImgAction(e.target.files[0]));
    setFilePreview(URL.createObjectURL(e.target.files[0]));
    setIsFileUploaded(true);
  };

  const handleUpdateProfileInfo = async () => {
    const { email: currentEmail, username: currentUsername } = userInfo;
    const { email: newEmail, username: newUsername } = profileState;
    let data = {};
    if (currentEmail !== newEmail) data = { email: newEmail };
    if (currentUsername !== newUsername)
      data = { ...data, username: newUsername };

    if (Object.keys(data).length === 0) return;
    await updateProfileInfo(data);
  };

  const handleUploadProfileImg = async () => {
    const formData = new FormData();
    formData.append("profileImg", profileState.img);
    await uploadProfileImg(formData);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFileUploaded) {
      await handleUploadProfileImg();
    }
    await handleUpdateProfileInfo();
    closeModal(e, true);
    appDispatch(getUserInformation());
  };

  const handleBlur = (key: string) => {};

  const errorInitialState = {
    email: [],
    username: [],
  };
  const [errorState, setErrorState] = useState(errorInitialState);

  return (
    <div className={styles.profileEdit}>
      <form onSubmit={handleSubmit}>
        <div
          onClick={handleUploadFileButtonClick}
          className={styles.fileUploadButton}
        >
          <div className={styles.avatarWrapper}>
            <Avatar url={filePreview ? filePreview : LogoImg} />
          </div>
        </div>
        <input
          type="file"
          name="profileImg"
          onChange={handleFileChange}
          ref={fileInputRef}
          className={styles.fileInput}
        />
        <div className={styles.fieldWrapper}>
          <InputField
            placeholder="email"
            handleChange={(e) => {
              dispatch(setEmailAction(e as ChangeEvent<HTMLInputElement>));
            }}
            value={profileState.email}
            label="email"
          />
        </div>

        <div className={styles.fieldWrapper}>
          <InputField
            placeholder="username"
            handleChange={(e) => {
              dispatch(setUsernameAction(e as ChangeEvent<HTMLInputElement>));
            }}
            value={profileState.username}
            label="username"
          />
        </div>

        <div className={styles.modalBtnContainer}>
          <Btn label="Save" />
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
