import { ComponentProps } from "react";
import Input from "../components/Input/Input";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

type StoryType = ComponentProps<typeof Input>;

const meta: Meta = {
  tags: ["autodocs"],
  component: Input,
  args: {
    onChange: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryType>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Name",
  },
  render: (args) => {
    return <Input {...args} />;
  },
};
export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Password",
  },
  render: (args) => {
    return <Input {...args} />;
  },
};
