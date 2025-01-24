import type { Meta, StoryObj } from "@storybook/react";

import { Category } from "./category";

const meta: Meta<typeof Category> = {
  component: Category,
};

export default meta;

type Story = StoryObj<typeof Category>;

export const Primary: Story = {
  args: {},
  render: () => {
    return (
      <div>
        <Category.Root>
          <Category.Item value="Profile">
            <Category.Title>Profile</Category.Title>
            <Category.Content>
              <FakeContent />
            </Category.Content>
          </Category.Item>
          <Category.Item value="Experience">
            <Category.Title>Experience</Category.Title>
            <Category.Content>
              <FakeContent />
            </Category.Content>
          </Category.Item>
        </Category.Root>
      </div>
    );
  },
};

const FakeContent = () => {
  return (
    <div className="m-2 flex h-24 w-full items-center justify-center border border-dashed border-gray-400 p-2 font-mono text-xs uppercase text-gray-500">
      Content Goes Here
    </div>
  );
};
