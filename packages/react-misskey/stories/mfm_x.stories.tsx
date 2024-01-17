import type { Meta, StoryObj } from "@storybook/react";
import { MfmX } from "../src/components/mfm_x";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmX> = {
  title: "MFM/Fn/X",
  component: MfmX,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmX>;

export const Default: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "x1", args: {} },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};

export const X2: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "x2", args: {} },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};

export const X3: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "x3", args: {} },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};

export const X4: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "x4", args: {} },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};
