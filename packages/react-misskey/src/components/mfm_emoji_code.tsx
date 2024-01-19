import clsx from "clsx";
import type mfm from "mfm-js";
import { FC } from "react";
import styles from "./mfm_emoji_code.module.css";

type Props = {
  node: mfm.MfmEmojiCode;
  host: string;
  emojiHost?: string;
  large?: boolean;
};
export const MfmEmojiCode: FC<Props> = ({ node, host, emojiHost, large }) => {
  const hostUrl = new URL(`https://${host}`);
  const imageUrl = emojiHost
    ? new URL(`emoji/${node.props.name}@${emojiHost}.webp`, hostUrl)
    : new URL(`emoji/${node.props.name}.webp`, hostUrl);

  const alt = `:${node.props.name}:`;

  return (
    <img
      src={imageUrl.toString()}
      alt={alt}
      title={alt}
      decoding="async"
      className={clsx(styles.root, large && styles.large)}
    />
  );
};
