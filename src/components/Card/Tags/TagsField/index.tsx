import { useState, ChangeEvent } from "react";
import styles from "./styles.module.scss";
import { cardActionType } from "../../../../types/card";
import { setTagsAction } from "../../reducer/actions";
import InputField from "../../../Form/InputField";
import Tags from "..";
import AddIcon from "@mui/icons-material/Add";

type Props = {
  dispatch: (action: cardActionType) => void;
  tags: { name: string }[];
};

const TagsField = ({ dispatch, tags }: Props) => {
  const [tag, setTag] = useState("");
  const addTag = () => {
    if (!tag) return;
    dispatch(setTagsAction(tag));
    setTag("");
  };

  return (
    <>
      <div className={styles.inputsContainer}>
        <div className={styles.inputWrapper}>
          <InputField
            placeholder="enter tags..."
            handleChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => setTag(e.target.value)}
            value={tag}
          />
        </div>

        <div className={styles.iconContainer} onClick={addTag}>
          <AddIcon />
        </div>
      </div>
      {tags.length > 0 && <Tags tags={tags} />}
    </>
  );
};

export default TagsField;
