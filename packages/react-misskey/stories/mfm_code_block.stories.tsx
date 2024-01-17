import type { Meta, StoryObj } from "@storybook/react";
import { MfmCodeBlock } from "../src/components/mfm_code_block";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmCodeBlock> = {
  title: "MFM/CodeBlock",
  component: MfmCodeBlock,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmCodeBlock>;

export const Default: Story = {
  args: {
    node: {
      type: "blockCode",
      props: {
        lang: null,
        code: '~ (#i, 100) {\n    <: ? ((i % 15) = 0) "FizzBuzz"\n        .? ((i % 3) = 0) "Fizz"\n        .? ((i % 5) = 0) "Buzz"\n        . i\n}',
      },
    },
  },
};
