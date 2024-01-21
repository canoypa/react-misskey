import type mfm from "mfm-js";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  node: mfm.MfmPlain;
};
export const MfmPlain: FC<Props> = ({ node, children }) => {
  return children;
};
