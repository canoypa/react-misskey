import type { Meta, StoryObj } from "@storybook/react";
import { MfmHashtag } from "../src/components/mfm_hashtag";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmHashtag> = {
  title: "MFM/Hashtag",
  component: MfmHashtag,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmHashtag>;

export const Default: Story = {
  args: {
    node: {
      type: "hashtag",
      props: { hashtag: "misskey" },
    },
    host: "misskey.io",
  },
};
