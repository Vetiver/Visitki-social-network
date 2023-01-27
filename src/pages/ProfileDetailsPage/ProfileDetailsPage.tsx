import { FC, useState, useEffect } from "react";
import TelegramIcon from "../../components/Icons/TelegramIcon/TelegramIcon";
import GitHubIcon from "../../components/Icons/GitHubIcon/GitHubIcon";
import StatusIcon from "../../components/Icons/StatusIcon/StatusIcon";
import ChatIcon from "../../components/Icons/ChatIcon/ChatIcon";
import ProfilePhotoTest from "../../images/ProfilePhotoTest.jpg";
import ProfileDetailsOtherBlock from "../../components/ProfileDetailsOtherBlock/ProfileDetailsOtherBlock";
import styles from "./ProfileDetailsPage.module.css";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../utils/api/api";

interface ProfileDetailsProps {
  allUsers: any;
}

const ProfileDetailsPage: FC<ProfileDetailsProps> = ({ allUsers }) => {
  const tokenLocal = localStorage.getItem("token") || null;
  const [userInfo, setUserInfo] = useState<any>(null);
  const { id } = useParams();
  const main = allUsers.find((el: any) => el._id === id);

  useEffect(() => {
    if (main !== null) {
      getUserProfile(main._id).then((res) => setUserInfo(res));
    }
  }, []);

  const [theme, setTheme] = useState({
    profilePhotoStyle: "default",
    statusColor: "default",
    borderDetailsOther: "default",
  });

  return !!userInfo ? (
    <main className={styles.profileDetailsContainer}>
      {/* Верхняя часть профиля */}
      <div className={styles.profileDetailsMain}>
        {/* имя юзера */}
        <div className={styles.profileDetailsMainInfo}>
          <h1 className={styles.profileDetailsMainInfoName}>
            {userInfo.profile.name}
          </h1>
          <p className={styles.profileDetailsMainInfoTown}>
            {userInfo.profile.city.name}
          </p>
          <div className={styles.profileDetailsMainInfoIcons}>
            <a href={`https://t.me/${userInfo.profile.telegram}`}>
              <TelegramIcon />
            </a>
            <a href={`https://github.com/${userInfo.profile.github}`}>
              <GitHubIcon />
            </a>
          </div>
        </div>
        {/* фото юзера */}
        <div className={styles.profileDetailsMainInfoImgContainer}>
          <img
            className={`${styles.profileDetailsMainInfoImg} 
            ${
              theme.profilePhotoStyle === "romantic" &&
              styles.profileDetailsMainInfoImgRomantic
            }`}
            src={userInfo.profile.photo}
            alt="ProfilePhoto"
          />
          <div className={styles.profileDetailsMainInfoChatIcon}>
            <ChatIcon count={userInfo.info.edu.reactions} />
          </div>
        </div>
        {/* статус юзера */}
        <div className={styles.profileDetailsMainInfoStatus}>
          <div className={styles.profileDetailsMainInfoStatusIconContainer}>
            {/* Цвет в зависимости от темы передаем в stroke:#100C34 или #FF00A8  */}
            <StatusIcon
              stroke={theme.statusColor !== "default" ? "#FF00A8" : "#100C34"}
            />
          </div>

          <h3
            className={`${styles.profileDetailsMainInfoStatusText} ${
              theme.statusColor !== "default" &&
              styles.profileDetailsMainInfoColor
            }`}
          >
            {userInfo.profile.quote}
          </h3>
          <div className={styles.profileDetailsMainInfoStatusIcon}>
            <ChatIcon count={userInfo.info.status.reactions} />
          </div>
        </div>
        {/* хобби юзера */}
        <div className={`${styles.profileDetailsOther} ${styles.profileDetailsOther_hobby}`}>
          <ProfileDetailsOtherBlock
            theme={theme.borderDetailsOther !== "default" ? true : false}
            title="Увлечения"
            image={userInfo.info.hobby.image}
            description={userInfo.info.hobby.text}
          />
        </div>
        {/* семья юзера */}
        <div className={`${styles.profileDetailsOther} ${styles.profileDetailsOther_family}`}>
          <ProfileDetailsOtherBlock
            theme={theme.borderDetailsOther !== "default" ? true : false}
            title="Семья"
            image={userInfo.info.status.image}
            description={userInfo.info.status.text}
          />
        </div>
        {/* сфера юзера */}
        <div className={`${styles.profileDetailsOther} ${styles.profileDetailsOther_sphere}`}>
          <ProfileDetailsOtherBlock
            theme={theme.borderDetailsOther !== "default" ? true : false}
            title="сфера"
            description={userInfo.info.job.text}
          />
        </div>
        {/* учеба юзера */}
        <div className={`${styles.profileDetailsOther} ${styles.profileDetailsOther_study}`}>
          <ProfileDetailsOtherBlock
            theme={theme.borderDetailsOther !== "default" ? true : false}
            title="учеба"
            description={userInfo.info.edu.text}
          />
        </div>
      </div>

      {/* Нижняя часть с деталями */}
    </main>
  ) : null;
};

export default ProfileDetailsPage;
