export type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
  disabled?: boolean;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
};