import type { Meta, StoryObj } from "@storybook/react";
import { MfmPlain } from "../src/components/mfm_plain";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmPlain> = {
  title: "MFM/Plain",
  component: MfmPlain,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmPlain>;

export const Default: Story = {
  args: {
    node: {
      type: "plain",
      children: [
        {
          type: "text",
          props: {
            text: "<plain>**bold** @mention #hashtag `code` $[x2 🍮]</plain>",
          },
        },
      ],
    },
  },
};
