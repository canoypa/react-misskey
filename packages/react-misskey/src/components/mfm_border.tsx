import { MfmFn } from "mfm-js";
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

const resolveColor = (colorStr: string) => {
  const hex = normalizeHex(colorStr);

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const a = parseInt(hex.slice(6, 8), 16) / 255;

  return `rgb(${r} ${g} ${b} / ${a})`;
};

type Props = PropsWithChildren & {
  node: MfmFn;
};
export const MfmBorder: FC<Props> = ({ node, children }) => {
  const width =
    node.props.args.width === true
      ? 0
      : typeof node.props.args.width === "string"
      ? node.props.args.width
      : 1;
  const style =
    node.props.args.style === true
      ? "solid"
      : typeof node.props.args.style === "string"
      ? node.props.args.style
      : "solid";
  const color =
    node.props.args.color === true
      ? "var(--accent)"
      : typeof node.props.args.color === "string"
      ? resolveColor(node.props.args.color)
      : "var(--accent)";
  const radius =
    node.props.args.radius === true
      ? 0
      : typeof node.props.args.radius === "string"
      ? node.props.args.radius
      : undefined;

  return (
    <span
      style={{
        display: "inline-block",
        border: `${width}px ${style} ${color}`,
        borderRadius: radius ? `${radius}px` : undefined,
        overflow: "clip",
      }}
    >
      {children}
    </span>
  );
};
