import { FC } from "react";

interface TStatusIcon {
  stroke?: string;
}
const StatusIcon: FC<TStatusIcon> = ({ stroke }): JSX.Element => {
  return (
    <svg
      width="62"
      height="45"
      viewBox="0 0 62 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.859 23.8142L12.9521 24.4566H13.6013H24.7402V44.25H0.816176V23.7066V23.6655L0.81169 23.6247C0.198168 18.0406 3.90712 5.34774 24.7402 0.918908V8.64234C22.4304 9.2679 19.3294 10.6318 16.8538 12.897C14.139 15.3809 12.1576 18.9751 12.859 23.8142Z"
        stroke={stroke}
        strokeWidth="1.5"
      />
      <path
        d="M48.5455 23.8142L48.6387 24.4566H49.2878H60.4267V44.25H36.5027V23.7066V23.6655L36.4982 23.6247C35.8847 18.0406 39.5936 5.34774 60.4267 0.918908V8.64234C58.1169 9.2679 55.016 10.6318 52.5403 12.897C49.8256 15.3809 47.8441 18.9751 48.5455 23.8142Z"
        stroke={stroke}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default StatusIcon;
