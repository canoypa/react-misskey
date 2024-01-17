import type { Meta, StoryObj } from "@storybook/react";
import { MfmJump } from "../src/components/mfm_jump";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmJump> = {
  title: "MFM/Fn/Jump",
  component: MfmJump,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmJump>;

export const Default: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "jump", args: {} },
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
      props: { name: "jump", args: { speed: "5s" } },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};
