import { Meta, StoryObj } from "@storybook/react";
import Alert from "../components/Alert";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Alert>;

const meta: Meta = {
  component: Alert,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    text: "this is an alert",
    variant: "primary",
  },
  render: (args) => {
    return <Alert {...args} />;
  },
};
export const Info: Story = {
  args: {
    text: "this is an alert",
    variant: "info",
  },
  render: (args) => {
    return <Alert {...args} />;
  },
};
export const Secondary: Story = {
  args: {
    text: "this is an alert",
    variant: "secondary",
  },
  render: (args) => {
    return <Alert {...args} />;
  },
};
export const Error: Story = {
  args: {
    text: "this is an alert",
    variant: "error",
  },
  render: (args) => {
    return <Alert {...args} />;
  },
};
