import type { ChangeEvent } from "react";

export type TextAreaProps = {
  placeholder: string;
  classname?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};