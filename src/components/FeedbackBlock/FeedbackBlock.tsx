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

type TFeedbackBlock={
  open?: boolean,
  comment?:string,
  size?:string
}

const FeedbackBlock: FC<TFeedbackBlock> = ({ open, comment, size }): JSX.Element => {
  const [feedbackVisibility, setFeedbackVisibility] = useState(false);
  // размеры для size: forCards, forDetails
  const [feedbackSize, setFeedbackSize] = useState<any>("");
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
  
  useEffect(() => {
    setFeedbackSize(size)
  }, [size]);

  
  

  return (
    <div
      className={`${styles.feedback} ${
        feedbackVisibility && styles.feedbackVisibility}
        ${feedbackSize === "forDetails" && styles.feedbackForDetailsOther}
      `}
    >
      {comment && <p className={styles.feedbackText}>{comment}</p>}
      <textarea
        className={`${styles.feedbackTextArea} ${feedbackSize === "forDetails" && styles.feedbackTextAreaForDetailsOther}`}
        placeholder="Обратная связь"
      ></textarea>
      <div className={`${styles.feedbackReactions} ${feedbackSize === "forDetails" && styles.feedbackReactionsForDetailsOther}`}>
        {reactions?.map((reaction:any ,index:number) => (
          <div key={index} className={`${styles.feedbackReaction} ${feedbackSize === "forDetails" && styles.feedbackReactionForDetailsOther}`} >
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
