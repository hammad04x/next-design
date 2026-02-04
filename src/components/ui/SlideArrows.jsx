// components/ui/SlideArrows.jsx
"use client";

export default function SliderArrows({ onPrev, onNext, disabledPrev, disabledNext }) {
  return (
    <div className="flex gap-3">
      <button
        onClick={onPrev}
        disabled={disabledPrev}
        className={`w-9 h-9 rounded-full flex items-center justify-center text-xl transition-all ${
          disabledPrev
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-[#2fa4ff] text-white shadow-md hover:bg-[#1c84e3]"
        }`}
      >
        ‹
      </button>

      <button
        onClick={onNext}
        disabled={disabledNext}
        className={`w-9 h-9 rounded-full flex items-center justify-center text-xl transition-all ${
          disabledNext
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-[#2fa4ff] text-white shadow-md hover:bg-[#1c84e3]"
        }`}
      >
        ›
      </button>
    </div>
  );
}
