import type { Meta, StoryObj } from "@storybook/react";

import { TextButton } from "./TextButton";
import { PencilSimple, TagChevron } from "@phosphor-icons/react";

const meta: Meta<typeof TextButton> = {
  title: "Design System/Inputs/TextButton",
  component: TextButton,
};

export default meta;
type Story = StoryObj<typeof TextButton>;

export const ButtonWithoutIcon: Story = {
  name: "Normal Button",
  args: {},
  render: () => <TextButton>Click Me!</TextButton>,
};

export const ButtonWithIcon: Story = {
  name: "Button with Icon",
  args: {},
  render: () => (
    <TextButton>
      <TextButton.Icon>
        <PencilSimple weight="bold" />
      </TextButton.Icon>
      Click Me!
    </TextButton>
  ),
};

export const ButtonWithIcon2: Story = {
  name: "Button with Icon After",
  args: {},
  render: () => (
    <TextButton>
      Click Me!
      <TextButton.Icon>
        <TagChevron weight="bold" />
      </TextButton.Icon>
    </TextButton>
  ),
};
