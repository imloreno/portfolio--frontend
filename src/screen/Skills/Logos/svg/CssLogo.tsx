import React from "react";
const CssLogo = (props: { className: string }) => {
  return (
    <svg
      id="css"
      className={"skills__logo-svg " + props.className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 89.54 120.47"
    >
      <path
        d="M130.52,149.35l-27.45,8.9a10,10,0,0,1-6.23,0l-26.6-8.87a10,10,0,0,1-6.79-8.71L56.76,52a10,10,0,0,1,9.95-10.73h66.58a10,10,0,0,1,10,10.63l-5.85,88.63A10,10,0,0,1,130.52,149.35Z"
        transform="translate(-55.23 -39.76)"
        style={{
          strokeMiterlimit: 10,
          fill: "none",
          strokeWidth: "3px",
        }}
      />
      <path
        id="cssLetter"
        d="M80,69.07h38.87a2.38,2.38,0,0,1,1.53,4.21l-22,18.58a2.38,2.38,0,0,0,1.53,4.21h22.82a2.39,2.39,0,0,1,2.37,2.65l-2.55,22.9a2.4,2.4,0,0,1-1.52,2l-18.86,7.18a2.35,2.35,0,0,1-1.57,0l-19.66-6.26a2.37,2.37,0,0,1-1.66-2.11l-.89-13.38"
        transform="translate(-55.23 -39.76)"
        style={{
          strokeLinejoin: "round",
          fill: "none",
          strokeWidth: ".2rem",
        }}
      />
    </svg>
  );
};

export default CssLogo;
