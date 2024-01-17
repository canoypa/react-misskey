import type mfm from "mfm-js";
import { FC } from "react";

type Props = {
  node: mfm.MfmText;
};
export const MfmText: FC<Props> = ({ node }) => {
  return node.props.text;
};
