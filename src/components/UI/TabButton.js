import React from "react";

const TabButton = ({ active, onClick, children }) => (
  <button
    className={`px-4 py-2 rounded focus:outline-none ${
      active ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default TabButton;
