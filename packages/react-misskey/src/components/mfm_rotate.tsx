import type mfm from "mfm-js";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  node: mfm.MfmFn;
};
export const MfmRotate: FC<Props> = ({ node, children }) => {
  const deg =
    node.props.args.deg === true
      ? 0
      : typeof node.props.args.deg === "string"
      ? parseFloat(node.props.args.deg)
      : 90;

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
