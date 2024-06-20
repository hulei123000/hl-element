import type { Component, Ref } from 'vue'

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type ButtonSize = 'large' | 'default' | 'small';
export type NativeType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  tag?: string | Component;
  type?: ButtonType;
  size?: ButtonSize;
  nativeType?: NativeType;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  circle?: boolean;
  round?: boolean;
  plain?: boolean;
  loadingIcon?: string;
  autofocus?: boolean;
  useThrottle?: boolean; // 节流
  throttleDuration?: number; // 节流时长
}

// 事件
export interface ButtonEmits {
  (e: 'click', val: MouseEvent): void;
}

// 实例
export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | void>
}

// 按钮组的类型
export type ButtonGroupProps = {
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
}
// 依赖注入要用的(上下文)
export type ButtonGroupContext = {
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
}