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
import { getReactionsData } from "../../utils/api/api";

export const defaultReactionsArray = [
  { item: thumbsUpIcon, count: 0 },
  { item: thumbsDownIcon, count: 0 },
  { item: waveIcon, count: 0 },
  { item: funnyIcon, count: 0 },
  { item: likedIcon, count: 0 },
  { item: sadIcon, count: 0 },
  { item: dissatisfiedIcon, count: 0 },
  { item: surprisedIcon, count: 0 },
  { item: smiledIcon, count: 0 },
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
  const [reactians, setReactions] = useState(null);

  useEffect(() => {
    let reactionsForMainPage = null;
    console.log(userData.reactians)
    if (userData.reactians) {
      if (
        location === ("/" || `cohort/:${userData._id}`)
      ) {
        reactionsForMainPage = userData.reactians.items.filter(
          (item: any) => item.target === "hobby"
        ); console.log(reactionsForMainPage)
        reactionsForMainPage
          ? setReactions(reactionsForMainPage)
          : setReactions(null);
      }
    }
  }, []);

  useEffect(() => {
    if (open) {
      setFeedbackVisibility(true);
    } else {
      setFeedbackVisibility(false);
    }
  }, [open]);

  console.log(reactians);
  
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
        {/* {reactians && reactians.map((data: any, index: number) => (
            <div key={index} className={styles.feedbackReaction}>
              <img
                className={styles.feedbackReactionImg}
                src={data.item}
                alt="emoji"
              />
              <p className={styles.feedbackReactionCount}>{data.total.count}</p>
            </div>
          ))} */}

        {/* {reactions.isRequest
          ? reactions.reactionsData.map((reaction: any, index: number) => (
              <div key={index} className={styles.feedbackReaction}>
                <img
                  className={styles.feedbackReactionImg}
                  src={reaction.item}
                  alt="emoji"
                />
                {reaction.count > 0 && (
                  <p className={styles.feedbackReactionCount}>
                    {reaction.count}
                  </p>
                )}
              </div>
            ))
          : defaultReactionsArray.map((reaction: any, index: number) => (
              <div key={index} className={styles.feedbackReaction}>
                <img
                  className={styles.feedbackReactionImg}
                  src={reaction.item}
                  alt="emoji"
                />
                {reaction.count > 0 && (
                  <p className={styles.feedbackReactionCount}>
                    {reaction.count}
                  </p>
                )}
              </div>
            ))} */}
      </div>
    </div>
  );
};

export default FeedbackBlock;

// const [reactions, setReactions] = useState<any>([
//   { item: null, count: 0 },
// ]);

// const [commentsData, setCommentsData] = useState<any>({
//   isRequest: false,
//   hobby: null,
//   edu: null,
//   status: null,
//   job: null,
//   photo: null,
//   quote: null,
// });

// //Функция проверки есть ли комментарии
// const checkComments = (commentsData: TCommentsRequest) => {
//   return commentsData.items ? true : false;
// };

// //Функция фильтрации комментариев
// const filterComments = (target: string) => {
//   switch (target) {
//     case "hobby":
//       setCommentsData({ ...commentsData, hobby: target });
//       console.log("1");
//       break;
//     case "job":
//       setCommentsData({ ...commentsData, job: target });
//       console.log("2");
//       break;
//     case "status":
//       setCommentsData({ ...commentsData, status: target });
//       console.log("3");
//       break;
//     case "quote":
//       setCommentsData({ ...commentsData, quote: target });
//       console.log("4");
//       break;
//     case "photo":
//       setCommentsData({ ...commentsData, photo: target });
//       console.log("5");
//       break;
//     default:
//       break;
//   }
// };

// const getComments = useCallback(() => {
//   if (!commentsData.isRequest) {
//     getCommentsData().then((res) => {
//       if (checkComments(res)) {
//         const commentsDataArray = res.items;
//         for (let index = 0; index < commentsDataArray.length; index++) {
//           let commentData = commentsDataArray[index];
//           //Почините бекенд!
//           if (commentData.target === null) {
//             commentData.target = "photo"
//           }
//           filterComments(commentData.target);
//           console.log(commentsData)
//         }
//       }
//     });
//   }
//   console.log(commentsData);
// }, [profileID]);
