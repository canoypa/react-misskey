import type mfm from "mfm-js";
import { FC, PropsWithChildren } from "react";
import styles from "./mfm_center.module.css";

type Props = PropsWithChildren & {
  node: mfm.MfmCenter;
};
export const MfmCenter: FC<Props> = ({ node, children }) => {
  return <div className={styles.root}>{children}</div>;
};
