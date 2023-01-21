import React from 'react'
import { Link } from "react-router-dom";
import ChatIcon from "../../components/Icons/ChatIcon/ChatIcon";
import thumbsUpIcon from "../../icons/reactions/👍.svg"
import styles from "./Card.module.css"

const Card = () => {
  return (
    <div className={styles.card}>
    <div className={styles.cardImgContainer}>
      <img
        className={styles.cardImg}
        src="https://icdn.lenta.ru/images/2021/09/15/18/20210915183555038/square_1280_125ceca6620766b9a6467fa3159615c9.jpg"
        alt=""
      />
      <div className={styles.cardImgFeedback}>
        {/* <p className={styles.cardImgFeedbackText}>
          Классные у тебя увлечения, я тоже играю в настолки, любимая игра
          — Эволюция. Люблю еще музыку
        </p> */}
        <textarea
          className={styles.cardImgFeedbackTextArea}
          placeholder="Обратная связь"
        ></textarea>
        <div className={styles.cardImgFeedbackReactions}>
            <div className={styles.cardImgFeedbackReaction}>
                <img className={styles.cardImgFeedbackReactionImg} src={thumbsUpIcon} alt="emoji" />
                <p className={styles.cardImgFeedbackReactionCount}>99+</p>
            </div>
        </div>
      </div>
    </div>
    <Link to="details">
      <p className={styles.cardName}>Степанов Дмитрий</p>
    </Link>
    <p className={styles.cardPlace}>Жемчужное Костромской обл</p>

    <div className={styles.cardIcon}>
      <ChatIcon count={2} />
    </div>
  </div>
  )
}

export default Card