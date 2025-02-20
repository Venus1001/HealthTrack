import React from "react";

const Input = ({ type, placeholder, className, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full p-2 border rounded ${className}`}
      {...props}
    />
  );
};

export default Input;