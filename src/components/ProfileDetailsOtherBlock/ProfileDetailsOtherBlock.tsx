import { FC, useState, useEffect } from "react";
import imgBorderSolid from "../../images/BorderSolid.png";
import imgBorderZig from "../../images/BorderZig.png";
import FeedbackBlock from "../FeedbackBlock/FeedbackBlock";
import ChatIcon from "../Icons/ChatIcon/ChatIcon";
import styles from "./ProfileDetailsOtherBlock.module.css";

type TProfileDetailsOtherBlock = {
    theme: boolean,
    title?:string,
    image?: any,
    description?:string
};

const ProfileDetailsOtherBlock:FC<TProfileDetailsOtherBlock> = ({theme, title, image, description }): JSX.Element => {
    const [isImg, setIsImg] = useState(false)
    const [isOpenOtherFeedback, setIsOpenOtherFeedback] = useState(false);


    useEffect(()=>{
    if(image){
        setIsImg(true)
    }
    },[image])

    const openFeedbackInfoStatus = () => {
      setIsOpenOtherFeedback(!isOpenOtherFeedback);
    };
  


  return (
    <div className={styles.profileDetailsOtherBlock}>
      <img
        className={styles.profileDetailsOtherBlockBorder}
        src={theme? imgBorderZig : imgBorderSolid}
        alt="border"
      />
      <h4 className={styles.profileDetailsOtherBlockTitle}>{title}</h4>
      {isImg && <img
        className={styles.profileDetailsOtherBlockImg}
        src={image}
        alt="photo"
      />}
      <p className={styles.profileDetailsOtherBlockDescription}>
        {description}
      </p>
      <div className={styles.profileDetailsOtherBlockChatIcon} onClick={openFeedbackInfoStatus}>
          <ChatIcon count={1}/>
      </div>
        <FeedbackBlock open={isOpenOtherFeedback} size="forDetails"/>
    </div>
  );
};

export default ProfileDetailsOtherBlock;
