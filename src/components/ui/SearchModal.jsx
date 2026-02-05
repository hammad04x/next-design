"use client";

import { useState, useMemo } from "react";

export default function SearchModal({
  open,
  title,
  suggestions = [],
  value = "",
  onClose,
  onSelect,
}) {
  const [query, setQuery] = useState(value || "");

  const filtered = useMemo(() => {
    if (!query) return suggestions;
    return suggestions.filter((s) =>
      s.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, suggestions]);

  if (!open) return null;

  return (
    <div className="absolute left-0 top-full mt-3 w-[30%] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 p-4">

      {/* Input */}
      <input
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={`Search ${title}`}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 mb-4 outline-none"
      />

      {/* Suggestions */}
      <div className="max-h-[260px] overflow-y-auto space-y-2">
        {filtered.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              onSelect(item);
              onClose();
            }}
            className="px-4 py-3 rounded-xl hover:bg-blue-50 cursor-pointer transition"
          >
            {item}
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-gray-400 text-sm px-2">No results</p>
        )}
      </div>

    </div>
  );
}
