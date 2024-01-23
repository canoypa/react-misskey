import type mfm from "mfm-js";
import { FC, PropsWithChildren } from "react";
import { mfmArg } from "../core/mfm_args";

type Props = PropsWithChildren & {
  node: mfm.MfmFn;
};
export const MfmRotate: FC<Props> = ({ node, children }) => {
  const deg = mfmArg(node.props.args.deg, "0", "90");

  return (
    <span
      style={{
        display: "inline-block",
        transform: `rotate(${deg}deg)`,
        transformOrigin: "center",
      }}
    >
      {children}
    </span>
  );
};
