import type { FC } from "react";
import type { Note } from "../types/misskey";
import styles from "./note_poll.module.css";

type Props = {
  poll: NonNullable<Note["poll"]>;
};
export const NotePoll: FC<Props> = ({ poll }) => {
  const totalVotes = poll.choices.reduce((a, v) => a + v.votes, 0);

  // const isEnded = poll.expiresAt && new Date(poll.expiresAt) < new Date();

  return (
    <div className={styles.root}>
      <ul className={styles.choices}>
        {poll.choices.map((choice, i) => (
          <li key={`${i}_${choice.text}`} className={styles.choice}>
            <div
              className={styles.meter}
              style={{
                width: choice.votes && `${(choice.votes / totalVotes) * 100}%`,
              }}
            />
            <span className={styles.label}>
              <span>{choice.text}</span>
              <span className={styles.votes}>({choice.votes}票)</span>
            </span>
          </li>
        ))}
      </ul>
      <p>計{totalVotes}票</p>
    </div>
  );
};
