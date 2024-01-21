import type mfm from "mfm-js";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  node: mfm.MfmFn;
};
export const MfmFlip: FC<Props> = ({ node, children }) => {
  const args = node.props.args;
  const styles = {
    display: "inline-block",
    transform:
      !args.h && !args.v
        ? "scale(-1,1)"
        : `scale(${args.h ? -1 : 1},${args.v ? -1 : 1})`,
  };

  return <span style={styles}>{children}</span>;
};
