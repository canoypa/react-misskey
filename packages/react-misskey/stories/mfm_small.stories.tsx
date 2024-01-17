import type { Meta, StoryObj } from "@storybook/react";
import { MfmSmall } from "../src/components/mfm_small";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmSmall> = {
  title: "MFM/Small",
  component: MfmSmall,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmSmall>;

export const Default: Story = {
  args: {
    node: {
      type: "small",
      children: [
        {
          type: "text",
          props: { text: "MisskeyでFediverseの世界が広がります" },
        },
      ],
    },
  },
};
