import { FC,  useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ChatIcon from "../../components/Icons/ChatIcon/ChatIcon";
import { getCommentsData, getUserProfile } from "../../utils/api/api";
import { TCardProps, TProfileID } from "../../utils/types";
import FeedbackBlock from "../FeedbackBlock/FeedbackBlock";
import styles from "./Card.module.css";

const Card:FC<TCardProps> = ({img, name, city, id}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState<TProfileID | null>(null);
  const [userComments, setUserComments] = useState<any>([]);
  const [hobbyComments, setHobbyComments] = useState<any>([]);
  const [eduComments, setEduComments] = useState<any>([]);
  const [statusComments, setStatusComments] = useState<any>([]);
  const [jobComments, setJobComments] = useState<any>([]);
  const [photoComments, setPhotoComments] = useState<any>([]);
  const [photoCommentsForId, setPhotoCommentsForId] = useState<any>([]);



  const openFeedback = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    if (id) {
      getUserProfile(id).then((res: TProfileID) => setUserData(res));
    }
  }, []);

//Получаем все комменты кучей
  useEffect(() => {
    if (id) {
      getCommentsData().then((res: any) => setUserComments(res));
    }
  }, []);
  //Фильтруем комменты и рассовываем по хранилищам, пока всё достал тут, но надо будет перенести
  useEffect(() => {
    setHobbyComments(userComments.items?.filter((item:any)=>(item.target === 'hobby')));
    setEduComments(userComments.items?.filter((item:any)=>(item.target === 'edu')));
    setStatusComments(userComments.items?.filter((item:any)=>(item.target === 'status')));
    setJobComments(userComments.items?.filter((item:any)=>(item.target === 'job')));
    setPhotoComments(userComments.items?.filter((item:any)=>(item.target === null)));
    if(photoComments){
      setPhotoCommentsForId(photoComments?.filter((item:any)=>(item.from._id === id)));
      
     }
  }, []);  


  
  
  

  return (
    <div className={styles.card}>
      <Link to={`details/:${id}`}>
      <div className={styles.cardImgContainer}>
        <img
          className={styles.cardImg}
          src={img}
          alt="ProfilePhoto"
        />
      </div>
      
        <p className={styles.cardName}>{name}</p>
      </Link>
      <FeedbackBlock open={isOpen} comment={''}/>

      <p className={styles.cardPlace}>{city}</p>

      <div className={styles.cardIcon} onClick={openFeedback}>
        <ChatIcon count={userData?.reactions} />
      </div>
    </div>
  );
};

export default Card;
