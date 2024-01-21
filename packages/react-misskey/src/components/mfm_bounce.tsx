import type mfm from "mfm-js";
import { FC, PropsWithChildren } from "react";
import "./mfm_bounce.css";

type Props = PropsWithChildren & {
  node: mfm.MfmFn;
};
export const MfmBounce: FC<Props> = ({ node, children }) => {
  const speed =
    node.props.args.speed === true
      ? "1s"
      : typeof node.props.args.speed === "string"
      ? node.props.args.speed
      : "1s";
  const delay =
    node.props.args.delay === true
      ? "0s"
      : typeof node.props.args.delay === "string"
      ? node.props.args.delay
      : "0s";

  return (
    <span
      style={{
        display: "inline-block",
        animation: `${speed} linear ${delay} infinite normal both running mfm-animation-bounce`,
      }}
    >
      {children}
    </span>
  );
};
