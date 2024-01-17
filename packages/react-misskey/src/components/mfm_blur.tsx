import type mfm from "mfm-js";
import { FC } from "react";
import { renderNodes } from "./mfm";
import styles from "./mfm_blur.module.css";

type Props = {
  node: mfm.MfmFn;
};
export const MfmBlur: FC<Props> = ({ node }) => {
  return <span className={styles.root}>{renderNodes(node.children)}</span>;
};
