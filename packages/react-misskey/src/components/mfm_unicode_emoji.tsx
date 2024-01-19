import type mfm from "mfm-js";
import { FC } from "react";
import styles from "./mfm_unicode_emoji.module.css";

type Props = {
  node: mfm.MfmUnicodeEmoji;
  host: string;
};
export const MfmUnicodeEmoji: FC<Props> = ({ node, host }) => {
  const code = node.props.emoji.codePointAt(0)?.toString(16);

  const hostUrl = new URL(`https://${host}`);
  const imageUrl = new URL(`twemoji/${code}.svg`, hostUrl);

  const alt = node.props.emoji;

  return (
    <img
      src={imageUrl.toString()}
      alt={alt}
      title={alt}
      decoding="async"
      className={styles.root}
    />
  );
};
