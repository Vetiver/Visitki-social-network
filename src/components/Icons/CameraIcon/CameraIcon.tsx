import React, { FC } from "react";
import {HandySvg} from 'handy-svg';
import iconSrc from '../../../icons/forms-icons/camera.svg';

const CameraIcon: FC = () => {
  return (
    <HandySvg
        src={iconSrc}
        width="20"
        height="17"
    />
   );
};

export default CameraIcon;
