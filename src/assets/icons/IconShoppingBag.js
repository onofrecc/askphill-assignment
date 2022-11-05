import * as React from "react";

const SVGComponent = (props) => (
  <svg
    width={17}
    height={22}
    viewBox="0 0 17 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={0.75}
      y={5.25}
      width={15.5}
      height={15.5}
      stroke="black"
      strokeWidth={1.5}
    />
    <path
      d="M4.50032 7.5C4.33365 5.33333 4.90032 1 8.50032 1C12.1003 1 12.6669 5.33333 12.5002 7.5"
      stroke="black"
      strokeWidth={1.5}
    />
  </svg>
);

export default SVGComponent;
