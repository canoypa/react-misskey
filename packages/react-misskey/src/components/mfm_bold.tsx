import type mfm from "mfm-js";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  node: mfm.MfmBold;
};
export const MfmBold: FC<Props> = ({ node, children }) => {
  return <b>{children}</b>;
};
