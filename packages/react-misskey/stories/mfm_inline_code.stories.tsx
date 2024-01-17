import type { Meta, StoryObj } from "@storybook/react";
import { MfmInlineCode } from "../src/components/mfm_inline_code";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmInlineCode> = {
  title: "MFM/InlineCode",
  component: MfmInlineCode,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmInlineCode>;

export const Default: Story = {
  args: {
    node: {
      type: "inlineCode",
      props: { code: '`<: "Hello, world!"`' },
    },
  },
};
