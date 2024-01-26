import type mfm from "mfm-js";
import type { FC, PropsWithChildren } from "react";
import { Link } from "./link";
import styles from "./mfm_link.module.css";

type Props = PropsWithChildren & {
  node: mfm.MfmLink;
};
export const MfmLink: FC<Props> = ({ node, children }) => {
  const url = new URL(node.props.url);

  return (
    <Link href={url.toString()} className={styles.root}>
      {children}
    </Link>
  );
};
