import type mfm from "mfm-js";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  node: mfm.MfmFn;
};
export const MfmX: FC<Props> = ({ node, children }) => {
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
      {children}
    </span>
  );
};
