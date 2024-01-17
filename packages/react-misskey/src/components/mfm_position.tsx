import type mfm from "mfm-js";
import { FC } from "react";
import { renderNodes } from "./mfm";

type Props = {
  node: mfm.MfmFn;
};
export const MfmPosition: FC<Props> = ({ node }) => {
  const x =
    node.props.args.x === true
      ? 0
      : typeof node.props.args.x === "string"
      ? parseInt(node.props.args.x)
      : 0;
  const y =
    node.props.args.y === true
      ? 0
      : typeof node.props.args.y === "string"
      ? parseInt(node.props.args.y)
      : 0;

  return (
    <span
      style={{
        display: "inline-block",
        transform: `translate(${x}em, ${y}em)`,
      }}
    >
      {renderNodes(node.children)}
    </span>
  );
};
