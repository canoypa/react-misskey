import { FC } from "react";
import { Note } from "../types/misskey";
import styles from "./note_reactions.module.css";

const resolveEmoji = (
  reference: string,
  reactionEmojis: Note["reactionEmojis"],
  host: string
) => {
  const hostUrl = new URL(`https://${host}`);

  if (reference.startsWith(":")) {
    const name = reference.replaceAll(/:/g, "");

    if (reference.includes("@.")) {
      return new URL(`emoji/${name}.webp`, hostUrl);
    }

    if (name in reactionEmojis) {
      return new URL(reactionEmojis[name]);
    }

    return null;
  }

  const code = reference.codePointAt(0)?.toString(16);
  return new URL(`twemoji/${code}.svg`, hostUrl);
};

type Props = {
  reactions: Note["reactions"];
  reactionEmojis: Note["reactionEmojis"];
  host: string;
};
export const NoteReactions: FC<Props> = ({
  reactions: reactionsProp,
  reactionEmojis,
  host,
}) => {
  const reactions = Object.entries(reactionsProp).sort(([, a], [, b]) => b - a);

  return (
    <div className={styles.root}>
      {reactions.map(([name, count]) => {
        const emojiUrl = resolveEmoji(name, reactionEmojis, host);

        return (
          <span key={name} className={styles.reaction}>
            {emojiUrl ? (
              <img src={emojiUrl.toString()} alt="" className={styles.emoji} />
            ) : (
              <span className={styles.emoji}>{name}</span>
            )}
            <span className={styles.count}>{count}</span>
          </span>
        );
      })}
    </div>
  );
};
