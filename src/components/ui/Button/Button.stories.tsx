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
      <Button.Icon>
        <PencilSimple weight="bold" />
      </Button.Icon>
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
      <Button.Icon>
        <TagChevron weight="bold" />
      </Button.Icon>
    </Button>
  ),
};
