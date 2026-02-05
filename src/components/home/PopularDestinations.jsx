"use client";

import { useRef } from "react";
import Image from "next/image";
import SliderArrows from "@/components/ui/SlideArrows";

export default function PopularDestinations() {
  const sliderRef = useRef(null);

  const destinations = [
    {
      name: "Manali",
      price: "₹10,258",
      img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
    },
    {
      name: "Rishikesh",
      price: "₹10,258",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
    },
    {
      name: "Spiti",
      price: "₹10,258",
      img: "https://images.unsplash.com/photo-1523958203904-cdcb402031fd?w=1200&q=80",
    },
    {
      name: "Meghalaya",
      price: "₹10,258",
      img: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=1200&q=80",
    },
    {
      name: "Ladakh",
      price: "₹10,258",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
    },
  ];

  const scrollLeft = () => {
    const card = sliderRef.current.querySelector(".slide-card");
    if (!card) return;
    sliderRef.current.scrollBy({
      left: -(card.offsetWidth + 24),
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const card = sliderRef.current.querySelector(".slide-card");
    if (!card) return;
    sliderRef.current.scrollBy({
      left: card.offsetWidth + 24,
      behavior: "smooth",
    });
  };

  return (
    <section className="container py-16 ">
      <div className="  bg-white/80 rounded-3xl shadow-xl p-5">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900">
            Popular Adventure Destinations
          </h2>

          <SliderArrows onPrev={scrollLeft} onNext={scrollRight} />
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
        >
          {destinations.map((d, i) => (
            <div
              key={i}
              className="slide-card snap-start min-w-[300px]
              relative rounded-[28px] overflow-hidden flex-shrink-0 group"
            >
              {/* Image */}
              <div className="relative w-full h-[400px]">
                <Image
                  src={d.img}
                  alt={d.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 340px"
                  priority={i === 0}
                />
              </div>

              {/* Fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-white/25 backdrop-blur-sm text-white">
                <h3 className="text-2xl font-bold">{d.name}</h3>

                <div className="flex items-center justify-between mt-1">
                  <p className="text-sm">
                    Starting from{" "}
                    <span className="text-lg font-medium">{d.price}</span>
                  </p>

                  <button className="inline-flex items-center gap-1 bg-white text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow hover:bg-gray-100 transition">
                    Explore Now →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
