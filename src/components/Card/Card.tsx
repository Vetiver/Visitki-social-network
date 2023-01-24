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

  const openFeedback = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    if (id) {
      getUserProfile(id).then((res: TProfileID) => setUserData(res));
    }
  }, []);

  useEffect(() => {
    if (id) {
      getCommentsData().then((res: any) => setUserComments(res));
    }
  }, []);

  useEffect(() => {
    setHobbyComments(userComments.items?.filter((item:any)=>(item.target === 'hobby')));
    setEduComments(userComments.items?.filter((item:any)=>(item.target === 'edu')));
    setStatusComments(userComments.items?.filter((item:any)=>(item.target === 'status')));
    setJobComments(userComments.items?.filter((item:any)=>(item.target === 'job')));
    setPhotoComments(userComments.items?.filter((item:any)=>(item.target === null)));

  }, []);

  
  

    // setPhotoComments(userComments.items.filter((item:any) => item.target === null));
    // console.log(hobbyComments, eduComments, statusComments, jobComments);
    
  
  

  return (
    <div className={styles.card}>
      <Link to={`details/:${id}`}>
      <div className={styles.cardImgContainer}>
        <img
          className={styles.cardImg}
          src={img}
          alt="ProfilePhoto"
        />
        <FeedbackBlock open={isOpen}/>
      </div>
      
        <p className={styles.cardName}>{name}</p>
      </Link>
      <p className={styles.cardPlace}>{city}</p>

      <div className={styles.cardIcon} onClick={openFeedback}>
        <ChatIcon count={userData?.reactions} />
      </div>
    </div>
  );
};

export default Card;
