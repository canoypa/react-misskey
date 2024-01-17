import type { Meta, StoryObj } from "@storybook/react";
import { MfmMention } from "../src/components/mfm_mention";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmMention> = {
  title: "MFM/Mention",
  component: MfmMention,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmMention>;

export const Default: Story = {
  args: {
    node: {
      type: "mention",
      props: { acct: "@ai", host: null, username: "ai" },
    },
    host: "misskey.io",
    isMe: false,
  },
};

export const IsMe: Story = {
  args: {
    node: {
      type: "mention",
      props: { acct: "@ai", host: null, username: "ai" },
    },
    host: "misskey.io",
    isMe: true,
  },
};

export const Remote: Story = {
  args: {
    node: {
      type: "mention",
      props: {
        acct: "@repo@misskey.test",
        host: "misskey.test",
        username: "repo",
      },
    },
    host: "misskey.io",
    isMe: false,
  },
};

export const RemoteUnicode: Story = {
  args: {
    node: {
      type: "mention",
      props: {
        acct: "@ai@xn--931a.test",
        host: "xn--931a.test",
        username: "ai",
      },
    },
    host: "misskey.io",
    isMe: false,
  },
};
