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
import hurtIcon from "../../icons/reactions/❤️.svg"
import styles from "./FeedbackBlock.module.css";

export const defaultReactionsArray = [
  { item: thumbsUpIcon, count: 0 },
  { item: thumbsDownIcon, count: 0 },
  { item: waveIcon, count: 0 },
  { item: smiledIcon, count: 0 },
  { item: sadIcon, count: 0 },
  { item: funnyIcon, count: 0 },
  { item: dissatisfiedIcon, count: 0 },
  { item: surprisedIcon, count: 0 },
  { item: likedIcon, count: 0 },
  { item: hurtIcon, count: 0 },
];

type TFeedbackBlock = {
  open: boolean;
  //Дописать тип для реакций
  userData: any;
  location: string;
};

const FeedbackBlock: FC<TFeedbackBlock> = ({
  open,
  userData,
  location,
}): JSX.Element => {
  const [feedbackVisibility, setFeedbackVisibility] = useState(false);
  const [reactions, setReactions] = useState<any>({
    reactionsData: null,
    emotionsData: null,
  });

  useEffect(() => {
    let reactionsForMainPage = null;
    let emotions = null;
    if (userData.reactions) {
      console.log(userData.reactions);

      if (location === ("/" || `cohort/:${userData._id}`)) {
        //Для страницы main отображаются реакции к hobby хозяина выбранной карточки
        reactionsForMainPage = userData.reactions.items.filter(
          (item: any) => item.target === "hobby"
        );
        emotions = reactionsForMainPage.filter((item: any) => item.emotion);
        //Проверяем, если в полученных реакциях есть emotion, то добавляем их в хранилище,
        //если нет, то добавляем только комментарии. Если нет ни комментариев ни смайликов,
        //то возвращаем исходное состояние.
        reactionsForMainPage
          ? emotions.lengh > 0
            ? setReactions({
                ...reactions,
                reactionsData: reactionsForMainPage,
                emotionsData: emotions,
              })
            : setReactions({
                ...reactions,
                reactionsData: reactionsForMainPage,
              })
          : setReactions({ reactionsData: null, emotionsData: null });
      }
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      setFeedbackVisibility(true);
    } else {
      setFeedbackVisibility(false);
    }
  }, [open]);

  return (
    <div
      className={`${styles.feedback} ${
        feedbackVisibility && styles.feedbackVisibility
      }`}
    >
      {reactions.reactionsData && (
        <p className={styles.feedbackText}>
          {reactions.reactionsData.map((reaction: any) => reaction.text)}
        </p>
      )}
      <textarea
        className={styles.feedbackTextArea}
        placeholder="Обратная связь"
      ></textarea>
      <div className={styles.feedbackReactions}>
        {reactions.emotians &&
          reactions.emotians.map((reaction: any, index: number) => (
            <div key={index} className={styles.feedbackReaction}>
              <img
                className={styles.feedbackReactionImg}
                src={reaction.item}
                alt="emoji"
              />
              {reaction.count > 0 && (
                <p className={styles.feedbackReactionCount}>{reaction.count}</p>
              )}
            </div>
          ))}
        {!reactions.emotians &&
          defaultReactionsArray.map((reaction: any, index: number) => (
            <div key={index} className={styles.feedbackReaction}>
              <img
                className={styles.feedbackReactionImg}
                src={reaction.item}
                alt="emoji"
              />
              {reaction.count > 0 && (
                <p className={styles.feedbackReactionCount}>{reaction.count}</p>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default FeedbackBlock;

