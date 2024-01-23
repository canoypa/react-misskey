import type mfm from "mfm-js";
import { toString as toMfmString } from "mfm-js";
import { MfmBg } from "../components/mfm_bg";
import { MfmBlur } from "../components/mfm_blur";
import { MfmBold } from "../components/mfm_bold";
import { MfmBorder } from "../components/mfm_border";
import { MfmBounce } from "../components/mfm_bounce";
import { MfmCenter } from "../components/mfm_center";
import { MfmCodeBlock } from "../components/mfm_code_block";
import { MfmEmojiCode } from "../components/mfm_emoji_code";
import { MfmFg } from "../components/mfm_fg";
import { MfmFlip } from "../components/mfm_flip";
import { MfmFont } from "../components/mfm_font";
import { MfmHashtag } from "../components/mfm_hashtag";
import { MfmInlineCode } from "../components/mfm_inline_code";
import { MfmItalic } from "../components/mfm_italic";
import { MfmJelly } from "../components/mfm_jelly";
import { MfmJump } from "../components/mfm_jump";
import { MfmMath } from "../components/mfm_math";
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
import { MfmUrl } from "../components/mfm_url";
import { MfmX } from "../components/mfm_x";

export type MfmOptions = {
  host: string;
  emojiHost: string;
  largeEmoji?: boolean;
};

export const renderNode = (node: mfm.MfmNode, options: MfmOptions) => {
  const { host, emojiHost, largeEmoji } = options;

  const key = JSON.stringify(node);

  switch (node.type) {
    case "blockCode":
      return <MfmCodeBlock key={key} node={node} />;
    case "bold":
      return (
        <MfmBold key={key} node={node}>
          {renderNodes(node.children, options)}
        </MfmBold>
      );
    case "center":
      return (
        <MfmCenter key={key} node={node}>
          {renderNodes(node.children, options)}
        </MfmCenter>
      );
    case "emojiCode":
      return (
        <MfmEmojiCode
          key={key}
          node={node}
          host={host}
          emojiHost={emojiHost}
          large={largeEmoji}
        />
      );
    case "fn": {
      switch (node.props.name) {
        case "border":
          return (
            <MfmBorder key={key} node={node}>
              {renderNodes(node.children, options)}
            </MfmBorder>
          );
        case "bg":
          return (
            <MfmBg key={key} node={node}>
              {renderNodes(node.children, options)}
            </MfmBg>
          );
        case "blur":
          return (
            <MfmBlur key={key} node={node}>
              {renderNodes(node.children, options)}
            </MfmBlur>
          );
        case "bounce":
          return (
            <MfmBounce key={key} node={node}>
              {renderNodes(node.children, options)}
            </MfmBounce>
          );
        case "fg":
          return (
            <MfmFg key={key} node={node}>
              {renderNodes(node.children, options)}
            </MfmFg>
          );
        case "flip":
          return (
            <MfmFlip key={key} node={node}>
              {renderNodes(node.children, options)}
            </MfmFlip>
          );
        case "font":
          return (
            <MfmFont key={key} node={node}>
              {renderNodes(node.children, options)}
            </MfmFont>
          );
        case "jelly":
          return (
            <MfmJelly key={key} node={node}>
              {renderNodes(node.children, options)}
            </MfmJelly>
          );
        case "jump":
          return (
            <MfmJump key={key} node={node}>
              {renderNodes(node.children, options)}
            </MfmJump>
          );
        case "position":
          return (
            <MfmPosition key={key} node={node}>
              {renderNodes(node.children, options)}
            </MfmPosition>
          );
        case "rainbow":
          return (
            <MfmRainbow key={key} node={node}>
              {renderNodes(node.children, options)}
            </MfmRainbow>
          );
        case "rotate":
          return (
            <MfmRotate key={key} node={node}>
              {renderNodes(node.children, options)}
            </MfmRotate>
          );
        case "scale":
          return (
            <MfmScale key={key} node={node}>
              {renderNodes(node.children, options)}
            </MfmScale>
          );
        case "shake":
          return (
            <MfmShake key={key} node={node}>
              {renderNodes(node.children, options)}
            </MfmShake>
          );
        case "sparkle":
          return toMfmString(node);
        case "spin":
          return (
            <MfmSpin key={key} node={node}>
              {renderNodes(node.children, options)}
            </MfmSpin>
          );
        case "tada":
          return (
            <MfmTada key={key} node={node}>
              {renderNodes(node.children, options)}
            </MfmTada>
          );
        case "twitch":
          return (
            <MfmTwitch key={key} node={node}>
              {renderNodes(node.children, options)}
            </MfmTwitch>
          );
        case "x2":
          return (
            <MfmX key={key} node={node}>
              {renderNodes(node.children, options)}
            </MfmX>
          );
        case "x3":
          return (
            <MfmX key={key} node={node}>
              {renderNodes(node.children, options)}
            </MfmX>
          );
        case "x4":
          return (
            <MfmX key={key} node={node}>
              {renderNodes(node.children, options)}
            </MfmX>
          );
        default:
          return toMfmString(node);
      }
    }
    case "hashtag":
      return <MfmHashtag key={key} node={node} host={host} />;
    case "inlineCode":
      return <MfmInlineCode key={key} node={node} />;
    case "italic":
      return <MfmItalic key={key} node={node} />;
    case "link":
      return toMfmString(node);
    case "mathBlock":
      return <MfmMath key={key} node={node} />;
    case "mathInline":
      return <MfmMath key={key} node={node} />;
    case "mention":
      return <MfmMention key={key} node={node} host={host} />;
    case "plain":
      return (
        <MfmPlain key={key} node={node}>
          {renderNodes(node.children, options)}
        </MfmPlain>
      );
    case "quote":
      return (
        <MfmQuote key={key} node={node}>
          {renderNodes(node.children, options)}
        </MfmQuote>
      );
    case "search":
      return <MfmSearch key={key} node={node} />;
    case "small":
      return (
        <MfmSmall key={key} node={node}>
          {renderNodes(node.children, options)}
        </MfmSmall>
      );
    case "strike":
      return toMfmString(node);
    case "text":
      return <MfmText key={key} node={node} />;
    case "unicodeEmoji":
      return <MfmUnicodeEmoji key={key} node={node} host={host} />;
    case "url":
      return <MfmUrl key={key} node={node} host={host} />;
    default: {
      const check: never = node;
      return toMfmString(check);
    }
  }
};

export const renderNodes = (nodes: mfm.MfmNode[], options: MfmOptions) => {
  return nodes.map((node) => renderNode(node, options));
};
