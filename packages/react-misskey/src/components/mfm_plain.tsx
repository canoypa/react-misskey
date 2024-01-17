import type mfm from "mfm-js";
import { FC } from "react";
import { renderNodes } from "./mfm";

type Props = {
  node: mfm.MfmPlain;
};
export const MfmPlain: FC<Props> = ({ node }) => {
  return renderNodes(node.children);
};
