import React, { FC } from "react";
import {HandySvg} from 'handy-svg';
import iconSrc from '../../../icons/web-services/Telegram-icons.svg';

const TelegramIcon: FC = () => {
  return (
    <HandySvg
        src={iconSrc}
        width="27"
        height="27"
    />
   );
};

export default TelegramIcon;


