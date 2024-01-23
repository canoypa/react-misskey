import type mfm from "mfm-js";
import { FC, PropsWithChildren } from "react";
import { mfmArg } from "../core/mfm_args";
import "./mfm_jelly.css";

type Props = PropsWithChildren & {
  node: mfm.MfmFn;
};
export const MfmJelly: FC<Props> = ({ node, children }) => {
  const speed = mfmArg(node.props.args.speed, "1s");
  const delay = mfmArg(node.props.args.delay, "0s");

  return (
    <span
      style={{
        display: "inline-block",
        animation: `${speed} linear ${delay} infinite normal both running mfm-animation-jelly`,
      }}
    >
      {children}
    </span>
  );
};
