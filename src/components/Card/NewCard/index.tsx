import { useReducer, ChangeEvent, FormEvent } from "react";
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
import { makeCard } from "../../../services/cardServices";
import Btn from "../../Btn";

type Props = {
  closeModal: (e: FormEvent<HTMLFormElement>, isFormSubmit: boolean) => void;
};

const NewCard = ({ closeModal }: Props) => {
  const initialState = {
    phrase: "",
    usages: [],
    description: "",
    meaning: "",
    tags: [],
  };

  const [cardState, dispatch] = useReducer(cardReducer, initialState);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { phrase, usages, description, meaning, tags } = cardState;
    try {
      await makeCard({
        phrase,
        usages,
        description,
        meaning,
        tags,
      });
      closeModal(e, true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className={styles.title}>New Card</h1>
      <div className={styles.cardContent}>
        <div className={styles.fieldWrapper}>
          <InputField
            label="phrase"
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
            label="meaning"
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
            label="description"
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

      <div className={styles.modalBtnContainer}>
        <Btn label="Share" />
      </div>
    </form>
  );
};

export default NewCard;
