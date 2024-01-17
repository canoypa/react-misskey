import type { Meta, StoryObj } from "@storybook/react";
import { MfmScale } from "../src/components/mfm_scale";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmScale> = {
  title: "MFM/Fn/Scale",
  component: MfmScale,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmScale>;

export const Default: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "scale", args: {} },
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
      props: { name: "scale", args: { x: "2" } },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};

export const Y2: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "scale", args: { y: "2" } },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};

export const XY2: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "scale", args: { x: "2", y: "2" } },
      children: [
        {
          type: "text",
          props: { text: "🍮" },
        },
      ],
    },
  },
};
