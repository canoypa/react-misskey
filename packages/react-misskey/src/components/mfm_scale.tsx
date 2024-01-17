import type mfm from "mfm-js";
import { FC } from "react";
import { renderNodes } from "./mfm";

type Props = {
  node: mfm.MfmFn;
};
export const MfmScale: FC<Props> = ({ node }) => {
  const x =
    node.props.args.x === true
      ? 1
      : typeof node.props.args.x === "string"
      ? parseInt(node.props.args.x)
      : 1;
  const y =
    node.props.args.y === true
      ? 1
      : typeof node.props.args.y === "string"
      ? parseInt(node.props.args.y)
      : 1;

  return (
    <span
      style={{
        display: "inline-block",
        transform: `scale(${x}, ${y})`,
      }}
    >
      {renderNodes(node.children)}
    </span>
  );
};
