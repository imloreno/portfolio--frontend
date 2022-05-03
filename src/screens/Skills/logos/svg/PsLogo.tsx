const PsLogo = (props: { className: string }) => {
  return (
    <svg
      id="psd"
      className={"default-logo " + props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="127.57"
      height="112.14"
      viewBox="0 0 127.57 112.14"
    >
      <g id="borders">
        <line
          id="right"
          className="cls-1"
          x1="126.07"
          y1="1.5"
          x2="126.07"
          y2="110.64"
        />
        <line
          id="top"
          className="cls-1"
          x1="1.5"
          y1="1.5"
          x2="126.07"
          y2="1.5"
        />
        <line
          id="left"
          className="cls-1"
          x1="1.5"
          y1="110.64"
          x2="1.5"
          y2="1.5"
        />
        <line
          id="bottom"
          className="cls-1"
          x1="126.07"
          y1="110.64"
          x2="1.5"
          y2="110.64"
        />
      </g>
      <path
        id="p"
        style={{
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "3px",
        }}
        d="M69.5,124.5l.26-50.86c17.86,0,27.65,1.9,28.21,15.28C98.5,101.5,87.49,102.5,69.5,102.5"
        transform="translate(-36.21 -43.93)"
      />
      <path
        id="s"
        style={{
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "3px",
        }}
        d="M133.24,90.1c-7.45-5-15.28-4.71-18.81,0s-3.08,13.2,9.4,15.28c14.11,2.35,9.41,18.8-1.17,18.8-11.76,0-14.11-5.87-14.11-5.87"
        transform="translate(-36.21 -43.93)"
      />
      <g id="lights">
        <line
          id="eleven"
          className="lights"
          x1="97.29"
          y1="32.57"
          x2="110.29"
          y2="19.57"
        />
        <line
          id="ten"
          className="lights"
          x1="79.29"
          y1="27.57"
          x2="87.29"
          y2="9.57"
        />
        <line
          id="nine"
          className="lights"
          x1="61.29"
          y1="22.57"
          x2="60.29"
          y2="8.57"
        />
        <line
          id="eight"
          className="lights"
          x1="23.29"
          y1="24.57"
          x2="8.29"
          y2="10.57"
        />
        <line
          id="seven"
          className="lights"
          x1="41.29"
          y1="21.57"
          x2="38.29"
          y2="8.57"
        />
        <line
          id="six"
          className="lights"
          x1="103.29"
          y1="91.57"
          x2="115.29"
          y2="103.57"
        />
        <line
          id="five"
          className="lights"
          x1="55.29"
          y1="89.57"
          x2="54.29"
          y2="103.57"
        />
        <line
          id="four"
          className="lights"
          x1="77.29"
          y1="91.57"
          x2="80.29"
          y2="101.57"
        />
        <line
          id="tree"
          className="lights"
          x1="22.29"
          y1="89.57"
          x2="10.29"
          y2="103.57"
        />
        <line
          id="two"
          className="lights"
          x1="22.29"
          y1="57.57"
          x2="7.29"
          y2="59.57"
        />
        <line
          id="one"
          className="lights"
          x1="104.29"
          y1="55.57"
          x2="119.29"
          y2="58.57"
        />
      </g>
    </svg>
  );
};

export default PsLogo;
