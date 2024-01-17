import type { Meta, StoryObj } from "@storybook/react";
import { MfmCenter } from "../src/components/mfm_center";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmCenter> = {
  title: "MFM/Center",
  component: MfmCenter,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmCenter>;

export const Default: Story = {
  args: {
    node: {
      type: "center",
      children: [
        {
          type: "text",
          props: { text: "MisskeyでFediverseの世界が広がります" },
        },
      ],
    },
  },
};
