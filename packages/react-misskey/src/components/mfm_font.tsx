import type mfm from "mfm-js";
import { FC, PropsWithChildren } from "react";

const getStyles = (args: mfm.MfmFn["props"]["args"]) => {
  if (args.serif) {
    return { fontFamily: "serif" };
  }
  if (args.monospace) {
    return { fontFamily: "monospace" };
  }
  if (args.cursive) {
    return { fontFamily: "cursive" };
  }
  if (args.fantasy) {
    return { fontFamily: "fantasy" };
  }

  return null;
};

type Props = PropsWithChildren & {
  node: mfm.MfmFn;
};
export const MfmFont: FC<Props> = ({ node, children }) => {
  const styles = getStyles(node.props.args);

  if (!styles) {
    return <span>$[font {children}]</span>;
  }

  return <span style={styles}>{children}</span>;
};
