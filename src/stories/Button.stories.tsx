import { ComponentProps } from "react";
import CustomButton from "../components/CustomButton/CustomButton";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

type StoryProps = ComponentProps<typeof CustomButton>;

const meta: Meta<StoryProps> = {
  component: CustomButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "info"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },

  args: {
    onclick: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Click Me",
  },
  render: (args) => <CustomButton {...args}>{args.children}</CustomButton>,
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Click Me",
  },
  render: (args) => <CustomButton {...args}>{args.children}</CustomButton>,
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "Click Me",
  },
  render: (args) => <CustomButton {...args}>{args.children}</CustomButton>,
};

export const Disabled: Story = {
  args: {
    variant: "disabled",
    children: "Click Me",
  },
  render: (args) => <CustomButton {...args}>{args.children}</CustomButton>,
};
export const Size: Story = {
  args: {
    variant: "primary",
    size: "sm",
    children: "Click Me",
  },
  render: (args) => <CustomButton {...args}>{args.children}</CustomButton>,
};
