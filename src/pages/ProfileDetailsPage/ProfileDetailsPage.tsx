import { FC, useState, useContext, useEffect } from "react";
import TelegramIcon from "../../components/Icons/TelegramIcon/TelegramIcon";
import GitHubIcon from "../../components/Icons/GitHubIcon/GitHubIcon";
import StatusIcon from "../../components/Icons/StatusIcon/StatusIcon";
import ChatIcon from "../../components/Icons/ChatIcon/ChatIcon";
import ProfilePhotoTest from "../../images/ProfilePhotoTest.jpg";
import ProfileDetailsOtherBlock from "../../components/ProfileDetailsOtherBlock/ProfileDetailsOtherBlock";
import styles from "./ProfileDetailsPage.module.css";
import { AuthContext } from "../../services/AuthContext";
import Preloader from "../../components/Preloader/Preloader";
import { getUserProfile } from "../../utils/api/api";
import { TProfileDetailsID, TProfileID } from "../../utils/types";
import { useLocation } from "react-router";
import FeedbackBlock from "../../components/FeedbackBlock/FeedbackBlock";

const ProfileDetailsPage: FC<TProfileDetailsID> = ({ id }): JSX.Element => {
  const location = useLocation();
  //С сервера не приходят данные о теме.
  //Варианты для тестирования "default", "daring", "romantic".
  const [theme, setTheme] = useState({
    profilePhotoStyle: "default",
    statusColor: "default",
    borderDetailsOther: "default",
  });
  const [userData, setUserData] = useState<TProfileID | null>(null);
  const [isOpenPhotoFeedback, setIsOpenPhotoFeedback] = useState(false);
  const [isOpenInfoStatus, setIsOpenInfoStatus] = useState(false);
  const profileId = location.pathname.split(":")[1] || null;

  useEffect(() => {
    if (profileId) {
      getUserProfile(profileId).then((res: TProfileID) => setUserData(res));
    }
  }, []);

  const openFeedbackPhoto = () => {
    setIsOpenPhotoFeedback(!isOpenPhotoFeedback);
  };
  const openFeedbackInfoStatus = () => {
    setIsOpenInfoStatus(!isOpenInfoStatus);
  };


  return (
    <div className={styles.profileDetailsContainer}>
      {!userData ? (
        <Preloader />
      ) : (
        <>
          {/* Верхняя часть профиля */}
          <div className={styles.profileDetailsMain}>
            <div className={styles.profileDetailsMainInfo}>
              <h1 className={styles.profileDetailsMainInfoName}>
                {userData.profile.name}
              </h1>
              <p className={styles.profileDetailsMainInfoTown}>
                {userData.profile.city.name}
              </p>
              <div className={styles.profileDetailsMainInfoIcons}>
                <a
                  className={styles.link}
                  href={`https://t.me/s/${userData.profile.telegram}`}
                >
                  <TelegramIcon />
                </a>
                <a
                  className={styles.link}
                  href={`https://github.com/${userData.profile.github}`}
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>
            <div className={styles.profileDetailsMainInfoImgContainer}>
              <img
                className={`${styles.profileDetailsMainInfoImg} 
              ${
                (theme.profilePhotoStyle === "romantic" &&
                  styles.profileDetailsMainInfoImgRomantic) ||
                (theme.profilePhotoStyle === "daring" &&
                  styles.profileDetailsMainInfoImgDaring)
              }`}
                src={userData.profile.photo}
                alt="ProfilePhoto"
              />
              <div className={styles.profileDetailsMainInfoChatIcon} onClick={openFeedbackPhoto}>
                <ChatIcon count={2} />
              </div>
              {/* Размер forDetails */}
              <FeedbackBlock open={isOpenPhotoFeedback} size="forDetails"/>

            </div>
            <div className={styles.profileDetailsMainInfoStatus}>
              <div className={styles.profileDetailsMainInfoStatusIconContainer}>
                {/* Цвет в зависимости от темы передаем в stroke:#100C34 или #FF00A8  */}
                <StatusIcon
                  stroke={
                    theme.statusColor !== "default" ? "#FF00A8" : "#100C34"
                  }
                />
              </div>

              {/* Цитата с бека не комильфо, поэтому будет так */}
              <h3
                className={`${styles.profileDetailsMainInfoStatusText} ${
                  theme.statusColor !== "default" &&
                  styles.profileDetailsMainInfoColor
                }`}
              >
                Эй, приятель, я думаю, ты ошибся дверью, клуб любителей кожаных
                вещей двумя этажами ниже.
              </h3>
              <div className={styles.profileDetailsMainInfoStatusIcon} onClick={openFeedbackInfoStatus}>
                <ChatIcon count={1} />
              </div>
              {/* Размер forCards */}
              <div className={styles.profileDetailsMainInfoStatusFeedback}>
              <FeedbackBlock open={isOpenInfoStatus} size="forCards"/>

              </div>
            </div>
          </div>

          <div className={styles.profileDetailsOther}>
            {userData.info.hobby && (
              <ProfileDetailsOtherBlock
                theme={theme.borderDetailsOther !== "default" ? true : false}
                title="УВЛЕЧЕНИЯ"
                image={userData.info.hobby.image}
                description={userData.info.hobby.text}
              />
            )}
            {userData.info.status && (
              <ProfileDetailsOtherBlock
                theme={theme.borderDetailsOther !== "default" ? true : false}
                title="СЕМЬЯ"
                image={userData.info.status.image}
                description={userData.info.status.text}
              />
            )}
            {userData.info.job && (
              <ProfileDetailsOtherBlock
                theme={theme.borderDetailsOther !== "default" ? true : false}
                title="СФЕРА"
                description={userData.info.job.text}
              />
            )}
            {userData.info.edu && (
              <ProfileDetailsOtherBlock
                theme={theme.borderDetailsOther !== "default" ? true : false}
                title="УЧЕБА"
                description={userData.info.edu.text}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileDetailsPage;
