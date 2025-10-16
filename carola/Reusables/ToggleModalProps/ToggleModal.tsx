import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import type { ToggleModalProps } from '../ToggleModalProps/ToggleModalProps';
import { motion } from "framer-motion";


const ToggleModal: React.FC<ToggleModalProps> = ({
  label,
  answer,
  disabled = false,
}) => {
    // const 

    const [modal,setModal] = useState(false)

  return (
    <div>
    <button
      disabled={disabled}
      onClick={() => setModal(!modal) }
      // onMouseEnter={() => }
      className={`lg:w-[90%] md:w-[90%] w-full py-4 outline-0 hover:bg-[#4A7D6D] hover:text-white lg:gap-3 md:gap-3 gap-1 cursor-pointer rounded-md ps-6 flex items-center justify-start text-xl font-semibold ${modal ? "bg-[#4A7D6D] text-white outline-0 border-0" : "border-1 border-gray-500 text-black"}`}
    >
      {modal ? <ChevronDown strokeWidth={3.5}/> : <ChevronUp strokeWidth={3.5}/> }
      {label}
    </button>
      {modal && (<motion.main
          initial={{
            y: -10
          }}
          animate={{
            y: [30, 1, -1, 10, 0]
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          exit={{
            y: 0,
          }}
          className="w-[90%] px-5 text-sm mt-3 bg-[#fcdbe2] py-5 rounded-md"
          >
          {answer}
        </motion.main>)}
      </div>
  );
};

export default ToggleModal;