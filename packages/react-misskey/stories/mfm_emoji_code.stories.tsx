import type { Meta, StoryObj } from "@storybook/react";
import { MfmEmojiCode } from "../src/components/mfm_emoji_code";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmEmojiCode> = {
  title: "MFM/EmojiCode",
  component: MfmEmojiCode,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmEmojiCode>;

export const Default: Story = {
  args: {
    node: {
      type: "emojiCode",
      props: { name: "thinking__ai" },
    },
    host: "misskey.io",
  },
};

export const Remote: Story = {
  args: {
    node: {
      type: "emojiCode",
      props: { name: "thinking__ai" },
    },
    host: "misskey.io",
    emojiHost: "misskey.test",
  },
};
