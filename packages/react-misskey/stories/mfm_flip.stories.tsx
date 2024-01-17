import type { Meta, StoryObj } from "@storybook/react";
import { MfmFlip } from "../src/components/mfm_flip";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmFlip> = {
  title: "MFM/Fn/Flip",
  component: MfmFlip,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmFlip>;

export const Default: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "flip", args: {} },
      children: [
        {
          type: "text",
          props: { text: "MisskeyでFediverseの世界が広がります" },
        },
      ],
    },
  },
};

export const Vertical: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "flip", args: { v: true } },
      children: [
        {
          type: "text",
          props: { text: "MisskeyでFediverseの世界が広がります" },
        },
      ],
    },
  },
};

export const Horizontal: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "flip", args: { h: true } },
      children: [
        {
          type: "text",
          props: { text: "MisskeyでFediverseの世界が広がります" },
        },
      ],
    },
  },
};

export const Both: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "flip", args: { v: true, h: true } },
      children: [
        {
          type: "text",
          props: { text: "MisskeyでFediverseの世界が広がります" },
        },
      ],
    },
  },
};
