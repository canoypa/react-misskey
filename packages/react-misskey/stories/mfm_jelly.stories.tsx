import type { Meta, StoryObj } from "@storybook/react";
import { MfmJelly } from "../src/components/mfm_jelly";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmJelly> = {
  title: "MFM/Fn/Jelly",
  component: MfmJelly,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmJelly>;

export const Default: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "jelly", args: {} },
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
      props: { name: "jelly", args: { speed: "5s" } },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};
