"use client";

import { useState, useRef, useEffect } from "react";
import Button from "../ui/Button";
import SearchDropdown from "../ui/SearchDropdown";

// Multi-select dropdown component with click-outside-to-close
function MultiSelectDropdown({ isOpen, onClose, suggestions, selectedItems, onSelect, position }) {
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

  return (
    <div
      ref={dropdownRef}
      className="absolute bg-white rounded-lg shadow-2xl border border-gray-100 py-2 mt-2 z-[100] w-full max-h-64 overflow-y-auto"
      style={{
        top: position?.top || "60px",
        left: position?.left || 0,
      }}
    >
      {suggestions.map((suggestion, index) => (
        <div
          key={index}
          onClick={() => onSelect(suggestion)}
          className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer text-sm text-gray-700 transition-colors flex items-center justify-between"
        >
          <span>{suggestion}</span>
          {selectedItems.includes(suggestion) && (
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

export default function HeroSection() {
  const [searchData, setSearchData] = useState({
    destination: "",
    packageType: "",
    days: "",
    filters: [],
  });
  const [activeDropdown, setActiveDropdown] = useState(null);

  const destinationRef = useRef(null);
  const packageTypeRef = useRef(null);
  const daysRef = useRef(null);
  const filtersRef = useRef(null);
  
  const destinationMobileRef = useRef(null);
  const packageTypeMobileRef = useRef(null);
  const daysMobileRef = useRef(null);
  const filtersMobileRef = useRef(null);

  const suggestionData = {
    destination: [
      "Manali",
      "Goa",
      "Ladakh",
      "Kashmir",
      "Spiti",
      "Rishikesh",
    ],
    packageType: ["Trekking", "Camping", "Luxury", "Adventure"],
    days: ["1-3 Days", "4-7 Days", "8-14 Days", "15+ Days"],
    filters: ["Budget", "Luxury", "Family", "Honeymoon", "Solo Travel", "Group Tour"],
  };

  const handleSearch = () => {
    console.log("Search data:", searchData);
  };

  const handleDropdownToggle = (field) => {
    setActiveDropdown(activeDropdown === field ? null : field);
  };

  const handleSelect = (field, value) => {
    if (field === "filters") {
      // For filters, toggle selection (multiple selection)
      setSearchData((prev) => {
        const currentFilters = prev.filters || [];
        if (currentFilters.includes(value)) {
          return { ...prev, filters: currentFilters.filter((f) => f !== value) };
        } else {
          return { ...prev, filters: [...currentFilters, value] };
        }
      });
    } else {
      setSearchData({ ...searchData, [field]: value });
      setActiveDropdown(null);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="relative z-20 h-[45vh] min-h-[400px] flex items-center justify-center overflow-visible">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl px-4">
          <h1 className="text-white font-serif drop-shadow-xl mb-4">
            ADVENTURE TRIPS IN INDIA
          </h1>

          <h4 className="text-white/90 font-extralight tracking-wider mb-10">
            Fixed itineraries • Optional add-ons • Instant confirmation •
            Verified partners
          </h4>
        </div>

        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full px-4 z-50 hidden md:flex justify-center">
          <div className="mx-auto max-w-5xl bg-white rounded-full shadow-2xl py-5 px-3 flex items-center">
            {/* Where */}
            <div className="flex-1 flex flex-col text-left px-5 border-r border-gray-200 relative" ref={destinationRef}>
              <label className="text-[10px] font-bold text-gray-900 uppercase mb-0.5">
                Where
              </label>
              <input
                type="text"
                placeholder="Search destinations"
                className="w-full text-sm text-gray-700 outline-none bg-transparent cursor-pointer"
                value={searchData.destination}
                onChange={(e) =>
                  setSearchData({ ...searchData, destination: e.target.value })
                }
                onFocus={() => handleDropdownToggle("destination")}
              />
              <SearchDropdown
                isOpen={activeDropdown === "destination"}
                onClose={() => setActiveDropdown(null)}
                suggestions={suggestionData.destination}
                onSelect={(value) => handleSelect("destination", value)}
                searchValue={searchData.destination}
              />
            </div>

            {/* Type of packages */}
            <div className="flex-1 flex flex-col text-left px-5 border-r border-gray-200 relative" ref={packageTypeRef}>
              <label className="text-[10px] font-bold text-gray-900 uppercase mb-0.5">
                Type of packages
              </label>
              <input
                type="text"
                placeholder="Select packages"
                className="w-full text-sm text-gray-700 outline-none bg-transparent cursor-pointer"
                value={searchData.packageType}
                onChange={(e) =>
                  setSearchData({ ...searchData, packageType: e.target.value })
                }
                onFocus={() => handleDropdownToggle("packageType")}
              />
              <SearchDropdown
                isOpen={activeDropdown === "packageType"}
                onClose={() => setActiveDropdown(null)}
                suggestions={suggestionData.packageType}
                onSelect={(value) => handleSelect("packageType", value)}
                searchValue={searchData.packageType}
              />
            </div>

            {/* Days */}
            <div className="w-40 flex flex-col text-left px-5 border-r border-gray-200 relative" ref={daysRef}>
              <label className="text-[10px] font-bold text-gray-900 uppercase mb-0.5">
                Days
              </label>
              <input
                type="text"
                placeholder="Select Days"
                className="w-full text-sm text-gray-700 outline-none bg-transparent cursor-pointer"
                value={searchData.days}
                onChange={(e) =>
                  setSearchData({ ...searchData, days: e.target.value })
                }
                onFocus={() => handleDropdownToggle("days")}
              />
              <SearchDropdown
                isOpen={activeDropdown === "days"}
                onClose={() => setActiveDropdown(null)}
                suggestions={suggestionData.days}
                onSelect={(value) => handleSelect("days", value)}
                searchValue={searchData.days}
              />
            </div>

            {/* Filters */}
            <div className="w-40 flex flex-col text-left px-5 relative" ref={filtersRef}>
              <label className="text-[10px] font-bold text-gray-900 uppercase mb-0.5">
                More Filters
              </label>
              <input
                type="text"
                placeholder="Select"
                className="w-full text-sm text-gray-700 outline-none bg-transparent cursor-pointer"
                value={searchData.filters.length > 0 ? `${searchData.filters.length} selected` : ""}
                readOnly
                onClick={() => handleDropdownToggle("filters")}
              />
              <MultiSelectDropdown
                isOpen={activeDropdown === "filters"}
                onClose={() => setActiveDropdown(null)}
                suggestions={suggestionData.filters}
                selectedItems={searchData.filters}
                onSelect={(value) => handleSelect("filters", value)}
                position={{ top: "60px", left: 0 }}
              />
            </div>
            <Button variant="secondry" onClick={handleSearch}>
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* MOBILE SEARCH */}
      <div className="container">
      <div className=" md:hidden relative mt-6 mb-6">
        <div className="mx-auto max-w-sm bg-white/95 backdrop-blur-lg rounded-2xl p-5 shadow-2xl space-y-4">
          {/* Where */}
          <div className="relative" ref={destinationMobileRef}>
            <input
              type="text"
              placeholder="Search destinations"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none"
              value={searchData.destination}
              onChange={(e) =>
                setSearchData({ ...searchData, destination: e.target.value })
              }
              onFocus={() => handleDropdownToggle("destination-mobile")}
            />
            <SearchDropdown
              isOpen={activeDropdown === "destination-mobile"}
              onClose={() => setActiveDropdown(null)}
              suggestions={suggestionData.destination}
              onSelect={(value) => handleSelect("destination", value)}
              searchValue={searchData.destination}
            />
          </div>

          {/* Type + Days */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative" ref={packageTypeMobileRef}>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">
                Type
              </label>
              <input
                type="text"
                placeholder="Select"
                className="w-full border border-gray-200 rounded-xl px-3 py-3 text-sm outline-none cursor-pointer"
                value={searchData.packageType}
                onChange={(e) =>
                  setSearchData({ ...searchData, packageType: e.target.value })
                }
                onFocus={() => handleDropdownToggle("packageType-mobile")}
              />
              <SearchDropdown
                isOpen={activeDropdown === "packageType-mobile"}
                onClose={() => setActiveDropdown(null)}
                suggestions={suggestionData.packageType}
                onSelect={(value) => handleSelect("packageType", value)}
                searchValue={searchData.packageType}
              />
            </div>

            <div className="relative" ref={daysMobileRef}>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">
                Days
              </label>
              <input
                type="text"
                placeholder="Select"
                className="w-full border border-gray-200 rounded-xl px-3 py-3 text-sm outline-none cursor-pointer"
                value={searchData.days}
                onChange={(e) =>
                  setSearchData({ ...searchData, days: e.target.value })
                }
                onFocus={() => handleDropdownToggle("days-mobile")}
              />
              <SearchDropdown
                isOpen={activeDropdown === "days-mobile"}
                onClose={() => setActiveDropdown(null)}
                suggestions={suggestionData.days}
                onSelect={(value) => handleSelect("days", value)}
                searchValue={searchData.days}
              />
            </div>
          </div>

          {/* More Filters */}
          <div className="relative" ref={filtersMobileRef}>
            <label className="text-xs font-semibold text-gray-600 mb-1 block">
              More Filters
            </label>
            <input
              type="text"
              placeholder="Select"
              className="w-full border border-gray-200 rounded-xl px-3 py-3 text-sm outline-none cursor-pointer"
              value={searchData.filters.length > 0 ? `${searchData.filters.length} selected` : ""}
              readOnly
              onClick={() => handleDropdownToggle("filters-mobile")}
            />
            <MultiSelectDropdown
              isOpen={activeDropdown === "filters-mobile"}
              onClose={() => setActiveDropdown(null)}
              suggestions={suggestionData.filters}
              selectedItems={searchData.filters}
              onSelect={(value) => handleSelect("filters", value)}
            />
          </div>
          <Button variant="secondry" onClick={handleSearch}>
            Search
          </Button>
        </div>
      </div>
      </div>
    </>
  );
}