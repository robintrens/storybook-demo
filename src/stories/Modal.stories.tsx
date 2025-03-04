import { ComponentProps } from "react";
import Modal from "../components/Modal/Modal";
import { Meta, StoryObj } from "@storybook/react";

type StoryProps = ComponentProps<typeof Modal>;

const meta: Meta<StoryProps> = {
  component: Modal,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Small: Story = {
  args: {
    isOpen: true,
    size: "sm",
    title: "Title 1",
  },
  render: (args) => (
    <Modal {...args}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit
      sapiente illo in alias incidunt.
    </Modal>
  ),
};
export const Medium: Story = {
  args: {
    isOpen: true,
    size: "md",
    title: "Title 2",
  },
  render: (args) => (
    <Modal {...args}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit
      sapiente illo in alias incidunt asperiores, excepturi doloribus ratione
      iure voluptatum aspernatur eum est expedita, commodi, sed harum at
      consequuntur voluptate laudantium recusandae et a. A ducimus, corporis
      rerum assumenda debitis qui, explicabo facere voluptatem iste incidunt
      minus officia id?
    </Modal>
  ),
};
export const Large: Story = {
  args: {
    isOpen: true,
    size: "lg",
    title: "Title 3",
  },
  render: (args) => (
    <Modal {...args}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit
      sapiente illo in alias incidunt asperiores, excepturi doloribus ratione
      iure voluptatum aspernatur eum est expedita, commodi, sed harum at
      consequuntur voluptate laudantium recusandae et a. A ducimus, corporis
      rerum assumenda debitis qui, explicabo facere voluptatem iste incidunt
      minus officia id?
    </Modal>
  ),
};

export const ExtraLarge: Story = {
  args: {
    isOpen: true,
    size: "xl",
    title: "Title 4",
  },
  render: (args) => (
    <Modal {...args}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit
      sapiente illo in alias incidunt asperiores, excepturi doloribus ratione
      iure voluptatum aspernatur eum est expedita, commodi, sed harum at
      consequuntur voluptate laudantium recusandae et a. A ducimus, corporis
      rerum assumenda debitis qui, explicabo facere voluptatem iste incidunt
      minus officia id?
    </Modal>
  ),
};
