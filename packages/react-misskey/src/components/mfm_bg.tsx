import type mfm from "mfm-js";
import { FC, PropsWithChildren } from "react";

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
  const colorArg =
    args.color === true
      ? "f00"
      : typeof args.color === "string"
      ? args.color
      : "f00";
  const hex = normalizeHex(colorArg);

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const a = parseInt(hex.slice(6, 8), 16) / 255;

  return {
    display: "inline-block",
    backgroundColor: `rgb(${r} ${g} ${b} / ${a})`,
  };
};

type Props = PropsWithChildren & {
  node: mfm.MfmFn;
};
export const MfmBg: FC<Props> = ({ node, children }) => {
  const styles = getStyles(node.props.args);

  return <span style={styles}>{children}</span>;
};
