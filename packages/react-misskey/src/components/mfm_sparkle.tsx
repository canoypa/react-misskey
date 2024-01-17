import type mfm from "mfm-js";
import { toString as toMfmString } from "mfm-js";
import { FC } from "react";

type Props = {
  node: mfm.MfmFn;
};
/** TODO */
export const MfmSparkle: FC<Props> = ({ node }) => {
  return toMfmString(node);
};
