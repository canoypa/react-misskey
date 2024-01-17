import type mfm from "mfm-js";
import { FC } from "react";
import styles from "./mfm_code_block.module.css";

type Props = {
  node: mfm.MfmCodeBlock;
};
export const MfmCodeBlock: FC<Props> = ({ node }) => {
  return (
    <pre className={styles.root}>
      <code className={styles.code}>{node.props.code}</code>
    </pre>
  );
};
