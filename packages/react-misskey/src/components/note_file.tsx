import type { FC } from "react";
import { DriveFile } from "../types/misskey";
import styles from "./note_files.module.css";

type Props = {
  file: DriveFile;
};
export const NoteFile: FC<Props> = ({ file }) => {
  if (file.type.startsWith("image")) {
    return (
      <img
        src={file.url}
        alt={file.name}
        title={file.name}
        width={file.properties.width}
        height={file.properties.height}
        className={styles.image}
      />
    );
  }

  if (file.type.startsWith("video")) {
    return (
      <video controls className={styles.image}>
        <source src={file.url} type={file.type} />
      </video>
    );
  }

  if (file.type.startsWith("audio")) {
    return (
      <audio controls className={styles.image}>
        <source src={file.url} type={file.type} />
      </audio>
    );
  }

  return null;
};
