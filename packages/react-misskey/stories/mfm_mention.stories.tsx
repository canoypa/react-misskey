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
    node: { type: "mention", props: { acct: "@ai", host: null, username: "" } },
    host: "misskey.io",
    isMe: false,
  },
};
