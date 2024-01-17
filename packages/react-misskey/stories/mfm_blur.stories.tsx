import type { Meta, StoryObj } from "@storybook/react";
import { MfmBlur } from "../src/components/mfm_blur";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmBlur> = {
  title: "MFM/Fn/Blur",
  component: MfmBlur,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmBlur>;

export const Default: Story = {
  args: {
    node: {
      type: "fn",
      props: { name: "blur", args: {} },
      children: [
        {
          type: "text",
          props: { text: "MisskeyでFediverseの世界が広がります" },
        },
      ],
    },
  },
};
