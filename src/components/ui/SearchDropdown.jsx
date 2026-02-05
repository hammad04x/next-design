import { useEffect, useRef } from "react";

export default function SearchDropdown({
  isOpen,
  onClose,
  suggestions,
  onSelect,
  searchValue,
  position,
  customTop, // Add customTop prop for easy positioning
}) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // If searchValue exactly matches a suggestion, show all suggestions
  const exactMatch = suggestions.some(
    (item) => item.toLowerCase() === searchValue.toLowerCase()
  );

  const filteredSuggestions = exactMatch
    ? suggestions
    : suggestions.filter((item) =>
        item.toLowerCase().includes(searchValue.toLowerCase())
      );

  return (
    <div
      ref={dropdownRef}
      className="absolute bg-white rounded-lg shadow-2xl border border-gray-100 py-2 mt-2 z-[100] w-full max-h-64 overflow-y-auto scrollbar-hide "
      style={{
        top: customTop || position?.top || "60px",
        left: position?.left || 0,
      }}
    >
      {filteredSuggestions.length > 0 ? (
        filteredSuggestions.map((suggestion, index) => (
          <div
            key={index}
            onClick={() => onSelect(suggestion)}
            className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer text-sm text-gray-700 transition-colors;"
          >
            {suggestion}
          </div>
        ))
      ) : (
        <div className="px-4 py-2.5 text-sm text-gray-400">No results found</div>
      )}
    </div>
  );
}