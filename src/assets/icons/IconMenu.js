import * as React from "react";

const SVGComponent = (props) => (
  <svg
    width={20}
    height={18}
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect y={16} width={20} height={2} fill="black" />
    <rect y={8} width={20} height={2} fill="black" />
    <rect width={20} height={2} fill="black" />
  </svg>
);

export default SVGComponent;
