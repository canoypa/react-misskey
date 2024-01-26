import type mfm from "mfm-js";
import type { FC } from "react";
import { Link } from "./link";
import styles from "./mfm_url.module.css";

type Props = {
  node: mfm.MfmUrl;
  host: string;
};
export const MfmUrl: FC<Props> = ({ node, host }) => {
  const url = new URL(node.props.url);

  const isLocalLink = url.hostname === host;

  return (
    <Link href={url.toString()} className={styles.root}>
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
    </Link>
  );
};
