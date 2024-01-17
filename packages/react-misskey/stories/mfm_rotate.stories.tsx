import type { Meta, StoryObj } from "@storybook/react";
import { MfmRotate } from "../src/components/mfm_rotate";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmRotate> = {
  title: "MFM/Fn/Rotate",
  component: MfmRotate,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmRotate>;

export const Default: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "rotate", args: {} },
      children: [
        {
          type: "text",
          props: { text: "Misskey" },
        },
      ],
    },
  },
};

export const Deg30: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "rotate", args: { deg: "30" } },
      children: [
        {
          type: "text",
          props: { text: "Misskey" },
        },
      ],
    },
  },
};
