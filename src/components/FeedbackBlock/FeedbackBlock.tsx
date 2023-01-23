import { FC, useEffect, useState } from "react";
import thumbsUpIcon from "../../icons/reactions/👍.svg";
import thumbsDownIcon from "../../icons/reactions/👎️.svg";
import waveIcon from "../../icons/reactions/👋️.svg";
import funnyIcon from "../../icons/reactions/🤣️.svg";
import likedIcon from "../../icons/reactions/😍️.svg";
import sadIcon from "../../icons/reactions/😞️.svg";
import dissatisfiedIcon from "../../icons/reactions/😬️.svg";
import surprisedIcon from "../../icons/reactions/😱️.svg";
import smiledIcon from "../../icons/reactions/🙂️.svg";

import styles from "./FeedbackBlock.module.css";

export const defaultReactionsArray = [
  { item: thumbsUpIcon, count: 2 },
  { item: thumbsDownIcon, count: 1 },
  { item: waveIcon, count: 0 },
  { item: funnyIcon, count: 0 },
  { item: likedIcon, count: 0 },
  { item: sadIcon, count: 0 },
  { item: dissatisfiedIcon, count: 0 },
  { item: surprisedIcon, count: 0 },
  { item: smiledIcon, count: 0 },
];

const FeedbackBlock: FC<{open: boolean}> = ({ open }): JSX.Element => {
  const [feedbackVisibility, setFeedbackVisibility] = useState(false);
  const [reactions, setReactions] = useState([{ item: thumbsUpIcon, count: 0 }]);

  useEffect(() => {
    if (open) {
      setFeedbackVisibility(true);
    } else {
      setFeedbackVisibility(false);
    }
  }, [open]);

  useEffect(() => {
    setReactions(defaultReactionsArray)
  }, []);
  

  return (
    <div
      className={`${styles.feedback} ${
        feedbackVisibility && styles.feedbackVisibility
      }`}
    >
      {/* <p className={styles.feedbackText}>
      Классные у тебя увлечения, я тоже играю в настолки, любимая игра
      — Эволюция. Люблю еще музыку
    </p> */}
      <textarea
        className={styles.feedbackTextArea}
        placeholder="Обратная связь"
      ></textarea>
      <div className={styles.feedbackReactions}>
        {reactions?.map((reaction:any ,index:number) => (
          <div key={index} className={styles.feedbackReaction} >
            <img
              className={styles.feedbackReactionImg}
              src={reaction.item}
              alt="emoji"
            />
           {reaction.count > 0 && <p className={styles.feedbackReactionCount}>{reaction.count}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackBlock;
