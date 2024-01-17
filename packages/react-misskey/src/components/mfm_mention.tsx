import clsx from "clsx";
import type mfm from "mfm-js";
import { FC } from "react";
import styles from "./mfm_mention.module.css";

type Props = {
  node: mfm.MfmMention;
  host: URL | string;
  isMe?: boolean;
};
export const MfmMention: FC<Props> = ({ node, host, isMe }) => {
  const userUrl = new URL(node.props.acct, `https://${host}`);
  const avatarUrl = new URL(`avatar/${node.props.acct}`, `https://${host}`);

  return (
    <a
      href={userUrl.toString()}
      target="_blank"
      rel="noreferrer"
      className={clsx(styles.root, isMe && styles.isMe)}
    >
      <img src={avatarUrl.toString()} alt="" className={styles.img} />
      <span>{node.props.acct}</span>
    </a>
  );
};
