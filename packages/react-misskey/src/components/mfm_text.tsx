import type mfm from "mfm-js";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  node: mfm.MfmText;
};
export const MfmText: FC<Props> = ({ node, children }) => {
  return children;
};
