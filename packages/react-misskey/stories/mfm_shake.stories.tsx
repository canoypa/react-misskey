import type { Meta, StoryObj } from "@storybook/react";
import { MfmShake } from "../src/components/mfm_shake";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmShake> = {
  title: "MFM/Fn/Shake",
  component: MfmShake,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmShake>;

export const Default: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "shake", args: {} },
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
      props: { name: "shake", args: { speed: "5s" } },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};
