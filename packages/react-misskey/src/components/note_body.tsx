import { FC } from "react";
import { Mfm, MfmOptions } from "./mfm";
import styles from "./note_body.module.css";

type Props = {
  text: string;
  hasCw: boolean;
  mfmOptions: MfmOptions;
};
export const NoteBody: FC<Props> = ({ text, hasCw, mfmOptions }) => {
  if (hasCw) {
    return (
      <details className={styles.details}>
        <summary>
          <span className={styles.closed}>
            <b>もっと見る</b>
            <span>({text.length}文字)</span>
          </span>
          <span className={styles.opened}>
            <b>隠す</b>
          </span>
        </summary>
        <Mfm text={text} options={mfmOptions} />
      </details>
    );
  }

  return <Mfm text={text} options={mfmOptions} />;
};
