import type mfm from "mfm-js";
import { FC } from "react";
import styles from "./mfm_inline_code.module.css";

type Props = {
  node: mfm.MfmInlineCode;
};
export const MfmInlineCode: FC<Props> = ({ node }) => {
  return <div className={styles.root}>{node.props.code}</div>;
};
