import React, { useState } from "react";

interface ProductSummary {
  name: string;
}
interface SearchBarProps {
  value: string;
  setValue: (v: string) => void;
  setSelectedProduct: (p: ProductSummary) => void;
}

/**
 * Product SearchBar with auto-suggestions.
 * Styling uses color scheme primary/secondary.
 */
// PUBLIC_INTERFACE
const SearchBar: React.FC<SearchBarProps> = ({
  value,
  setValue,
  setSelectedProduct,
}) => {
  // Suggestion state placeholder
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Simulate fetching suggestions
  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setValue(val);
    // TODO: Integrate backend API for real suggestions
    setSuggestions(val.length > 0 ? ["Example Product A", "Example Product B"] : []);
  }

  function onSuggestionClick(s: string) {
    setValue(s);
    setSuggestions([]);
    setSelectedProduct({ name: s });
  }

  return (
    <div className="relative w-full max-w-lg">
      <input
        type="text"
        className="w-full px-4 py-2 rounded-md border border-[color:var(--color-primary,#22577A)] bg-white text-[color:var(--color-primary,#22577A)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-secondary,#38A3A5)] transition"
        placeholder="Search for a product..."
        value={value}
        onChange={onInputChange}
        style={{ color: "#22577A", borderColor: "#22577A" }}
      />
      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 mt-1 bg-white border z-10 shadow rounded-md">
          {suggestions.map((s) => (
            <li
              key={s}
              className="px-4 py-2 hover:bg-[color:var(--color-secondary,#38A3A5)] hover:text-white cursor-pointer"
              onClick={() => onSuggestionClick(s)}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
