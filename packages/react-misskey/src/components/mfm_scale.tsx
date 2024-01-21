import type mfm from "mfm-js";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  node: mfm.MfmFn;
};
export const MfmScale: FC<Props> = ({ node, children }) => {
  const x =
    node.props.args.x === true
      ? 1
      : typeof node.props.args.x === "string"
      ? parseFloat(node.props.args.x)
      : 1;
  const y =
    node.props.args.y === true
      ? 1
      : typeof node.props.args.y === "string"
      ? parseFloat(node.props.args.y)
      : 1;

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
