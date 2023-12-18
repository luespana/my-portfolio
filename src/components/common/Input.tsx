import React from "react";

type InputProps = {
  type: "email";
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

export default function Input({
  type,
  placeholder,
  onChange,
  value,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="bg-light rounded-3xl p-1.5 pl-4 text-blue min-w-[320px]"
      onChange={(e) => {
        onChange(e.target.value);
      }}
      value={value}
    />
  );
}
