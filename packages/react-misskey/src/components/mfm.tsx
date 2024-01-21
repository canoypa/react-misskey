import type mfm from "mfm-js";
import { parse as parseMfm, toString as toMfmString } from "mfm-js";
import { FC } from "react";
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

export const renderNode = (node: mfm.MfmNode) => {
  switch (node.type) {
    case "blockCode":
      return <MfmCodeBlock node={node} />;
    case "bold":
      return (
        <MfmBold node={node}>{renderNodes(node.children, options)}</MfmBold>
      );
    case "center":
      return (
        <MfmCenter node={node}>{renderNodes(node.children, options)}</MfmCenter>
      );
    case "emojiCode":
      return <MfmEmojiCode node={node} host={""} large />;
    case "fn": {
      switch (node.props.name) {
        case "bg":
          return (
            <MfmBg node={node}>{renderNodes(node.children, options)}</MfmBg>
          );
        case "blur":
          return (
            <MfmBlur node={node}>{renderNodes(node.children, options)}</MfmBlur>
          );
        case "bounce":
          return (
            <MfmBounce node={node}>
              {renderNodes(node.children, options)}
            </MfmBounce>
          );
        case "fg":
          return (
            <MfmFg node={node}>{renderNodes(node.children, options)}</MfmFg>
          );
        case "flip":
          return (
            <MfmFlip node={node}>{renderNodes(node.children, options)}</MfmFlip>
          );
        case "font":
          return (
            <MfmFont node={node}>{renderNodes(node.children, options)}</MfmFont>
          );
        case "jelly":
          return (
            <MfmJelly node={node}>
              {renderNodes(node.children, options)}
            </MfmJelly>
          );
        case "jump":
          return (
            <MfmJump node={node}>{renderNodes(node.children, options)}</MfmJump>
          );
        case "position":
          return (
            <MfmPosition node={node}>
              {renderNodes(node.children, options)}
            </MfmPosition>
          );
        case "rainbow":
          return (
            <MfmRainbow node={node}>
              {renderNodes(node.children, options)}
            </MfmRainbow>
          );
        case "rotate":
          return (
            <MfmRotate node={node}>
              {renderNodes(node.children, options)}
            </MfmRotate>
          );
        case "scale":
          return (
            <MfmScale node={node}>
              {renderNodes(node.children, options)}
            </MfmScale>
          );
        case "shake":
          return (
            <MfmShake node={node}>
              {renderNodes(node.children, options)}
            </MfmShake>
          );
        case "sparkle":
          return toMfmString(node);
        case "spin":
          return (
            <MfmSpin node={node}>{renderNodes(node.children, options)}</MfmSpin>
          );
        case "tada":
          return (
            <MfmTada node={node}>{renderNodes(node.children, options)}</MfmTada>
          );
        case "twitch":
          return (
            <MfmTwitch node={node}>
              {renderNodes(node.children, options)}
            </MfmTwitch>
          );
        case "x2":
          return <MfmX node={node}>{renderNodes(node.children, options)}</MfmX>;
        case "x3":
          return <MfmX node={node}>{renderNodes(node.children, options)}</MfmX>;
        case "x4":
          return <MfmX node={node}>{renderNodes(node.children, options)}</MfmX>;
        default:
          return toMfmString(node);
      }
    }
    case "hashtag":
      return <MfmHashtag node={node} host={""} />;
    case "inlineCode":
      return <MfmInlineCode node={node} />;
    case "italic":
      return toMfmString(node);
    case "link":
      return <MfmLink node={node} host={""} />;
    case "mathBlock":
      return toMfmString(node);
    case "mathInline":
      return toMfmString(node);
    case "mention":
      return <MfmMention node={node} host={""} />;
    case "plain":
      return (
        <MfmPlain node={node}>{renderNodes(node.children, options)}</MfmPlain>
      );
    case "quote":
      return (
        <MfmQuote node={node}>{renderNodes(node.children, options)}</MfmQuote>
      );
    case "search":
      return <MfmSearch node={node} />;
    case "small":
      return (
        <MfmSmall node={node}>{renderNodes(node.children, options)}</MfmSmall>
      );
    case "strike":
      return toMfmString(node);
    case "text":
      return <MfmText node={node} />;
    case "unicodeEmoji":
      return <MfmUnicodeEmoji node={node} host={""} />;
    case "url":
      return toMfmString(node);
    default: {
      const check: never = node;
      return toMfmString(check);
    }
  }
};

export const renderNodes = (nodes: mfm.MfmNode[]) => {
  return nodes.map(renderNode);
};

type Props = {
  text: string;
};
export const Mfm: FC<Props> = ({ text }) => {
  return renderNodes(parseMfm(text));
};
