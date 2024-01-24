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
import { MfmLink } from "../components/mfm_link";
import { MfmMath } from "../components/mfm_math";
import { MfmMention } from "../components/mfm_mention";
import { MfmPlain } from "../components/mfm_plain";
import { MfmPosition } from "../components/mfm_position";
import { MfmQuote } from "../components/mfm_quote";
import { MfmRainbow } from "../components/mfm_rainbow";
import { MfmRotate } from "../components/mfm_rotate";
import { MfmRuby } from "../components/mfm_ruby";
import { MfmScale } from "../components/mfm_scale";
import { MfmSearch } from "../components/mfm_search";
import { MfmShake } from "../components/mfm_shake";
import { MfmSmall } from "../components/mfm_small";
import { MfmSpin } from "../components/mfm_spin";
import { MfmStrike } from "../components/mfm_strike";
import { MfmTada } from "../components/mfm_tada";
import { MfmText } from "../components/mfm_text";
import { MfmTwitch } from "../components/mfm_twitch";
import { MfmUnicodeEmoji } from "../components/mfm_unicode_emoji";
import { MfmUnixtime } from "../components/mfm_unixtime";
import { MfmUrl } from "../components/mfm_url";
import { MfmX } from "../components/mfm_x";
import { nyaize as doNyaize } from "./nyaize";

export type MfmOptions = {
  host: string;
  emojiHost: string;
  largeEmoji?: boolean;
  nyaize?: boolean;
};

export const renderNode = (node: mfm.MfmNode, options: MfmOptions) => {
  const { host, emojiHost, largeEmoji, nyaize } = options;

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
        case "ruby": {
          if (node.children.length === 1) {
            const child = node.children[0];
            const childStr = child.type === "text" ? child.props.text : "";

            const [text, ruby] = childStr.split(" ");

            return (
              <MfmRuby
                key={key}
                node={node}
                ruby={nyaize ? doNyaize(ruby) : ruby}
              >
                {nyaize ? doNyaize(text) : text}
              </MfmRuby>
            );
          }

          const lastChild = node.children[node.children.length - 1];
          const ruby = lastChild.type === "text" ? lastChild.props.text : "";

          const children = node.children.slice(0, -1);

          return (
            <MfmRuby key={key} node={node} ruby={ruby}>
              {renderNodes(children, options)}
            </MfmRuby>
          );
        }

        case "unixtime": {
          const dateFormatter = new Intl.DateTimeFormat("ja-JP", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          });

          const child = node.children[0];
          const childStr = child.type === "text" ? child.props.text : "";

          try {
            const unixtime = parseInt(childStr, 10);
            const date = new Date(unixtime * 1000);

            const text = dateFormatter.format(date);

            return (
              <MfmUnixtime key={key} node={node} dateTime={date.toISOString()}>
                {text}
              </MfmUnixtime>
            );
          } catch (e) {
            return (
              <MfmUnixtime key={key} node={node} dateTime={""}>
                日付の解析に失敗
              </MfmUnixtime>
            );
          }
        }

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
      return (
        <MfmItalic key={key} node={node}>
          {renderNodes(node.children, options)}
        </MfmItalic>
      );
    case "link":
      return (
        <MfmLink key={key} node={node}>
          {renderNodes(node.children, options)}
        </MfmLink>
      );
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
      return (
        <MfmStrike key={key} node={node}>
          {renderNodes(node.children, options)}
        </MfmStrike>
      );
    case "text":
      return (
        <MfmText key={key} node={node}>
          {nyaize ? doNyaize(node.props.text) : node.props.text}
        </MfmText>
      );
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
