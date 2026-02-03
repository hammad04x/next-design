"use client";
import { useState, useRef, useEffect } from "react";
import Button from "@/components/ui/Button";

/* SVG scallop clip-path */
function TicketClipDef() {
  const W = 440, H = 320, R = 10;
  const ys = [H * 0.18, H * 0.36, H * 0.54, H * 0.72];

  return (
    <svg width="0" height="0" style={{ position: "absolute" }}>
      <defs>
        <clipPath id="ticket-scallop" clipPathUnits="objectBoundingBox">
          <path
            d={[
              "M 0 0 L 1 0",
              ...ys.map(y => {
                const y1 = (y - R) / H;
                const y2 = (y + R) / H;
                const rx = R / W;
                const ry = R / H;
                return `L 1 ${y1} A ${rx} ${ry} 0 0 0 1 ${y2}`;
              }),
              "L 1 1 L 0 1",
              ...ys.reverse().map(y => {
                const y1 = (y + R) / H;
                const y2 = (y - R) / H;
                const rx = R / W;
                const ry = R / H;
                return `L 0 ${y1} A ${rx} ${ry} 0 0 0 0 ${y2}`;
              }),
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
      features: ["Round Trip Flights","Airport Transfers","4 Star Hotel","Selected Meals"],
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
      features: ["Round Trip Flights","Airport Transfers","4 Star Hotel","Selected Meals"],
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
      features: ["Round Trip Flights","Airport Transfers","4 Star Hotel","Selected Meals"],
      price: "10,258",
      originalPrice: "12,050",
      discount: "11% Off",
      note: "This price is lower than the average price in January",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800",
      title: "Paris Group Tour Summer 2026",
      nights: "4N",
      days: "5D",
      location: "4N Goa",
      features: ["Round Trip Flights","Airport Transfers","4 Star Hotel","Selected Meals"],
      price: "10,258",
      originalPrice: "12,050",
      discount: "11% Off",
      note: "This price is lower than the average price in January",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800",
      title: "Paris Group Tour Summer 2026",
      nights: "4N",
      days: "5D",
      location: "4N Goa",
      features: ["Round Trip Flights","Airport Transfers","4 Star Hotel","Selected Meals"],
      price: "10,258",
      originalPrice: "12,050",
      discount: "11% Off",
      note: "This price is lower than the average price in January",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800",
      title: "Paris Group Tour Summer 2026",
      nights: "4N",
      days: "5D",
      location: "4N Goa",
      features: ["Round Trip Flights","Airport Transfers","4 Star Hotel","Selected Meals"],
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
      left: dir === "left"
        ? -el.clientWidth / 1.1
        : el.clientWidth / 1.1,
      behavior: "smooth",
    });
    setTimeout(check, 300);
  };

  useEffect(() => { check(); }, []);

  return (
    <section className="py-12 px-6 bg-gradient-to-b from-[#eef6ff] to-white">
      <TicketClipDef />

      <div className="max-w-7xl mx-auto bg-white rounded-[28px] shadow-2xl p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[40px] font-bold">Top Packages</h2>
          <div className="flex gap-3">
            <button onClick={() => move("left")} disabled={!canLeft}
              className={`w-11 h-11 rounded-full shadow-md ${
                canLeft ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-400"
              }`}>‹</button>
            <button onClick={() => move("right")} disabled={!canRight}
              className={`w-11 h-11 rounded-full shadow-md ${
                canRight ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-400"
              }`}>›</button>
          </div>
        </div>

        {/* Slider */}
        <div ref={scrollRef} onScroll={check}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory">

          {packages.map((p) => (
            <div key={p.id}
              className="flex-shrink-0 snap-start
                w-[85%] sm:w-[48%] lg:w-[23%]">

              {/* IMAGE */}
              <div className="relative h-[190px] rounded-t-[22px] overflow-hidden shadow-md">
                <img src={p.image} className="w-full h-full object-cover" />
                <span className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold border">
                  {p.nights}/{p.days}
                </span>
              </div>

              {/* PAPER */}
              <div className="ticket-shell">
                <div className="ticket-body" style={{ clipPath: "url(#ticket-scallop)" }}>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{p.title}</h3>
                    <p className="text-gray-500 text-sm mb-3">{p.location}</p>

                    <div className="grid grid-cols-2 gap-2 text-sm mb-3 pb-3 border-b border-dotted">
                      {p.features.map((f,i)=><div key={i}>• {f}</div>)}
                    </div>

                    <div className="bg-blue-50 text-blue-600 text-xs p-2 rounded mb-3">
                      {p.note}
                    </div>

                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-xl font-bold">₹{p.price}</div>
                        <div className="text-xs text-green-600">{p.discount}</div>
                      </div>
                      <Button variant="primary">Book</Button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="flex justify-end mt-6">
          <Button variant="primary">View more</Button>
        </div>
      </div>
    </section>
  );
}
