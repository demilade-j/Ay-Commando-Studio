import type { InputProps } from "./InputProps";

const Input: React.FC<InputProps> = ({
  placeholder,
  classname,
  onChange,
  disabled = false,
}) => {

  return (
    <input
      className={`py-3.5 font-[sans-serif] placeholder-gray-700 rounded-lg ps-5 border-1 border-gray-500 outline-0 ${classname ?? ""}`}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;