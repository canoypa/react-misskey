import type mfm from "mfm-js";
import { FC } from "react";
import { renderNodes } from "./mfm";
import styles from "./mfm_small.module.css";

type Props = {
  node: mfm.MfmSmall;
};
export const MfmSmall: FC<Props> = ({ node }) => {
  return <small className={styles.root}>{renderNodes(node.children)}</small>;
};
