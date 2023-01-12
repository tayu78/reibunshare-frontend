import styles from "./styles.module.scss";
import ProfileEdit from "../ProfileEdit";
import useAppSelector from "../../../hooks/useAppSelector";
import useModal from "../../../hooks/useModal";
import ProfileContent from "../ProfileContent";

const MyProfile = () => {
  const { Modal, openModal, closeModal } = useModal();
  const { userInfo } = useAppSelector((store) => store.user);

  return (
    <>
      <Modal>
        <ProfileEdit closeModal={closeModal} />
      </Modal>
      <ProfileContent
        user={userInfo}
        Button={() => (
          <button onClick={() => openModal()}>Update Profile</button>
        )}
      />
    </>
  );
};

export default MyProfile;
