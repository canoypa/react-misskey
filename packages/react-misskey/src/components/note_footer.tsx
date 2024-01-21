import { FC, PropsWithChildren } from "react";
import styles from "./note_footer.module.css";

export const NoteFooter: FC<PropsWithChildren> = ({ children }) => {
  return <footer className={styles.root}>{children}</footer>;
};
