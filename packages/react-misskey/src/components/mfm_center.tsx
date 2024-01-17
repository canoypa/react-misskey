import type mfm from "mfm-js";
import { FC } from "react";
import { renderNodes } from "./mfm";
import styles from "./mfm_center.module.css";

type Props = {
  node: mfm.MfmCenter;
};
export const MfmCenter: FC<Props> = ({ node }) => {
  return <div className={styles.root}>{renderNodes(node.children)}</div>;
};
