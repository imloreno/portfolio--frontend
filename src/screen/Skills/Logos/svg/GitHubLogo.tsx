import React from "react";
import { useEffect, useState } from "react";

const GitHubLogo = (props: { className: string }) => {
  const [isHover, setIsHover] = useState(false);
  const [tail, setTail] = useState(true);
  const [eyes, setEyes] = useState(false);

  useEffect(() => {
    if (isHover) {
      const INTERVAL = setInterval(() => {
        setTail(!tail);
      }, 150);
      return () => clearInterval(INTERVAL);
    }
  }, [tail, isHover]);

  useEffect(() => {
    if (isHover) {
      const INTERVAL = setInterval(() => {
        setEyes(true);
        setTimeout(() => setEyes(false), 200);
      }, 1000);
      return () => clearInterval(INTERVAL);
    }
  }, [isHover, eyes]);

  return (
    <svg
      id="github"
      className={"default-logo " + props.className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80.13 85.17"
      onMouseOut={() => {
        setIsHover(false);
      }}
      onMouseOver={() => {
        setIsHover(true);
      }}
    >
      <path
        id="tail"
        d={
          !tail
            ? "M27.62,69c-4.54.91-9.08,1.79-13.92-.82-5.06-2.77-.15-9.29-2-10.58-2.35-1.55-4.92,8.28-1.5,11.9,2.58,2.42,5.84,4.17,17.45,4.5Z"
            : "M29.74,69c-4.54.91-12.11.27-16.95-2.34C7.73,63.89,2.5,71.09,3.86,72.51c.81.86,4.1-5.87,8.57-2.8C15.5,71.82,20.22,74.26,29.8,74Z"
        }
      />
      <path
        id="body"
        d="M24.82,84c2.94,1.07,5.06.53,5.06-2.49s-.11-9.81-.11-9.81a48,48,0,0,1,.3-7.58,12.29,12.29,0,0,1,3.39-7.28c-4.07-.36-17-1.82-22.25-13.18S9.5,18.48,14.32,15.16C13,12.59,12.25,5.48,14.75.62c5.85-.64,15,5.65,15,5.65a53.06,53.06,0,0,1,27.35,0S65.89-.26,72.1.58C75,5.12,74,12.84,72.82,15.27a21.37,21.37,0,0,1,5.43,11.57c1.07,7.28-.61,13.82-4.57,20.35S60,56,53.48,56.89C55.57,58.18,56.64,61.12,57,64S57,80,57,82s1.73,3.52,4.66,2.28"
        transform="translate(-2.12 -0.01)"
      />
      <g id="eyes">
        <ellipse
          id="eyeLeft"
          cx="51.35"
          cy="38.26"
          rx="4.63"
          ry={!eyes ? "6.07" : "2"}
        />
        <ellipse
          id="eyeRight"
          cx="31.19"
          cy="38.26"
          rx="4.63"
          ry={!eyes ? "6.07" : "2"}
        />
      </g>
      <path
        id="face"
        d="M68,40.23C68,48.23,58.75,52,43.78,52s-25-4.77-25-12.75c0-3.62-1.75-16.3,2.36-17.9,5-1.93,14,1.93,22.21,1.93,9.34,0,17.8-4.33,22.68-1.71C69,23.16,68,37.23,68,40.23Z"
        transform="translate(-2.12 -0.01)"
      />
      <g id="moustache">
        <line className="cls-1" x1="22.99" y1="41.07" x2="0.5" y2="36.87" />
        <line className="cls-1" x1="22.17" y1="43.16" x2="0.73" y2="46.51" />
        <line className="cls-1" x1="22.15" y1="38.97" x2="0.92" y2="27.62" />
        <line className="cls-1" x1="60.71" y1="38.62" x2="79.63" y2="31.65" />
        <line className="cls-1" x1="60.08" y1="41.11" x2="78.58" y2="39.64" />
        <line className="cls-1" x1="60.79" y1="43.03" x2="79.5" y2="46.8" />
      </g>
      <path
        d="M37.76,65.61c-1.71,5.94-1.16,13.81-1.16,13.81"
        transform="translate(-2.12 -0.01)"
      />
      <path
        d="M49.94,65.73c1.15,3.71,1,11.86.86,13.57"
        transform="translate(-2.12 -0.01)"
      />
    </svg>
  );
};

export default GitHubLogo;
