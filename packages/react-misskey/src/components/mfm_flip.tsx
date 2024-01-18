import type mfm from "mfm-js";
import { FC } from "react";
import { renderNodes } from "./mfm";

type Props = {
  node: mfm.MfmFn;
};
export const MfmFlip: FC<Props> = ({ node }) => {
  const args = node.props.args;
  const styles = {
    display: "inline-block",
    transform:
      !args.h && !args.v
        ? "scale(-1,1)"
        : `scale(${args.h ? -1 : 1},${args.v ? -1 : 1})`,
  };

  return <span style={styles}>{renderNodes(node.children)}</span>;
};
