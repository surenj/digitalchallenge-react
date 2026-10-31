
const StrategyNetworkIcon = () => {
  const spokes = [
    [24, 24, 24, 5],
    [24, 24, 35, 8],
    [24, 24, 42, 17],
    [24, 24, 43, 27],
    [24, 24, 37, 38],
    [24, 24, 25, 43],
    [24, 24, 13, 39],
    [24, 24, 5, 29],
    [24, 24, 7, 17],
    [24, 24, 14, 8],
    [24, 24, 18, 3],
    [24, 24, 31, 4],
  ];

  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="23" stroke="#333" strokeWidth="0.7" />

      {spokes.map(([x1, y1, x2, y2], index) => (
        <g key={index}>
          <line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#222"
            strokeWidth="0.8"
          />
          <circle cx={x2} cy={y2} r="1.3" fill="#222" />
        </g>
      ))}

      <circle cx="24" cy="24" r="4" fill="#111" />
    </svg>
  );
};

export default StrategyNetworkIcon;
