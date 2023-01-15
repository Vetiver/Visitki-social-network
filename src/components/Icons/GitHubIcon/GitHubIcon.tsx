import React, { FC } from "react";
import {HandySvg} from 'handy-svg';
import iconSrc from '../../../icons/web-services/GitHub-icons.svg';

const GitHubIcon: FC = () => {
  return (
    <HandySvg
        src={iconSrc}
        width="27"
        height="27"
    />
   );
};

export default GitHubIcon;
