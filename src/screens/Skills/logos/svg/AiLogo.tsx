const AiLogo = (props: { className: string }) => {
  return (
    <svg
      id="ai"
      className={"default-logo " + props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="127.57"
      height="112.14"
      viewBox="0 0 127.57 112.14"
    >
      <polyline
        id="topleft"
        className="cls-1"
        points="126.07 110.64 1.5 110.64 1.5 1.5"
      />
      <polyline
        id="topright"
        className="cls-1"
        points="1.5 1.5 126.07 1.5 126.07 110.64"
      />
      <g>
        <polyline
          id="a1"
          className="cls-1"
          points="26.54 88.82 50.54 25.82 74.54 88.82"
        />
        <line
          id="a2"
          className="cls-2"
          x1="34.71"
          y1="66.82"
          x2="66.04"
          y2="66.82"
        />
        <line
          id="i"
          className="cls-3"
          x1="94.54"
          y1="88.82"
          x2="94.54"
          y2="42.82"
        />
        <circle id="point" cx="94.54" cy="27.82" r="6" />
      </g>
      <g id="light">
        <line
          className="light light--reverse"
          x1="102.55"
          y1="23.98"
          x2="108.91"
          y2="20.93"
        />
        <line className="light" x1="94.54" y1="11" x2="94.54" y2="18.14" />
        <line className="light" x1="81.37" y1="21.25" x2="86.12" y2="23.62" />
        <line className="light" x1="85.61" y1="14.68" x2="89.09" y2="19.63" />
        <line className="light" x1="103.07" y1="14.25" x2="99.16" y2="20.71" />
        <line className="light" x1="110.57" y1="28.71" x2="103.57" y2="28.32" />
        <line className="light" x1="80.57" y1="28.71" x2="86.07" y2="28.36" />
      </g>
    </svg>
  );
};

export default AiLogo;
