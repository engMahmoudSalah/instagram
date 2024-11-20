import React from 'react';

export function LoginFormDivider() {
  return (
    <div className="relative my-4">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200"></div>
      </div>
      <div className="relative flex justify-center text-xs">
        <span className="px-4 bg-white text-gray-400 font-semibold">OR</span>
      </div>
    </div>
  );
}