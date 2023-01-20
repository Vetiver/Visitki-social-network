import React from "react";
import TelegramIcon from "../../components/Icons/TelegramIcon/TelegramIcon";
import GitHubIcon from "../../components/Icons/GitHubIcon/GitHubIcon";
import StatusIcon from "../../components/Icons/StatusIcon/StatusIcon";
import ChatIcon from "../../components/Icons/ChatIcon/ChatIcon";
import ProfilePhotoTest from "../../images/ProfilePhotoTest.jpg";
import styles from "./ProfileDetailsPage.module.css";

const ProfileDetailsPage = () => {
  return (
    <main className={styles.profileDetailsContainer}>
      {/* Верхняя часть профиля */}
      <div className={styles.profileDetailsMain}>
        <div className={styles.profileDetailsMainInfo}>
          <h1 className={styles.profileDetailsMainInfoName}>
            Виктория Листвиновская
          </h1>
          <p className={styles.profileDetailsMainInfoTown}>Калуга</p>
          <div className={styles.profileDetailsMainInfoIcons}>
            <TelegramIcon />
            <GitHubIcon />
          </div>
          </div>
          <div className={styles.profileDetailsMainInfoImgContainer}>
            <img src={ProfilePhotoTest} alt="ProfilePhoto" />
            {/* <ChatIcon /> */}
          </div>
          <div className={styles.profileDetailsMainInfoStatus}>
            <div className={styles.profileDetailsMainInfoStatusIconContainer}>
              {/* Цвет в зависимости от темы передаем в stroke:#000000 или #FF00A8  */}
              <StatusIcon stroke="#000000" />
            </div>

            <h3 className={styles.profileDetailsMainInfoStatusText}>
              Делай, что должно и будь, что будет.
            </h3>
          </div>
      </div>

      {/* Нижняя часть с деталями */}
      <div className={styles.profileDetailsOther}>
        {/* Тут надо будет сделать компонентом, их будет 4шт, с возможностью оставлять без фото.(пока что делаю только с фото)*/}

        <div className={styles.profileDetailsOtherBlock}>
          <h4 className={styles.profileDetailsOtherBlockTitle}>Увлечения</h4>
          <img
            className={styles.profileDetailsOtherBlockImg}
            src="https://icdn.lenta.ru/images/2021/09/15/18/20210915183555038/square_1280_125ceca6620766b9a6467fa3159615c9.jpg"
            alt="photo"
          />
          <p className={styles.profileDetailsOtherBlockDescription}>
            Увлекаюсь программированием, игрой на гитаре, вышиваю крестиком и
            играю в настолки. Увлекаюсь программированием, игрой на гитаре,
            вышиваю крестиком и играю в настолки. Увлекаюсь программированием,
            игрой на гитаре, вышиваю крестиком и играю в настолки.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProfileDetailsPage;
