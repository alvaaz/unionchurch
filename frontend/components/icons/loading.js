export const Loading = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      margin: 'auto',
      background: '0 0',
      display: 'block',
      shapeRendering: 'auto',
    }}
    width={24}
    height={24}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <circle cx={84} cy={50} r={10} fill="#fff">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="0.25s"
        calcMode="spline"
        keyTimes="0;1"
        values="10;0"
        keySplines="0 0.5 0.5 1"
        begin="0s"
      />
      <animate
        attributeName="fill"
        repeatCount="indefinite"
        dur="1s"
        calcMode="discrete"
        keyTimes="0;0.25;0.5;0.75;1"
        values="#ffffff;#ffffff;#ffffff;#ffffff;#ffffff"
        begin="0s"
      />
    </circle>
    <circle cx={16} cy={50} r={10} fill="#fff">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="1s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="0;0;10;10;10"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="0s"
      />
      <animate
        attributeName="cx"
        repeatCount="indefinite"
        dur="1s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="16;16;16;50;84"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="0s"
      />
    </circle>
    <circle cx={50} cy={50} r={10} fill="#fff">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="1s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="0;0;10;10;10"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-0.25s"
      />
      <animate
        attributeName="cx"
        repeatCount="indefinite"
        dur="1s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="16;16;16;50;84"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-0.25s"
      />
    </circle>
    <circle cx={84} cy={50} r={10} fill="#fff">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="1s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="0;0;10;10;10"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-0.5s"
      />
      <animate
        attributeName="cx"
        repeatCount="indefinite"
        dur="1s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="16;16;16;50;84"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-0.5s"
      />
    </circle>
    <circle cx={16} cy={50} r={10} fill="#fff">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="1s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="0;0;10;10;10"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-0.75s"
      />
      <animate
        attributeName="cx"
        repeatCount="indefinite"
        dur="1s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="16;16;16;50;84"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-0.75s"
      />
    </circle>
  </svg>
);