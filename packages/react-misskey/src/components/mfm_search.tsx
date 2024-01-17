import type mfm from "mfm-js";
import { FC } from "react";
import styles from "./mfm_search.module.css";

type Props = {
  node: mfm.MfmSearch;
};
export const MfmSearch: FC<Props> = ({ node }) => {
  return (
    <div className={styles.root}>
      <input
        type="search"
        placeholder={node.props.query}
        defaultValue={node.props.query}
        className={styles.input}
      />
      <button type="button" className={styles.button}>
        検索
      </button>
    </div>
  );
};
