import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { PencilSimple, TagChevron } from "@phosphor-icons/react";

const meta: Meta<typeof Button> = {
  title: "Design System/Inputs/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonWithoutIcon: Story = {
  name: "Normal Button",
  args: {},
  render: () => <Button>Click Me!</Button>,
};

export const ButtonWithIcon: Story = {
  name: "Button with Icon",
  args: {},
  render: () => (
    <Button>
      <PencilSimple weight="bold" />
      Click Me!
    </Button>
  ),
};

export const ButtonWithIcon2: Story = {
  name: "Button with Icon After",
  args: {},
  render: () => (
    <Button>
      Click Me!
      <TagChevron weight="bold" />
    </Button>
  ),
};
