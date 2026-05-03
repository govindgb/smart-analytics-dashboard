"use client";

type Props = {
  selected: string;
  onChange: (value: string) => void;
};

const options = ["7d", "30d", "6m"];

export default function FilterBar({ selected, onChange }: Props) {
  return (
    <div className="flex gap-3 mb-6">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`px-4 py-2 rounded ${
            selected === option
              ? "bg-black text-white"
              : "bg-white border"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}