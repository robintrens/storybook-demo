import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Stack from "../components/Stack/Stack";

type StoryType = ComponentProps<typeof Stack> & {
  noOfChildren: number;
};

const meta: Meta<StoryType> = {
  component: Stack,
  tags: ["autodocs"],
  argTypes: {
    orientaion: {
      control: "select",
      options: ["horizondal", "vertical"],
    },
    noOfChildren: {
      control: "select",
      options: [5, 10, 15, 20],
    },
    responsive: {
      control: "boolean",
    },
  },
  args: {
    noOfChildren: 5,
    responsive: false,
  },
};

export default meta;

type Story = StoryObj<StoryType>;

export const Horizondal: Story = {
  args: {
    orientaion: "horizondal",
  },
  render: ({ noOfChildren, ...args }) => {
    return <Stack {...args}>{createChildren(noOfChildren)}</Stack>;
  },
};

export const vertical: Story = {
  args: {
    orientaion: "vertical",
  },
  render: ({ noOfChildren, ...args }) => {
    return <Stack {...args}>{createChildren(noOfChildren)}</Stack>;
  },
};

function createChildren(count: number) {
  return Array(count)
    .fill(null)
    .map((_, index) => {
      return (
        <div
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "red",
            animationDelay: `${index * 0.1}s`,
          }}
          key={index}
        ></div>
      );
    });
}
