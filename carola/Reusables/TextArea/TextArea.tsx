import type { TextAreaProps } from "./TextAreaProps";

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  classname,
  onChange,
  disabled = false,
}) => {

  return (
    <textarea className={`py-3.5 font-[sans-serif] placeholder-gray-700 rounded-lg ps-5 border-1 border-gray-500 outline-0 ${classname ?? ""}`}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}></textarea>
  );
};

export default TextArea;