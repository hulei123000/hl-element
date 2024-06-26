import type { Meta, StoryObj } from "@storybook/vue3";
import { HlCollapse, HlCollapseItem } from "hl-element";
// import 'eric-ui/dist/theme/Collapse.css'

type Story = StoryObj<typeof HlCollapse>;

const meta: Meta<typeof HlCollapse> = {
  title: "Example/Collapse",
  component: HlCollapse,
  subcomponents: { HlCollapseItem },
  tags: ["autodocs"],
};

export const Default: Story = {
  render: (args) => ({
    components: {
      HlCollapse,
      HlCollapseItem,
    },
    setup() {
      return {
        args,
      };
    },
    template: `
    <hl-collapse v-bind="args">
      <hl-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </hl-collapse-item>
      <hl-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </hl-collapse-item>
      <hl-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </hl-collapse-item>
    </hl-collapse>
    `,
  }),
  args: {
    accordion: true,
    modelValue: ["a"],
  },
};

export default meta;