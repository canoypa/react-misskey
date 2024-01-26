import type mfm from "mfm-js";
import type { FC, PropsWithChildren } from "react";
import { IconClock } from "./icons";
import styles from "./mfm_unixtime.module.css";

type Props = PropsWithChildren & {
  node: mfm.MfmFn;
  dateTime: string;
};
export const MfmUnixtime: FC<Props> = ({ node, dateTime, children }) => {
  return (
    <time dateTime={dateTime} className={styles.root}>
      <IconClock />
      {children}
    </time>
  );
};
