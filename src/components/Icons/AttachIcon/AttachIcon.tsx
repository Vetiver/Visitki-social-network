import React, { FC } from "react";
import {HandySvg} from 'handy-svg';
import iconSrc from '../../../icons/forms-icons/attach.svg';

const AttachIcon: FC = () => {
  return (
    <HandySvg
        src={iconSrc}
        width="16"
        height="19"
    />
   );
};

export default AttachIcon;
