import React from "react";

const ReduxLogo = (props: { className: string }) => {
  return (
    <svg
      id="redux"
      className={"default-logo " + props.className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 144.48 136.89"
    >
      <g id="redux-2" data-name="redux">
        <path
          id="tree"
          style={{
            fill: "none",
            strokeMiterlimit: 10,
            strokeWidth: ".15rem",
            strokeLinecap: "round",
          }}
          d="M100,32.56c21,0,38,23.95,38,53.5s-17,53.5-38,53.5-38-24-38-53.5,17-53.5,38-53.5"
          transform="translate(-27.76 -31.56)"
        />
        <path
          id="two"
          style={{
            fill: "none",
            strokeMiterlimit: 10,
            strokeWidth: ".15rem",
            strokeLinecap: "round",
          }}
          d="M166.46,153.81c-11.67,17.44-41,18.26-65.59,1.83s-35-43.9-23.33-61.34,41-18.26,65.59-1.83,35,43.9,23.33,61.34"
          transform="translate(-27.76 -31.56)"
        />
        <path
          id="one"
          style={{
            fill: "none",
            strokeMiterlimit: 10,
            strokeWidth: ".15rem",
            strokeLinecap: "round",
          }}
          d="M33.54,153.81c11.67,17.44,41,18.26,65.59,1.83s35-43.9,23.33-61.34S81.42,76,56.87,92.47s-35,43.9-23.33,61.34"
          transform="translate(-27.76 -31.56)"
        />
      </g>
    </svg>
  );
};

export default ReduxLogo;
