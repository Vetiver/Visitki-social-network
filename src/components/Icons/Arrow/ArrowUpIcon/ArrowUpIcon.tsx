import React, { FC } from "react";
import {HandySvg} from 'handy-svg';
import iconSrc from '../../../../icons/forms-icons/arrow_up.svg';

const ArrowUpIcon: FC = (): JSX.Element => {
  return (
    <HandySvg
        src={iconSrc}
        width="15"
        height="7.5"
    />
   );
};

export default ArrowUpIcon;

