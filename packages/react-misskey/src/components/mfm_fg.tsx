import type mfm from "mfm-js";
import { FC, PropsWithChildren } from "react";
import { mfmArg, mfmColorArg } from "../core/mfm_args";

type Props = PropsWithChildren & {
  node: mfm.MfmFn;
};
export const MfmFg: FC<Props> = ({ node, children }) => {
  const color = mfmArg(mfmColorArg(node.props.args.color), "rgb(255 0 0)");

  return (
    <span style={{ display: "inline-block", color: color }}>{children}</span>
  );
};
