import { parse as parseMfm } from "mfm-js";
import { FC } from "react";
import { MfmOptions, renderNodes } from "../core/mfm_renderer";
import styles from "./mfm.module.css";
import { MfmBg } from "./mfm_bg";
import { MfmBlur } from "./mfm_blur";
import { MfmBold } from "./mfm_bold";
import { MfmBounce } from "./mfm_bounce";
import { MfmCenter } from "./mfm_center";
import { MfmCodeBlock } from "./mfm_code_block";
import { MfmEmojiCode } from "./mfm_emoji_code";
import { MfmFg } from "./mfm_fg";
import { MfmFlip } from "./mfm_flip";
import { MfmFont } from "./mfm_font";
import { MfmHashtag } from "./mfm_hashtag";
import { MfmInlineCode } from "./mfm_inline_code";
import { MfmJelly } from "./mfm_jelly";
import { MfmJump } from "./mfm_jump";
import { MfmLink } from "./mfm_link";
import { MfmMention } from "./mfm_mention";
import { MfmPlain } from "./mfm_plain";
import { MfmPosition } from "./mfm_position";
import { MfmQuote } from "./mfm_quote";
import { MfmRainbow } from "./mfm_rainbow";
import { MfmRotate } from "./mfm_rotate";
import { MfmScale } from "./mfm_scale";
import { MfmSearch } from "./mfm_search";
import { MfmShake } from "./mfm_shake";
import { MfmSmall } from "./mfm_small";
import { MfmSpin } from "./mfm_spin";
import { MfmTada } from "./mfm_tada";
import { MfmText } from "./mfm_text";
import { MfmTwitch } from "./mfm_twitch";
import { MfmX } from "./mfm_x";

export {
  MfmBg,
  MfmBlur,
  MfmBold,
  MfmBounce,
  MfmCenter,
  MfmCodeBlock,
  MfmEmojiCode,
  MfmFg,
  MfmFlip,
  MfmFont,
  MfmHashtag,
  MfmInlineCode,
  MfmJelly,
  MfmJump,
  MfmLink,
  MfmMention,
  MfmPlain,
  MfmPosition,
  MfmQuote,
  MfmRainbow,
  MfmRotate,
  MfmScale,
  MfmSearch,
  MfmShake,
  MfmSmall,
  MfmSpin,
  MfmTada,
  MfmText,
  MfmTwitch,
  MfmX,
};

export type { MfmOptions };

type Props = {
  text: string;
  options: MfmOptions;
};
export const Mfm: FC<Props> = ({ text, options }) => {
  return (
    <div className={styles.root}>{renderNodes(parseMfm(text), options)}</div>
  );
};
