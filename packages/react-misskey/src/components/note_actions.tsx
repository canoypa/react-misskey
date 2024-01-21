import { FC } from "react";
import { IconArrowBack, IconRepeat } from "./icons";
import styles from "./note_actions.module.css";

type Props = {
  repliesCount: number;
  renoteCount: number;
};
export const NoteActions: FC<Props> = ({ repliesCount, renoteCount }) => {
  return (
    <div className={styles.root}>
      <span className={styles.action}>
        <IconArrowBack />
        {repliesCount > 0 && (
          <span className={styles.actionCount}>{repliesCount}</span>
        )}
      </span>
      <span className={styles.action}>
        <IconRepeat />
        {renoteCount > 0 && (
          <span className={styles.actionCount}>{renoteCount}</span>
        )}
      </span>
    </div>
  );
};
