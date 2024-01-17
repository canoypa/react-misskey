import type mfm from "mfm-js";
import { FC } from "react";
import styles from "./mfm_link.module.css";

// TODO: 対応する https://misskey-hub.net/en/docs/for-users/features/mfm/#リンク

type Props = {
  node: mfm.MfmLink;
  host: string;
};
export const MfmLink: FC<Props> = ({ node, host }) => {
  const url = new URL(node.props.url);

  const isLocalLink = url.hostname === host;

  return (
    <a
      href={url.toString()}
      target="_blank"
      rel="noreferrer"
      className={styles.root}
    >
      {!isLocalLink && (
        <>
          <span className={styles.protocol}>{`${url.protocol}//`}</span>
          <span className={styles.hostname}>{url.hostname}</span>
          {url.port && <span>{`:${url.port}`}</span>}
        </>
      )}
      {isLocalLink && url.pathname === "/" && (
        <span className={styles.hostname}>{url.hostname}</span>
      )}
      <span className={styles.pathname}>
        {isLocalLink ? url.pathname.replace(/^\//, "") : url.pathname}
      </span>
      {url.search && <span className={styles.search}>{url.search}</span>}
      {url.hash && <span className={styles.hash}>{url.hash}</span>}
    </a>
  );
};
