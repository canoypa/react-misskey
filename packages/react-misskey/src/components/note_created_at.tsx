import { FC } from "react";
import { Note } from "../types/misskey";
import { Link } from "./link";
import styles from "./note_created_at.module.css";

type Props = {
  createdAt: Note["createdAt"];
  noteUrl: URL;
};
export const NoteCreatedAt: FC<Props> = ({ createdAt, noteUrl }) => {
  const date = new Date(createdAt);

  return (
    <div>
      <Link href={noteUrl.toString()} className={styles.root}>
        <time dateTime={createdAt}>
          {date.getFullYear()}/{date.getMonth() + 1}/{date.getDate()}{" "}
          {date.getHours()}:{date.getMinutes()}:
          {date.getSeconds().toString().padStart(2, "0")}
        </time>
      </Link>
    </div>
  );
};
