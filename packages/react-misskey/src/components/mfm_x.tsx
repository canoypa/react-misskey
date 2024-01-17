import type mfm from "mfm-js";
import { FC } from "react";
import { renderNodes } from "./mfm";

type Props = {
  node: mfm.MfmFn;
};
export const MfmX: FC<Props> = ({ node }) => {
  const zoom =
    node.props.name === "x2"
      ? 200
      : node.props.name === "x3"
      ? 400
      : node.props.name === "x4"
      ? 600
      : 100;

  return (
    <span
      style={{
        fontSize: `${zoom}%`,
      }}
    >
      {renderNodes(node.children)}
    </span>
  );
};
