import React, { FC } from "react";
import {HandySvg} from 'handy-svg';
import iconSrc from '../../../icons/forms-icons/calendar.svg';

const CalendarIcon: FC = () => {
  return (
    <HandySvg
        src={iconSrc}
        width="18"
        height="19"
    />
   );
};

export default CalendarIcon;
