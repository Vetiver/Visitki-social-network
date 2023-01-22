import React, { FC } from "react";
import TelegramIcon from "../../components/Icons/TelegramIcon/TelegramIcon";
import GitHubIcon from "../../components/Icons/GitHubIcon/GitHubIcon";
import StatusIcon from "../../components/Icons/StatusIcon/StatusIcon";
import ChatIcon from "../../components/Icons/ChatIcon/ChatIcon";
import ProfilePhotoTest from "../../images/ProfilePhotoTest.jpg";
import ProfileDetailsOtherBlock from "../../components/ProfileDetailsOtherBlock/ProfileDetailsOtherBlock";
import styles from "./ProfileDetailsPage.module.css";

const ProfileDetailsPage: FC = () => {
  return (
    <main className={styles.profileDetailsContainer}>
      {/* Верхняя часть профиля */}
      <div className={styles.profileDetailsMain}>
        <div className={styles.profileDetailsMainInfo}>
          <h1 className={styles.profileDetailsMainInfoName}>
            Билли Херрингтон
          </h1>
          <p className={styles.profileDetailsMainInfoTown}>Нью-Йорк</p>
          <div className={styles.profileDetailsMainInfoIcons}>
            <TelegramIcon />
            <GitHubIcon />
          </div>
        </div>
        <div className={styles.profileDetailsMainInfoImgContainer}>
          <img
            className={styles.profileDetailsMainInfoImg}
            src={ProfilePhotoTest}
            alt="ProfilePhoto"
          />
          {/* <ChatIcon /> */}
        </div>
        <div className={styles.profileDetailsMainInfoStatus}>
          <div className={styles.profileDetailsMainInfoStatusIconContainer}>
            {/* Цвет в зависимости от темы передаем в stroke:#100C34 или #FF00A8  */}
            <StatusIcon stroke="#100C34" />
          </div>

          <h3 className={styles.profileDetailsMainInfoStatusText}>
            Эй, приятель, я думаю, ты ошибся дверью, клуб любителей кожаных
            вещей двумя этажами ниже.
          </h3>
        </div>
      </div>

      {/* Нижняя часть с деталями */}
      <div className={styles.profileDetailsOther}>
        <ProfileDetailsOtherBlock
          theme={false}
          title="Увлечения"
          image="https://icdn.lenta.ru/images/2021/09/15/18/20210915183555038/square_1280_125ceca6620766b9a6467fa3159615c9.jpg"
          description="Увлекаюсь программированием, игрой на гитаре, вышиваю крестиком и
                      играю в настолки. Увлекаюсь программированием, игрой на гитаре,
                      вышиваю крестиком и играю в настолки. Увлекаюсь программированием,
                      игрой на гитаре, вышиваю крестиком и играю в настолки."
        />
      </div>
    </main>
  );
};

export default ProfileDetailsPage;
