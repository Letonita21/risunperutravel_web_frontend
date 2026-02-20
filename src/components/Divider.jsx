import React from "react";

const Divider = () => {
  return (
    <div className="flex items-center justify-center my-6">
      <div className="grow border-t border-green-700"></div>

      {/* Colibrí */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="mx-4 w-10 h-10 text-green-700"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Ala */}
        <path d="M6 36c12-14 28-14 40-6" />

        {/* Cuerpo */}
        <path d="M34 30c-2 6-2 12 2 18" />

        {/* Cabeza */}
        <circle cx="36" cy="28" r="2" />

        {/* Pico */}
        <path d="M38 28l12-4" />

        {/* Cola */}
        <path d="M36 46l-6 6" />
      </svg>

      <div className="grow border-t border-green-700"></div>
    </div>
  );
};

export default Divider;
