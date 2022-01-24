import React from "react";

const filter = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: 0,
        height: 0,
        zIndex: "-1",
        overflow: "hidden",
      }}
    >
      <svg>
        <defs>
          <filter id="liquidFilter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
            <feColorMatrix
              in="name"
              mode="matrix"
              values="
          1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          0 0 0 30 -15
          "
            />
            <feBlend in="SourceGraphic" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default filter;
