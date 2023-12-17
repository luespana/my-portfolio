import React from "react";

type ButtonProps = {
  name: string;
  onClick: () => void;
};

export default function Button({ name, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "linear-gradient(to right, #9F7AEA, #D53F8C)",
        color: "white",
      }}
      className="p-3 rounded-3xl"
    >
      {name}
    </button>
  );
}
