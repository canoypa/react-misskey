import type { Meta, StoryObj } from "@storybook/react";
import { MfmSearch } from "../src/components/mfm_search";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmSearch> = {
  title: "MFM/Search",
  component: MfmSearch,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmSearch>;

export const Default: Story = {
  args: {
    node: {
      type: "search",
      props: {
        query: "Misskey",
        content: "Misskey 検索",
      },
    },
  },
};
