import type { Meta, StoryObj } from "@storybook/react";
import { MfmFont } from "../src/components/mfm_font";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmFont> = {
  title: "MFM/Fn/Font",
  component: MfmFont,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmFont>;

export const Serif: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "font", args: { serif: true } },
      children: [
        {
          type: "text",
          props: { text: "MisskeyでFediverseの世界が広がります" },
        },
      ],
    },
  },
};

export const Monospace: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "font", args: { monospace: true } },
      children: [
        {
          type: "text",
          props: { text: "MisskeyでFediverseの世界が広がります" },
        },
      ],
    },
  },
};

export const Cursive: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "font", args: { cursive: true } },
      children: [
        {
          type: "text",
          props: { text: "MisskeyでFediverseの世界が広がります" },
        },
      ],
    },
  },
};

export const Fantasy: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "font", args: { fantasy: true } },
      children: [
        {
          type: "text",
          props: { text: "MisskeyでFediverseの世界が広がります" },
        },
      ],
    },
  },
};
