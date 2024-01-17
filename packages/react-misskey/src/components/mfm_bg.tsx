import type mfm from "mfm-js";
import { FC } from "react";
import { renderNodes } from "./mfm";

const normalizeHex = (hex: string) => {
  if (hex.length === 3) {
    return `${hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]}ff`;
  }
  if (hex.length === 4) {
    return (
      hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3]
    );
  }
  if (hex.length === 6) {
    return `${hex}ff`;
  }
  return hex;
};

const getStyles = (args: mfm.MfmFn["props"]["args"]) => {
  const hex = normalizeHex((args.color ?? "f00") as string);

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const a = parseInt(hex.slice(6, 8), 16) / 255;

  return { backgroundColor: `rgb(${r} ${g} ${b} / ${a})` };
};

type Props = {
  node: mfm.MfmFn;
};
export const MfmBg: FC<Props> = ({ node }) => {
  const styles = getStyles(node.props.args);

  return <span style={styles}>{renderNodes(node.children)}</span>;
};
