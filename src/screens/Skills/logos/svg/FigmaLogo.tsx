import React from "react";

const FigmaLogo = (props: { className: string }) => {
  return (
    <svg
      id="Layer_2"
      className={"default-logo " + props.className}
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 45 66"
    >
      <path
        d="M111,89.5a10,10,0,1,1-10,10,10,10,0,0,1,10-10m0-1a11,11,0,1,0,11,11,11,11,0,0,0-11-11Z"
        transform="translate(-77.5 -66.5)"
      />
      <path
        d="M99,89.5v20H88.5a10,10,0,0,1,0-20H99m1-1H88.5a11,11,0,0,0,0,22H100v-22Z"
        transform="translate(-77.5 -66.5)"
      />
      <path
        d="M99,67.5v20H88.5a10,10,0,0,1,0-20H99m1-1H88.5a11,11,0,0,0,0,22H100v-22Z"
        transform="translate(-77.5 -66.5)"
      />
      <path
        d="M111.5,67.5a10,10,0,0,1,0,20H101v-20h10.5m0-1H100v22h11.5a11,11,0,0,0,0-22Z"
        transform="translate(-77.5 -66.5)"
      />
      <path
        d="M99,111.5v9.89A10.11,10.11,0,0,1,88.89,131.5a10.25,10.25,0,0,1-10.39-9.85,10,10,0,0,1,10-10.15H99m1-1H88.5a11,11,0,0,0-11,11.16A11.26,11.26,0,0,0,88.89,132.5h0A11.1,11.1,0,0,0,100,121.39V110.53a0,0,0,0,0,0,0Z"
        transform="translate(-77.5 -66.5)"
      />
    </svg>
  );
};

export default FigmaLogo;
