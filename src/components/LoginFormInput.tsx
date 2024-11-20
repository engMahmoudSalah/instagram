import React, { InputHTMLAttributes } from 'react';

interface LoginFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function LoginFormInput({ label, className = '', ...props }: LoginFormInputProps) {
  return (
    <div className="relative">
      <input
        {...props}
        className={`w-full px-2 py-[9px] border border-gray-200 rounded-sm bg-[#fafafa] text-xs
          focus:outline-none focus:border-gray-400 transition-colors placeholder:text-gray-400
          ${className}`}
        placeholder={label}
      />
    </div>
  );
}