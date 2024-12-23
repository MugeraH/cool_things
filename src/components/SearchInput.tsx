import React from "react";

type Props = {
  onChange: (text: string) => void;
  placeholder: string;
};

function SearchInput({ onChange, placeholder }: Props) {
  console.log("I am rendering");

  return (
    <input
      type="text"
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="py-2 px-4 block w-full rounded-sm text-white border text-md bg-transparent border-slate-400 focus:outline-none focus:ring-0 disabled:opacity-50 disabled:pointer-events-none"
    />
  );
}

export default React.memo(SearchInput);
