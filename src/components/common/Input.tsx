import React from "react";

type InputProps = {
  type: "email";
  placeholder: string;
};

export default function Input({ type, placeholder }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="bg-light rounded-3xl p-1.5 pl-4 text-blue"
    />
  );
}
