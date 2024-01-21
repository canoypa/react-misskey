import type mfm from "mfm-js";
import { FC, PropsWithChildren } from "react";
import styles from "./mfm_small.module.css";

type Props = PropsWithChildren & {
  node: mfm.MfmSmall;
};
export const MfmSmall: FC<Props> = ({ node, children }) => {
  return <small className={styles.root}>{children}</small>;
};
