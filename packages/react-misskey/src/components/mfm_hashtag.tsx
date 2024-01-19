import type mfm from "mfm-js";
import { FC } from "react";
import { Link } from "./link";
import styles from "./mfm_hashtag.module.css";

type Props = {
  node: mfm.MfmHashtag;
  host: string;
};
export const MfmHashtag: FC<Props> = ({ node, host }) => {
  const hostUrl = new URL(`https://${host}`);
  const url = new URL(`tags/${node.props.hashtag}`, hostUrl);

  return (
    <Link href={url.toString()} className={styles.root}>
      #{node.props.hashtag}
    </Link>
  );
};
