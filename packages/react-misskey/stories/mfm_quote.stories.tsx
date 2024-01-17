import type { Meta, StoryObj } from "@storybook/react";
import { MfmQuote } from "../src/components/mfm_quote";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmQuote> = {
  title: "MFM/Quote",
  component: MfmQuote,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmQuote>;

export const Default: Story = {
  args: {
    node: {
      type: "quote",
      children: [
        {
          type: "text",
          props: { text: "MisskeyでFediverseの世界が広がります" },
        },
      ],
    },
  },
};
