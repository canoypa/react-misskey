import type { Meta, StoryObj } from "@storybook/react";
import { MfmSpin } from "../src/components/mfm_spin";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmSpin> = {
  title: "MFM/Fn/Spin",
  component: MfmSpin,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmSpin>;

export const Default: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "spin", args: {} },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};

export const Speed5a: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "spin", args: { speed: "5s" } },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};

export const Left: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "spin", args: { left: true } },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};

export const Alternate: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "spin", args: { alternate: true } },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};

export const X: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "spin", args: { x: true } },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};

export const XLeft: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "spin", args: { x: true, left: true } },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};

export const XAlternate: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "spin", args: { x: true, alternate: true } },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};

export const Y: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "spin", args: { y: true } },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};

export const YLeft: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "spin", args: { y: true, left: true } },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};

export const YAlternate: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "spin", args: { y: true, alternate: true } },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};
