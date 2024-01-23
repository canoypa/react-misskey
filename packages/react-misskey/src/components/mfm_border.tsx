import { MfmFn } from "mfm-js";
import { FC, PropsWithChildren } from "react";
import { mfmArg, mfmColorArg } from "../core/mfm_args";

type Props = PropsWithChildren & {
  node: MfmFn;
};
export const MfmBorder: FC<Props> = ({ node, children }) => {
  const { args } = node.props;
  const width = mfmArg(args.width, "0", "1");
  const style = mfmArg(args.style, "solid");
  const color = mfmArg(mfmColorArg(args.color), "var(--accent)");
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
