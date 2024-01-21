import type mfm from "mfm-js";
import { FC, PropsWithChildren } from "react";
import styles from "./mfm_quote.module.css";

type Props = PropsWithChildren & {
  node: mfm.MfmQuote;
};
export const MfmQuote: FC<Props> = ({ node, children }) => {
  return <div className={styles.root}>{children}</div>;
};
