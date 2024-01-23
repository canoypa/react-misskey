import type { Meta, StoryObj } from "@storybook/react";
import { MfmUrl } from "../src/components/mfm_url";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmUrl> = {
  title: "MFM/Url",
  component: MfmUrl,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmUrl>;

export const Default: Story = {
  args: {
    node: {
      type: "url",
      props: {
        url: "https://username:password@example.com:80/path/to?q=query#hash",
      },
      children: [],
    },
    host: "misskey.io",
  },
};

export const Local: Story = {
  args: {
    node: {
      type: "url",
      props: {
        url: "https://misskey.io/@ai",
      },
      children: [],
    },
    host: "misskey.io",
  },
};

export const LocalIndex: Story = {
  args: {
    node: {
      type: "url",
      props: {
        url: "https://misskey.io/",
      },
      children: [],
    },
    host: "misskey.io",
  },
};
