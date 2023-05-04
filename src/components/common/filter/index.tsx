const filter = () => {
  return (
    <svg style={{ position: "fixed", pointerEvents: "none" }}>
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
  );
};

export default filter;
