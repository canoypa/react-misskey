import { MfmFn } from "mfm-js";
import { FC, PropsWithChildren } from "react";
import { mfmArg } from "../core/mfm_args";

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

const resolveColor = (colorStr: string | true) => {
  if (colorStr === true) {
    return colorStr;
  }

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
  const { args } = node.props;
  const width = mfmArg(args.width, "0", "1");
  const style = mfmArg(args.style, "solid");
  const color = mfmArg(resolveColor(args.color), "var(--accent)");
  const radius = mfmArg(args.radius, "0", null);

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
