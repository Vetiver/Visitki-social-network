import React, { FC } from "react";
import {HandySvg} from 'handy-svg';
import iconSrc from '../../../icons/placemark.svg';

const Loader: FC = () => {
  return (
    <HandySvg
        src={iconSrc}
        width="29"
        height="29"
    />
   );
};

export default Loader;


