import type { Meta, StoryObj } from "@storybook/react";
import { MfmPosition } from "../src/components/mfm_position";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmPosition> = {
  title: "MFM/Fn/Position",
  component: MfmPosition,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmPosition>;

export const Default: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "position", args: {} },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};

export const X1: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "position", args: { x: "1" } },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};

export const Y1: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "position", args: { y: "1" } },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};

export const XY1: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "position", args: { x: "1", y: "1" } },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};
