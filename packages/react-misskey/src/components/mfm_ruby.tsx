import type mfm from "mfm-js";
import type { FC, PropsWithChildren } from "react";
import styles from "./mfm_ruby.module.css";

type Props = PropsWithChildren & {
  node: mfm.MfmFn;
  ruby?: string;
};
export const MfmRuby: FC<Props> = ({ node, ruby, children }) => {
  return (
    <ruby>
      {children}
      <rp>(</rp>
      <rt className={styles.rubyText}>{ruby}</rt>
      <rp>)</rp>
    </ruby>
  );
};
