import { useState, ChangeEvent, MouseEvent } from "react";
import SendIcon from "@mui/icons-material/Send";
import styles from "./styles.module.scss";
import { SPEAKER_A, SPEAKER_B } from "../../../../constants/card";
import { setUsageAction } from "../../reducer/actions";
import InputField from "../../../Form/InputField";
import { Usage, cardActionType } from "../../../../types/card.d";
import Usages from "..";

type Props = {
  dispatch: (action: cardActionType) => void;
  usages: Usage[];
};

const UsageInput = ({ dispatch, usages }: Props) => {
  const speakers = [SPEAKER_A, SPEAKER_B];
  const [speaker, setSpeaker] = useState(speakers[0]);
  const [sentence, setSentence] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSpeakerSelect = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    index: number
  ) => {
    e.stopPropagation();
    setSpeaker(speakers[index]);
    setIsOpen(false);
  };

  const addUsage = () => {
    if (!sentence) return;
    dispatch(setUsageAction({ speaker, sentence }));
    setSentence("");
  };

  return (
    <div>
      <label className={styles.label}>example sentences </label>
      <div className={styles.inputsContainer}>
        <div
          onClick={(e) => {
            setIsOpen((prev) => !prev);
          }}
          className={styles.speaker}
        >
          <p>{speaker}</p>
          <div
            className={`${styles.selectDropdown} ${isOpen && styles.active}`}
          >
            {speakers.map((s, index) => {
              return (
                <div
                  key={index + s}
                  className={styles.dropDownItem}
                  onClick={(e) => handleSpeakerSelect(e, index)}
                >
                  {s}
                  {speaker === s && (
                    <span className={styles.check}>&#10003;</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <InputField
            placeholder="enter example"
            handleChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => setSentence(e.target.value)}
            value={sentence}
          />
        </div>

        <div className={styles.sendIconContainer}>
          <SendIcon onClick={addUsage} />
        </div>
      </div>

      {usages.length > 0 && <Usages usages={usages} />}
    </div>
  );
};

export default UsageInput;
