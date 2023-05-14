import React from "react";

const GitLogo = (props: { className: string }) => {
  return (
    <svg
      className={"default-logo " + props.className}
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 135.41 135.41"
    >
      <path
        style={{
          fill: "none",
          strokeLinejoin: "round",
          strokeWidth: "3px",
        }}
        d="M139,131.14l24.51-24.51a9.38,9.38,0,0,0,0-13.26L106.63,36.54a9.38,9.38,0,0,0-13.26,0l-6.73,6.73a6.69,6.69,0,0,0,0,9.47l8.54,8.55a9.37,9.37,0,0,1,3.14-.53,9.74,9.74,0,0,1,9.75,9.75,9.37,9.37,0,0,1-.53,3.14l15.14,15.14a9.56,9.56,0,0,1,3.56-.68,9.77,9.77,0,1,1-9,6.14L102.48,79.54v37.63a9.75,9.75,0,1,1-7.74,0V79.56a9.69,9.69,0,0,1-6.16-9,9.59,9.59,0,0,1,.87-4l-8.29-8.28a6.69,6.69,0,0,0-9.47,0L36.54,93.37a9.38,9.38,0,0,0,0,13.26l56.83,56.83a9.38,9.38,0,0,0,13.26,0L139,131.14"
        transform="translate(-32.29 -32.29)"
      />
    </svg>
  );
};

export default GitLogo;
