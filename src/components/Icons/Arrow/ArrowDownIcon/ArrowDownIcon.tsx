import React, { FC } from "react";
import {HandySvg} from 'handy-svg';
import iconSrc from '../../../../icons/forms-icons/arrow_down.svg';

const ArrowDownIcon: FC = (): JSX.Element => {
  return (
    <HandySvg
        src={iconSrc}
        width="15"
        height="7.5"
    />
   );
};

export default ArrowDownIcon;


