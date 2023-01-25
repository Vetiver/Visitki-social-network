import { FC, useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import ChatIcon from "../../components/Icons/ChatIcon/ChatIcon";
import { AuthContext } from "../../services/AuthContext";
import { getReactionsData, getUserProfile } from "../../utils/api/api";
import { TCardProps, TProfileID } from "../../utils/types";
import FeedbackBlock from "../FeedbackBlock/FeedbackBlock";
import styles from "./Card.module.css";

const Card: FC<TCardProps> = ({ img, name, city, id }): JSX.Element => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  //Данные хозяина карточки
  const [userData, setUserData] = useState<any | null>({
    data: null,
    reactians: null,
  });
  //данные авторизованного пользователя
  const { state } = useContext(AuthContext);

  const openFeedback = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    //Для администратора
    if (id && state.isAdmin) {
      console.log("admin");
      getUserProfile(id).then((resData: TProfileID) => {
        //Из другого места брать комменты для админа!!!!!
        getReactionsData(id).then((resReactians) => {
          setUserData({ ...userData, data: resData, reactians: resReactians });
        });
      });
      //если карточка пренадлежит не пользвоателю и не администратору
    } else if (id !== state.id) {
      console.log("user");
      setUserData({
        ...userData,
        data: state.userData
      });
    } else {
      console.log("gost");
      getUserProfile(id).then((resData: TProfileID) => {
        getReactionsData(id).then((resReactians) => {
          setUserData({ ...userData, data: resData, reactians: resReactians });
        });
      });
    }
  }, []);

  return (
    <div className={styles.card}>
      <Link to={`details/:${id}`}>
        <div className={styles.cardImgContainer}>
          <img className={styles.cardImg} src={img} alt="ProfilePhoto" />
          <FeedbackBlock open={isOpen} userData={userData} location={location.pathname} />
        </div>

        <p className={styles.cardName}>{name}</p>
      </Link>
      <p className={styles.cardPlace}>{city}</p>

      <div className={styles.cardIcon} onClick={openFeedback}>
        <ChatIcon
          count={userData.reactians ? userData.reactians.total : `${0}`}
        />
      </div>
    </div>
  );
};

export default Card;
