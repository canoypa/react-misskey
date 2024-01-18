import type { Meta, StoryObj } from "@storybook/react";
import { Mfm } from "../src/components/mfm";
import "../src/styles/theme.css";

const meta: Meta<typeof Mfm> = {
  title: "MFM",
  component: Mfm,
  decorators: [
    (Story) => (
      <div className="embed-misskey-theme">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Mfm>;

export const Default: Story = {
  args: {
    text: "Hello World",
  },
};

export const WithMfm: Story = {
  args: {
    text: "$[spin.y,speed=5s $[rainbow.speed=5s $[fg Misskey]]]",
  },
};
