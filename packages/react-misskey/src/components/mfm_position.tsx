import type mfm from "mfm-js";
import { FC, PropsWithChildren } from "react";
import { mfmArg } from "../core/mfm_args";

type Props = PropsWithChildren & {
  node: mfm.MfmFn;
};
export const MfmPosition: FC<Props> = ({ node, children }) => {
  const x = mfmArg(node.props.args.x, "0");
  const y = mfmArg(node.props.args.y, "0");

  return (
    <span
      style={{
        display: "inline-block",
        transform: `translate(${x}em, ${y}em)`,
      }}
    >
      {children}
    </span>
  );
};
