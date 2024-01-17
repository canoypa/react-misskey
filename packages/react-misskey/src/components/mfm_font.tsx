import type mfm from "mfm-js";
import { FC } from "react";
import { renderNodes } from "./mfm";

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

type Props = {
  node: mfm.MfmFn;
};
export const MfmFont: FC<Props> = ({ node }) => {
  const styles = getStyles(node.props.args);

  if (!styles) {
    return <span>$[font {renderNodes(node.children)}]</span>;
  }

  return <span style={styles}>{renderNodes(node.children)}</span>;
};
