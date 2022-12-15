import { useReducer, ChangeEvent } from "react";
import styles from "./styles.module.scss";
import cardReducer from "../reducer";
import {
  setPhraseAction,
  setMeaningAction,
  setDescriptionAction,
} from "../reducer/actions";
import InputField from "../../Form/InputField";
import UsageInput from "../Usages/UsageInput";
import TagsField from "../Tags/TagsField";

const NewCard = () => {
  const initialState = {
    phrase: "",
    usages: [],
    description: "",
    meaning: "",
    tags: [],
  };

  const [cardState, dispatch] = useReducer(cardReducer, initialState);
  return (
    <div>
      <h1 className={styles.title}>New Card</h1>
      <div className={styles.cardContent}>
        <div className={styles.fieldWrapper}>
          <InputField
            placeholder="phrase..."
            handleChange={(e) =>
              dispatch(setPhraseAction(e as ChangeEvent<HTMLInputElement>))
            }
            value={cardState.phrase}
          />
        </div>

        <div className={styles.fieldWrapper}>
          <UsageInput dispatch={dispatch} usages={cardState.usages} />
        </div>
        <div className={styles.fieldWrapper}>
          <InputField
            placeholder="meaning..."
            handleChange={(e) =>
              dispatch(setMeaningAction(e as ChangeEvent<HTMLTextAreaElement>))
            }
            value={cardState.meaning}
            textarea
          />
        </div>

        <div className={styles.fieldWrapper}>
          <InputField
            placeholder="description..."
            handleChange={(e) =>
              dispatch(
                setDescriptionAction(e as ChangeEvent<HTMLTextAreaElement>)
              )
            }
            value={cardState.description}
            textarea
          />
        </div>

        <div className={styles.fieldWrapper}>
          <TagsField dispatch={dispatch} tags={cardState.tags} />
        </div>
      </div>

      <div className={styles.shareBtn}>Share</div>
    </div>
  );
};

export default NewCard;
