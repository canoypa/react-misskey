import type { Meta, StoryObj } from "@storybook/react";
import { Note } from "../src/components/note.client";

const meta: Meta<typeof Note> = {
  title: "Note",
  component: Note,
};
export default meta;

type Story = StoryObj<typeof Note>;

export const Default: Story = {
  args: {
    host: "misskey.io",
    id: "9obe65oxp27f0coj",
  },
};
