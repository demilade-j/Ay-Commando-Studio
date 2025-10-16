import type { ChangeEvent } from "react";

export type InputProps = {
  placeholder: string;
  classname?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};