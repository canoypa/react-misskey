import { FC } from "react";
import { User } from "../types/misskey";
import { Avatar } from "./avatar";
import { Link } from "./link";
import { Mfm, MfmOptions } from "./mfm";
import styles from "./note_header.module.css";

type Props = {
  user: User;
  userHost: string;
  mfmOptions: MfmOptions;
};
export const NoteHeader: FC<Props> = ({ user, userHost, mfmOptions }) => {
  const hostUrl = new URL(`https://${userHost}`);
  const userUrl = new URL(`@${user.username}`, hostUrl);

  return (
    <header className={styles.root}>
      <Link href={userUrl.toString()}>
        <Avatar
          avatarUrl={user.avatarUrl}
          avatarDecorations={user.avatarDecorations}
          avatarBlurhash={user.avatarBlurhash}
          isCat={user.isCat}
        />
      </Link>
      <div>
        <div>
          <Link href={userUrl.toString()} className={styles.name}>
            <Mfm text={user.name ?? ""} options={mfmOptions} />
          </Link>
        </div>
        <div>
          <span>@{user.username}</span>
          <span className={styles.host}>@{userHost}</span>
        </div>
      </div>
    </header>
  );
};
