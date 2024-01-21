import type mfm from "mfm-js";
import { FC, PropsWithChildren } from "react";
import "./mfm_spin.css";

type Props = PropsWithChildren & {
  node: mfm.MfmFn;
};
export const MfmSpin: FC<Props> = ({ node, children }) => {
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
  const direction = node.props.args.left
    ? "reverse"
    : node.props.args.alternate
    ? "alternate"
    : "normal";
  const name =
    node.props.args.x && node.props.args.y
      ? "mfm-animation-spin"
      : node.props.args.x
      ? "mfm-animation-spin-x"
      : node.props.args.y
      ? "mfm-animation-spin-y"
      : "mfm-animation-spin";

  return (
    <span
      style={{
        display: "inline-block",
        animation: `${speed} linear ${delay} infinite ${direction} both running ${name}`,
      }}
    >
      {children}
    </span>
  );
};