import type mfm from "mfm-js";
import { FC } from "react";
import { renderNodes } from "./mfm";
import "./mfm_rainbow.css";

type Props = {
  node: mfm.MfmFn;
};
export const MfmRainbow: FC<Props> = ({ node }) => {
  const speed =
    node.props.args.speed === true
      ? "1s"
      : typeof node.props.args.speed === "string"
      ? node.props.args.speed
      : "1s";

  return (
    <span
      style={{
        display: "inline-block",
        animation: `${speed} linear 0s infinite normal both running mfm-animation-rainbow`,
      }}
    >
      {renderNodes(node.children)}
    </span>
  );
};
