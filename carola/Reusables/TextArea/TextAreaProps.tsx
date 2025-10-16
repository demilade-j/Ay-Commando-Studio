export type TextAreaProps = {
  placeholder: string;
  classname?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
};
