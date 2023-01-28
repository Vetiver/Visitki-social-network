import React, { FC } from "react";
import imgBorderSolid from "../../images/BorderSolid.png";
import imgBorderZig from "../../images/BorderZig.png";
import ChatIcon from "../Icons/ChatIcon/ChatIcon";
import styles from "./ProfileDetailsOtherBlock.module.css";

type TProfileDetailsOtherBlock = {
  theme: boolean;
  title?: string;
  image?: string;
  description?: string;
};

const ProfileDetailsOtherBlock: FC<TProfileDetailsOtherBlock> = ({
  theme,
  title,
  image,
  description,
}) => {
  const [isImg, setIsImg] = React.useState(false);

  React.useEffect(() => {
    if (image) {
      setIsImg(true);
    }
  }, [image]);

  return (
    <div className={styles.profileDetailsOtherBlock}>
      <img
        className={styles.profileDetailsOtherBlockBorder}
        src={theme ? imgBorderZig : imgBorderSolid}
        alt="border"
      />
      <h4 className={styles.profileDetailsOtherBlockTitle}>{title}</h4>
      {isImg && (
        <img
          className={styles.profileDetailsOtherBlockImg}
          src={image}
          alt="photo"
        />
      )}
      <p className={styles.profileDetailsOtherBlockDescription}>
        {description}
      </p>
      <div className={styles.profileDetailsOtherBlockChatIcon}>
        <ChatIcon count={1} />
      </div>
    </div>
  );
};

export default ProfileDetailsOtherBlock;
