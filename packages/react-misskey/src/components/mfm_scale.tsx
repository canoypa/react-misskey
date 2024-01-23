import type mfm from "mfm-js";
import { FC, PropsWithChildren } from "react";
import { mfmArg } from "../core/mfm_args";

type Props = PropsWithChildren & {
  node: mfm.MfmFn;
};
export const MfmScale: FC<Props> = ({ node, children }) => {
  const x = mfmArg(node.props.args.x, "1");
  const y = mfmArg(node.props.args.y, "1");

  return (
    <span
      style={{
        display: "inline-block",
        transform: `scale(${x}, ${y})`,
      }}
    >
      {children}
    </span>
  );
};
