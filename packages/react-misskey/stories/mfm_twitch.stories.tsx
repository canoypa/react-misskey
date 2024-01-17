import type { Meta, StoryObj } from "@storybook/react";
import { MfmTwitch } from "../src/components/mfm_twitch";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmTwitch> = {
  title: "MFM/Fn/Twitch",
  component: MfmTwitch,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmTwitch>;

export const Default: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "twitch", args: {} },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};

export const Speed5s: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "twitch", args: { speed: "5s" } },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};
