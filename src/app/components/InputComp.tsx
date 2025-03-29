'use client'
import React, { useEffect, useRef } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

interface InputCompProps {
  placeholder?: string;
}

const InputComp = ({ placeholder = "Ask anything..." }: InputCompProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    // Initial height adjustment
    adjustTextareaHeight();
  }, []);

  return (
    <div className="mx-auto w-[98%] p-2 flex gap-3 items-center bg-primary rounded-lg xl:w-4/5">
      <textarea 
        ref={textareaRef}
        placeholder={placeholder}
        className="w-full resize-none min-h-10 max-h-40 outline-none bg-transparent text-bg placeholder:text-bg placeholder:font-medium"
        rows={1}
        onChange={adjustTextareaHeight}
      />
      <button className="bg-secondary text-primary px-4 py-2 rounded-lg">
        <FaLongArrowAltRight />
      </button>
    </div>
  )
}

export default InputComp 