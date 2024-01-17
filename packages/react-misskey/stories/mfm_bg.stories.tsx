import type { Meta, StoryObj } from "@storybook/react";
import { MfmBg } from "../src/components/mfm_bg";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmBg> = {
  title: "MFM/Fn/Bg",
  component: MfmBg,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmBg>;

export const Default: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "bg", args: {} },
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
      props: { name: "bg", args: { color: "0f0" } },

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
      props: { name: "bg", args: { color: "00f8" } },
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
      props: { name: "bg", args: { color: "ffff00" } },
      children: [
        {
          type: "text",
          props: { text: "Misskey" },
        },
      ],
    },
  },
};
