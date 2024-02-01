import clsx from "clsx";
import type { FC } from "react";
import { blurhashAvgColor } from "../core/blurhash_avg_color";
import { DriveFile } from "../types/misskey";
import { NoteFile } from "./note_file";
import styles from "./note_files.module.css";

type Props = {
  files: DriveFile[];
};
export const NoteFiles: FC<Props> = ({ files }) => {
  return (
    <div
      className={clsx(styles.root, {
        [styles.singleFile]: files.length === 1,
        [styles.multiFile]: files.length > 1,
        [styles.twoFile]: files.length === 2,
        [styles.threeFile]: files.length === 3,
        [styles.fourFile]: files.length === 4,
      })}
    >
      {files.map((file) => (
        <div key={file.id} className={styles.imageContainer}>
          {file.isSensitive ? (
            // replaced element
            <canvas
              className={styles.image}
              style={{
                aspectRatio: `${file.properties.width}/${file.properties.height}`,
                backgroundColor: file.blurhash
                  ? blurhashAvgColor(file.blurhash)
                  : "black",
              }}
            />
          ) : (
            <NoteFile file={file} />
          )}
        </div>
      ))}
    </div>
  );
};
