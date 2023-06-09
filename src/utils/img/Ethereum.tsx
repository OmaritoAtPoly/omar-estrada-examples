import * as React from "react";

interface Props {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

function Ethereum2({fill, height= "1em", width= '"1em"', ...props}: Props) {
  return (
    <svg viewBox="0 0 128 128" width={width} height={height} {...props}>
      <linearGradient
        id="prefix__a"
        x1={11.85}
        x2={116.15}
        y1={116.15}
        y2={11.85}
        gradientTransform="matrix(1 0 0 -1 0 128)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#6E75B8" />
        <stop offset={1} stopColor="#495B9D" />
      </linearGradient>
      <path
        fill="url(#prefix__a)"
        d="M87.5 128h-47C18.1 128 0 109.9 0 87.5v-47C0 18.1 18.1 0 40.5 0h47C109.9 0 128 18.1 128 40.5v47c0 22.4-18.1 40.5-40.5 40.5z"
      />
      <path
        d="M67.2 89.2v22.7l28.2-39.5zm27.1-24.1l-27.1-45v32.7zm-27.1-9.8v28l26.9-15.7zm-29.4 9.8l27.1-45v32.7zm27.1-9.8v28L38 67.6zm-.1 33.9v22.7L36.7 72.4z"
        opacity={0.2}
      />
      <path
        fill="#fff"
        d="M65.2 87.2v22.7l28.2-39.5zm27.1-24.1l-27.1-45v32.7zm-27.1-9.8v28l26.9-15.7zm-29.4 9.8l27.1-45v32.7zm27.1-9.8v28L36 65.6zm-.1 33.9v22.7L34.7 70.4z"
      />
    </svg>
  );
}

const MemoEthereum2 = React.memo(Ethereum2);
export default MemoEthereum2;
