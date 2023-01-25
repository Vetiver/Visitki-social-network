import {
  FC,
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
} from "react";
import TelegramIcon from "../../components/Icons/TelegramIcon/TelegramIcon";
import GitHubIcon from "../../components/Icons/GitHubIcon/GitHubIcon";
import StatusIcon from "../../components/Icons/StatusIcon/StatusIcon";
import ChatIcon from "../../components/Icons/ChatIcon/ChatIcon";
import ProfileDetailsOtherBlock from "../../components/ProfileDetailsOtherBlock/ProfileDetailsOtherBlock";
import styles from "./ProfileDetailsPage.module.css";
import Preloader from "../../components/Preloader/Preloader";
import { getCommentsData, getUserProfile } from "../../utils/api/api";
import {
  TProfileDetailsID,
  TProfileID
} from "../../utils/types";
import { useLocation } from "react-router";

const ProfileDetailsPage: FC<TProfileDetailsID> = (): any => {
  const location = useLocation();
  const [userData, setUserData] = useState<TProfileID | null>(null);
  //С сервера не приходят данные о теме.
  //Варианты для тестирования "default", "daring", "romantic".
  const [theme, setTheme] = useState({
    profilePhotoStyle: "daring",
    statusColor: "default",
    borderDetailsOther: "default",
  });

  //Получение ID пользователя
  const profileID = useMemo(() => {
    return location.pathname.split(":")[1] || null;
  }, [location.pathname]);

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

  useEffect(() => {
    if (profileID) {
      getUserProfile(profileID).then((res: TProfileID) => setUserData(res));
    }
  }, []);

  return (
    <div className={styles.profileDetailsContainer}>
      {!userData ? (
        <Preloader />
      ) : (
        <>
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
              <div className={styles.profileDetailsMainInfoChatIcon}>
                <ChatIcon count={2} />
              </div>
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
              <div className={styles.profileDetailsMainInfoStatusIcon}>
                <ChatIcon count={1} />
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
