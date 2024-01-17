import type { Meta, StoryObj } from "@storybook/react";
import { MfmTada } from "../src/components/mfm_tada";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmTada> = {
  title: "MFM/Fn/Tada",
  component: MfmTada,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmTada>;

export const Default: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "tada", args: {} },
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
      props: { name: "tada", args: { speed: "5s" } },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};
