import type { Ref } from 'vue'

export type CollapseItemName = string | number;

export interface CollapseProps {
  modelValue: CollapseItemName[];
  accordion?: boolean;
}

export interface CollapseItemProps {
  title?: string;
  name: CollapseItemName;
  disabled?: boolean;
}

export interface CollapseEmits {
  (e: 'update:modelValue', name: CollapseItemName[]): void;
  (e: 'change', name: CollapseItemName[]): void;
}


export interface CollapseContext {
  activeNames: Ref<CollapseItemName[]>;
  handleItemClick: (name: CollapseItemName) => void;
}