import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./note_container.module.css";

export const NoteContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <article className={clsx("embed-misskey-theme", styles.root)}>
      {children}
    </article>
  );
};
