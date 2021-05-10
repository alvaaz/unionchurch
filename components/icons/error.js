import React from 'react';

export const Error = (props) => (
  <svg
    {...props}
    className="absolute right-4 h-6 w-6 text-red-600"
    style={{ top: '50%', transform: 'translateY(-50%)' }}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
