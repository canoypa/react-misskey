import type { Meta, StoryObj } from "@storybook/react";
import { MfmBold } from "../src/components/mfm_bold";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmBold> = {
  title: "MFM/Bold",
  component: MfmBold,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmBold>;

export const Default: Story = {
  args: {
    node: {
      type: "bold",
      children: [{ type: "text", props: { text: "Bold" } }],
    },
  },
};
