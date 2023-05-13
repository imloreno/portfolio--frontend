import React from "react";

interface Props {
  className?: string;
}

const VsStudioLogo = (props: Props) => {
  return (
    <svg
      id="vscode"
      className={"default-logo " + props.className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 103 105"
    >
      <polygon id="wall" points="103 94 77 105 77 0 103 11 103 94" />
      <g id="shadow">
        <polygon points="103 94 77 105 0 79 103 94" />
      </g>
      <g id="icon">
        <polygon points="17.63 33.32 65.1 69.74 54.32 74.64 54.32 20.88 65.32 25.58 16.16 64.3 15.52 63.63 56.33 16.19 67.32 20.88 67.32 74.64 56.55 79.53 14.05 37.42 17.63 33.32" />
      </g>
    </svg>
  );
};

export default VsStudioLogo;
