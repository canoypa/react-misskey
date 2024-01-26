import type mfm from "mfm-js";
import type { FC, PropsWithChildren } from "react";
import styles from "./mfm_italic.module.css";

type Props = PropsWithChildren & {
  node: mfm.MfmItalic;
};
export const MfmItalic: FC<Props> = ({ node, children }) => {
  return <i className={styles.root}>{children}</i>;
};
