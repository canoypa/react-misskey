import type { Meta, StoryObj } from "@storybook/react";
import { MfmBounce } from "../src/components/mfm_bounce";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmBounce> = {
  title: "MFM/Fn/Bounce",
  component: MfmBounce,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmBounce>;

export const Default: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "bounce", args: {} },
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
      props: { name: "bounce", args: { speed: "5s" } },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};
