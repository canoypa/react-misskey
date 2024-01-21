import type mfm from "mfm-js";
import { FC, PropsWithChildren } from "react";
import styles from "./mfm_blur.module.css";

type Props = PropsWithChildren & {
  node: mfm.MfmFn;
};
export const MfmBlur: FC<Props> = ({ node, children }) => {
  return <span className={styles.root}>{children}</span>;
};
