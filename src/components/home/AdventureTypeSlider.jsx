"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const items = [
  { title: "Trekking", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
  { title: "Water Sports", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { title: "Snow Adventure", img: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66" },
  { title: "Jungle & Safari", img: "https://images.unsplash.com/photo-1543248939-4296e1fea89b" },
  { title: "Trekking", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
  { title: "Water Sports", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { title: "Snow Adventure", img: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66" },
  { title: "Jungle & Safari", img: "https://images.unsplash.com/photo-1543248939-4296e1fea89b" },
];

export default function AdventureTypeSlider() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="container">
      <section className="adventure-wrapper mt-[90px] mb-[60px] rounded-[20px]">
        <div className="mx-auto bg-white rounded-[24px] px-6 py-8 relative">
          <div className="w-[95%] mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Explore Adventure by Type
            </h2>

            {/* SLIDER */}
            <div
              ref={sliderRef}
              className="
                flex gap-6
                overflow-x-auto scroll-smooth no-scrollbar
                snap-x snap-mandatory
                scroll-px-4 md:scroll-px-0
              "
            >
              {items.map((item, i) => (
                <div
                  key={i}
                  className="
                    adventure-card
                    snap-start
                    relative overflow-hidden rounded-xl
                    flex-shrink-0

                    w-[89%]        /* mobile: ~1 card */
                    sm:w-[48%]     /* mobile landscape: ~2 cards */
                    md:w-[48%]       /* tablet: EXACTLY 3 cards */
                    lg:w-[23%]       /* desktop: unchanged */
                  "
                >
                  <div className="relative w-full h-[135px]">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 33vw, 25vw"
                      priority={i === 0}
                    />
                  </div>

                  <div className="adventure-overlay" />
                  <span className="adventure-title">{item.title}</span>
                </div>
              ))}
            </div>

            {/* ARROWS (all screens) */}
            <button
              onClick={scrollLeft}
              className="
                absolute left-2 top-[62%] -translate-y-1/2
                bg-black text-white shadow-md
                p-2 rounded-full z-20
              "
            >
              <ChevronLeft />
            </button>

            <button
              onClick={scrollRight}
              className="
                absolute right-2 top-[62%] -translate-y-1/2
                bg-black text-white shadow-md
                p-2 rounded-full z-20
              "
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
