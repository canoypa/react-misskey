import type { Meta, StoryObj } from "@storybook/react";
import { MfmRainbow } from "../src/components/mfm_rainbow";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmRainbow> = {
  title: "MFM/Fn/Rainbow",
  component: MfmRainbow,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmRainbow>;

export const Default: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "rainbow", args: {} },
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
      props: { name: "rainbow", args: { speed: "5s" } },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};
