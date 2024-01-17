import type mfm from "mfm-js";
import { FC } from "react";
import { renderNodes } from "./mfm";
import styles from "./mfm_quote.module.css";

type Props = {
  node: mfm.MfmQuote;
};
export const MfmQuote: FC<Props> = ({ node }) => {
  return <div className={styles.root}>{renderNodes(node.children)}</div>;
};
