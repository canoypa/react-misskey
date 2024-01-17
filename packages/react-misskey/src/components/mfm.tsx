import type mfm from "mfm-js";
import { toString as toMfmString } from "mfm-js";
import { MfmEmojiCode } from "./mfm_emoji_code";
import { MfmHashtag } from "./mfm_hashtag";
import { MfmLink } from "./mfm_link";
import { MfmMention } from "./mfm_mention";
import { MfmText } from "./mfm_text";

export { MfmEmojiCode, MfmHashtag, MfmLink, MfmMention };

export const renderNode = (node: mfm.MfmNode) => {
  switch (node.type) {
    case "text":
      return <MfmText node={node} />;
    default:
      // const check: never = node;
      return toMfmString(node);
  }
};

export const renderNodes = (nodes: mfm.MfmNode[]) => {
  return nodes.map(renderNode);
};
