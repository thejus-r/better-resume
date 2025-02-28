import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Design System/Inputs/Switch",
  component: Switch,
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const DefaultSwitch: Story = {
  name: "Default",
  render: () => <Switch/>
};