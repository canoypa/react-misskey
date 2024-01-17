import type mfm from "mfm-js";
import { FC } from "react";
import { renderNodes } from "./mfm";

type Props = {
  node: mfm.MfmFn;
};
export const MfmRotate: FC<Props> = ({ node }) => {
  const deg =
    node.props.args.deg === true
      ? 0
      : typeof node.props.args.deg === "string"
      ? parseInt(node.props.args.deg)
      : 90;

  return (
    <span
      style={{
        display: "inline-block",
        transform: `rotate(${deg}deg)`,
        transformOrigin: "center",
      }}
    >
      {renderNodes(node.children)}
    </span>
  );
};
