import clsx from "clsx";
import { AnchorHTMLAttributes, FC, PropsWithChildren } from "react";
import styles from "./link.module.css";

type Props = Pick<
  AnchorHTMLAttributes<HTMLTrackElement>,
  "href" | "className"
> &
  PropsWithChildren & {};
export const Link: FC<Props> = ({ href, className, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={clsx(styles.root, className)}
    >
      {children}
    </a>
  );
};
