import type mfm from "mfm-js";
import { toString as toMfmString } from "mfm-js";
import { MfmBg } from "../components/mfm_bg";
import { MfmBlur } from "../components/mfm_blur";
import { MfmBold } from "../components/mfm_bold";
import { MfmBounce } from "../components/mfm_bounce";
import { MfmCenter } from "../components/mfm_center";
import { MfmCodeBlock } from "../components/mfm_code_block";
import { MfmEmojiCode } from "../components/mfm_emoji_code";
import { MfmFg } from "../components/mfm_fg";
import { MfmFlip } from "../components/mfm_flip";
import { MfmFont } from "../components/mfm_font";
import { MfmHashtag } from "../components/mfm_hashtag";
import { MfmInlineCode } from "../components/mfm_inline_code";
import { MfmJelly } from "../components/mfm_jelly";
import { MfmJump } from "../components/mfm_jump";
import { MfmLink } from "../components/mfm_link";
import { MfmMention } from "../components/mfm_mention";
import { MfmPlain } from "../components/mfm_plain";
import { MfmPosition } from "../components/mfm_position";
import { MfmQuote } from "../components/mfm_quote";
import { MfmRainbow } from "../components/mfm_rainbow";
import { MfmRotate } from "../components/mfm_rotate";
import { MfmScale } from "../components/mfm_scale";
import { MfmSearch } from "../components/mfm_search";
import { MfmShake } from "../components/mfm_shake";
import { MfmSmall } from "../components/mfm_small";
import { MfmSpin } from "../components/mfm_spin";
import { MfmTada } from "../components/mfm_tada";
import { MfmText } from "../components/mfm_text";
import { MfmTwitch } from "../components/mfm_twitch";
import { MfmUnicodeEmoji } from "../components/mfm_unicode_emoji";
import { MfmX } from "../components/mfm_x";

export type MfmOptions = {
  host: string;
  emojiHost: string;
  largeEmoji?: boolean;
};

export const renderNode = (node: mfm.MfmNode, options: MfmOptions) => {
  const { host, emojiHost, largeEmoji } = options;

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
      return (
        <MfmEmojiCode
          node={node}
          host={host}
          emojiHost={emojiHost}
          large={largeEmoji}
        />
      );
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
      return <MfmHashtag node={node} host={host} />;
    case "inlineCode":
      return <MfmInlineCode node={node} />;
    case "italic":
      return toMfmString(node);
    case "link":
      return <MfmLink node={node} host={host} />;
    case "mathBlock":
      return toMfmString(node);
    case "mathInline":
      return toMfmString(node);
    case "mention":
      return <MfmMention node={node} host={host} />;
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
      return <MfmUnicodeEmoji node={node} host={host} />;
    case "url":
      return toMfmString(node);
    default: {
      const check: never = node;
      return toMfmString(check);
    }
  }
};

export const renderNodes = (nodes: mfm.MfmNode[], options: MfmOptions) => {
  return nodes.map((node) => renderNode(node, options));
};
