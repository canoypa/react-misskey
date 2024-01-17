import clsx from "clsx";
import type mfm from "mfm-js";
import { toUnicode } from "punycode";
import { FC } from "react";
import styles from "./mfm_mention.module.css";

type Props = {
  node: mfm.MfmMention;
  host: URL | string;
  isMe?: boolean;
};
export const MfmMention: FC<Props> = ({ node, host, isMe }) => {
  const isRemote = node.props.host && host !== node.props.host;
  const remoteHost = isRemote ? node.props.host : null;

  const acct = remoteHost
    ? `@${node.props.username}@${toUnicode(remoteHost)}`
    : `@${node.props.username}`;

  const hostUrl = new URL(`https://${host}`);
  const url = new URL(acct, hostUrl);
  const avatarUrl = new URL(`avatar/${node.props.acct}`, hostUrl);

  return (
    <a
      href={url.toString()}
      target="_blank"
      rel="noreferrer"
      className={clsx(styles.root, isMe && styles.isMe)}
    >
      <img src={avatarUrl.toString()} alt="" className={styles.img} />
      <span>{acct}</span>
    </a>
  );
};
