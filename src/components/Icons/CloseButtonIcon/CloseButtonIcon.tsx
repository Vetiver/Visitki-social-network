import React, { FC } from "react";
import {HandySvg} from 'handy-svg';
import iconSrc from '../../../icons/forms-icons/close_button.svg';

const CloseButton: FC = () => {
  return (
    <HandySvg
        src={iconSrc}
        width="14"
        height="14"
    />
   );
};

export default CloseButton;
