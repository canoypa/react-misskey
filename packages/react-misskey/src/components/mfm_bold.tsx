import type mfm from "mfm-js";
import { FC } from "react";
import { renderNodes } from "./mfm";

type Props = {
  node: mfm.MfmBold;
};
export const MfmBold: FC<Props> = ({ node }) => {
  return <b>{renderNodes(node.children)}</b>;
};
