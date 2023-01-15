import React, { FC } from "react";
import {HandySvg} from 'handy-svg';
import iconSrc from '../../../icons/chat_button.svg';

const ChatIcon: FC = () => {
  return (
    <HandySvg
        src={iconSrc}
        width="25"
        height="25"
    />
   );
};

export default ChatIcon;
