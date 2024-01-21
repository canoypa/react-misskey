import type mfm from "mfm-js";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  node: mfm.MfmFn;
};
export const MfmPosition: FC<Props> = ({ node, children }) => {
  const x =
    node.props.args.x === true
      ? 0
      : typeof node.props.args.x === "string"
      ? parseFloat(node.props.args.x)
      : 0;
  const y =
    node.props.args.y === true
      ? 0
      : typeof node.props.args.y === "string"
      ? parseFloat(node.props.args.y)
      : 0;

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
