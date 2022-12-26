import { DynamicControlType } from "./dynamic-control-type";

export interface DynamicFormControl {
  type: DynamicControlType,
  value?: any,
  label?: string
}
