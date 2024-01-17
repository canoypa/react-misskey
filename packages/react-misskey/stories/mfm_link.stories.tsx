import type { Meta, StoryObj } from "@storybook/react";
import { MfmLink } from "../src/components/mfm_link";
import "../src/styles/theme.css";

const meta: Meta<typeof MfmLink> = {
  title: "MFM/Link",
  component: MfmLink,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MfmLink>;

export const Default: Story = {
  args: {
    node: {
      type: "link",
      props: {
        url: "https://username:password@example.com:80/path/to?q=query#hash",
        silent: false,
      },
      children: [],
    },
    host: "misskey.io",
  },
};

export const Local: Story = {
  args: {
    node: {
      type: "link",
      props: {
        url: "https://misskey.io/@ai",
        silent: false,
      },
      children: [],
    },
    host: "misskey.io",
  },
};

export const LocalIndex: Story = {
  args: {
    node: {
      type: "link",
      props: {
        url: "https://misskey.io/",
        silent: false,
      },
      children: [],
    },
    host: "misskey.io",
  },
};

export const DefaultLink: Story = {
  args: {
    node: {
      type: "link",
      props: {
        url: "https://misskey.io/path/to",
        silent: false,
      },
      children: [
        {
          type: "text",
          props: { text: "MISSKEY.IO" },
        },
      ],
    },
    host: "misskey.io",
  },
};
