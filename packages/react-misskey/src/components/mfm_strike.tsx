import type mfm from "mfm-js";
import type { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  node: mfm.MfmStrike;
};
export const MfmStrike: FC<Props> = ({ node, children }) => {
  return <del>{children}</del>;
};
