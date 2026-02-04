"use client";
import { useState, useRef, useEffect } from "react";
import Button from "@/components/ui/Button";

/* EXACT ticket cut geometry */
function TicketClipDef() {
  const W = 376;   // EXACT card width
  const H = 320;   // EXACT ticket body height

  const smallTop = [20, 52, 82];
  const bigMid   = [127];
  const smallBot = [182, 215, 245];

  const smallR = 11;
  const bigR   = 22;

  const make = (y, r, side) =>
    side === "right"
      ? `L ${W} ${y - r} A ${r} ${r} 0 0 0 ${W} ${y + r}`
      : `L 0 ${y + r} A ${r} ${r} 0 0 0 0 ${y - r}`;

  return (
    <svg width="0" height="0" style={{ position: "absolute" }}>
      <defs>
        <clipPath id="ticket-scallop" clipPathUnits="userSpaceOnUse">
          <path
            d={[
              `M 0 0 L ${W} 0`,
              ...smallTop.map(y => make(y, smallR, "right")),
              ...bigMid.map(y => make(y, bigR, "right")),
              ...smallBot.map(y => make(y, smallR, "right")),
              `L ${W} ${H} L 0 ${H}`,
              ...smallBot.slice().reverse().map(y => make(y, smallR, "left")),
              ...bigMid.map(y => make(y, bigR, "left")),
              ...smallTop.slice().reverse().map(y => make(y, smallR, "left")),
              "Z"
            ].join(" ")}
          />
        </clipPath>
      </defs>
    </svg>
  );
}



export default function TopPackages() {
  const scrollRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const packages = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
      title: "Paris Group Tour Summer 2026",
      nights: "4N",
      days: "5D",
      location: "4N Goa",
      features: ["Round Trip Flights", "Airport Transfers", "4 Star Hotel", "Selected Meals"],
      price: "10,258",
      originalPrice: "12,050",
      discount: "11% Off",
      note: "This price is lower than the average price in January",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      title: "Paris Group Tour Summer 2026",
      nights: "4N",
      days: "5D",
      location: "4N Goa",
      features: ["Round Trip Flights", "Airport Transfers", "4 Star Hotel", "Selected Meals"],
      price: "10,258",
      originalPrice: "12,050",
      discount: "11% Off",
      note: "This price is lower than the average price in January",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800",
      title: "Paris Group Tour Summer 2026",
      nights: "4N",
      days: "5D",
      location: "4N Goa",
      features: ["Round Trip Flights", "Airport Transfers", "4 Star Hotel", "Selected Meals"],
      price: "10,258",
      originalPrice: "12,050",
      discount: "11% Off",
      note: "This price is lower than the average price in January",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800",
      title: "Paris Group Tour Summer 2026",
      nights: "4N",
      days: "5D",
      location: "4N Goa",
      features: ["Round Trip Flights", "Airport Transfers", "4 Star Hotel", "Selected Meals"],
      price: "10,258",
      originalPrice: "12,050",
      discount: "11% Off",
      note: "This price is lower than the average price in January",
    },
  ];

  const check = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 5);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
  };

  const move = (dir) => {
    const el = scrollRef.current;
    el.scrollBy({
      left: dir === "left" ? -el.clientWidth / 1.1 : el.clientWidth / 1.1,
      behavior: "smooth",
    });
    setTimeout(check, 300);
  };

  useEffect(() => { check(); }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(to bottom, #eef6ff 0%, #ffffff 100%)' }}>
      <TicketClipDef />

      <div className="max-w-[1400px] mx-auto bg-white rounded-[28px] p-8 lg:p-12"
        style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)' }}>

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[44px] font-bold text-[#0f172a] leading-none">Top Packages</h2>
          <div className="flex gap-3">
            <button
              onClick={() => move("left")}
              disabled={!canLeft}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all ${canLeft
                ? "bg-[#2fa4ff] text-white shadow-md hover:bg-[#1c84e3]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
            >
              ‹
            </button>
            <button
              onClick={() => move("right")}
              disabled={!canRight}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all ${canRight
                ? "bg-[#2fa4ff] text-white shadow-md hover:bg-[#1c84e3]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
            >
              ›
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          onScroll={check}
          className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2"
        >
          {packages.map((p) => (
            <div
              key={p.id}
              className="flex-shrink-0 snap-start w-[376px]"
            >
              {/* IMAGE */}
              <div className="package-image-warapper relative h-[240px] rounded-[6px] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />

              </div>

              {/* TICKET CARD */}
              <div className="ticket-shell">
                <div className="ticket-body" style={{ clipPath: "url(#ticket-scallop)" }}>
                  <div className="px-[25px] py-[15px]">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-[17px] leading-tight mb-1 text-[#0f172a]">
                        {p.title}
                      </h3>
                      <span className="border border-blue-400  text-[11px]  px-2 py-[1px] rounded">
                        {p.nights}/{p.days}
                      </span>
                    </div>
                    <p className="text-[#64748b] text-[13px] mb-2">
                      {p.location}
                    </p>

                    <div className="border-t border-dashed border-gray-300 my-3" />

                    <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-[13px] mb-3 ml-2 text-[#0f172a]">
                      {p.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-gray-400 text-[10px] mt-[3px]">●</span>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-[#e0f2fe] px-3 py-1 border border-blue-400 rounded-sm mb-4 flex items-center justify-between gap-3">
                      <p className="text-[#64748b] text-[11px] leading-tight flex-1 w-[50%]">
                        {p.note}
                      </p>

                      <div className="text-right flex-shrink-0 w-[50%]">
                        <div className="font-bold text-[17px] text-[#0f172a]">₹{p.price} <span className="font-normal text-[12px]">/Person</span></div>
                        <div className="flex items-center gap-2 justify-end">
                          <span className="line-through text-[12px] text-[#94a3b8]">₹{p.originalPrice}</span>
                          <span className="text-[#16a34a] text-[12px] font-semibold">{p.discount}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button className="bg-[#2fa4ff] hover:bg-[#1c84e3] text-white text-[13px] font-semibold px-6 py-2 rounded-lg transition-colors">
                        Book Now
                      </button>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="flex justify-end mt-8">
          <button className="bg-[#2fa4ff] hover:bg-[#1c84e3] text-white text-[15px] font-semibold px-8 py-3 rounded-xl transition-colors shadow-md">
            View more
          </button>
        </div>
      </div>
    </section>
  );
}