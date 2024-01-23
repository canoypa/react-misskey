import type mfm from "mfm-js";
import type { FC } from "react";

type Props = {
  node: mfm.MfmMathBlock | mfm.MfmMathInline;
};
export const MfmMath: FC<Props> = ({ node }) => {
  return <code>{node.props.formula}</code>;
};
