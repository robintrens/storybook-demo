import { ComponentProps } from "react";
import DropDown from "../components/DropDown/DropDown";
import { Meta, StoryObj } from "@storybook/react";
import country from "../assets/json/country.json";

type StoryProps = ComponentProps<typeof DropDown>;

const meta: Meta<StoryProps> = {
  component: DropDown,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Normal: Story = {
  args: {
    label: "Select",
    options: country,
    animation: true,
    size: "md",
    isClearable: true,
    isSearchable: true,
  },
  render: (args) => <DropDown {...args} />,
};
