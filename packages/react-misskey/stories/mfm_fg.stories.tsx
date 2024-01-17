import type { Meta, StoryObj } from "@storybook/react";
import { MfmFg } from "../src/components/mfm_fg";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmFg> = {
  title: "MFM/Fn/Fg",
  component: MfmFg,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmFg>;

export const Default: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "fg", args: {} },
      children: [
        {
          type: "text",
          props: { text: "Misskey" },
        },
      ],
    },
  },
};

export const RGB: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "fg", args: { color: "0f0" } },

      children: [
        {
          type: "text",
          props: { text: "Misskey" },
        },
      ],
    },
  },
};

export const RGBA: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "fg", args: { color: "00f8" } },
      children: [
        {
          type: "text",
          props: { text: "Misskey" },
        },
      ],
    },
  },
};

export const RRGGBB: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "fg", args: { color: "ffff00" } },
      children: [
        {
          type: "text",
          props: { text: "Misskey" },
        },
      ],
    },
  },
};
