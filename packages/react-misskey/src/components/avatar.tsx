import clsx from "clsx";
import { FC } from "react";
import { blurhashAvgColor } from "../core/blurhash_avg_color";
import { User } from "../types/misskey";
import styles from "./avatar.module.css";

type Props = {
  avatarUrl: User["avatarUrl"];
  avatarDecorations: User["avatarDecorations"];
  avatarBlurhash: User["avatarBlurhash"];
  isCat: User["isCat"];
};
export const Avatar: FC<Props> = ({
  avatarUrl,
  avatarDecorations,
  avatarBlurhash,
  isCat,
}) => {
  return (
    <div className={styles.root}>
      {avatarUrl && (
        <img
          src={avatarUrl}
          alt=""
          loading="eager"
          decoding="async"
          width={58}
          height={58}
          className={styles.avatar}
        />
      )}
      {isCat && (
        <span
          className={styles.cat}
          style={{
            color: avatarBlurhash
              ? blurhashAvgColor(avatarBlurhash)
              : undefined,
          }}
        >
          <span className={clsx(styles.ear, styles.earR)} />
          <span className={clsx(styles.ear, styles.earL)} />
        </span>
      )}
      {avatarDecorations?.map((decoration) => (
        <img
          src={decoration.url}
          alt=""
          style={{
            rotate: decoration.angle
              ? `${decoration.angle * 360}deg`
              : undefined,
            scale: decoration.flipH ? "-1 1" : undefined,
            translate:
              decoration.offsetX || decoration.offsetY
                ? `${(decoration.offsetX ?? 0) * 100}% ${
                    (decoration.offsetY ?? 0) * 100
                  }%`
                : undefined,
          }}
          className={styles.decoration}
        />
      ))}
    </div>
  );
};
