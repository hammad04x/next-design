"use client";

import { useRef } from "react";
import Image from "next/image";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import SliderArrows from "@/components/ui/SlideArrows";

export default function AlsoLikeSection() {
  const sliderRef = useRef(null);

  const items = [
    {
      title: "Weekend Getaways",
      meta: "5,459 Hotels • 42 Packages",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
    },
    {
      title: "Wellness Retreats",
      meta: "5,459 Hotels • 42 Packages",
      img: "https://images.unsplash.com/photo-1523958203904-cdcb402031fd?w=1200&q=80",
    },
    {
      title: "Pilgrimage Trips",
      meta: "5,459 Hotels • 42 Packages",
      img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
    },
    {
      title: "Snow Adventures",
      meta: "5,459 Hotels • 42 Packages",
      img: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=1200&q=80",
    },
    {
      title: "Water Sports",
      meta: "5,459 Hotels • 42 Packages",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
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
     <div className="container">
    <section className="w-full py-16 px-4 sm:px-13">
      <div className="max-w-7xl mx-auto space-y-14">

        {/* HOW IT WORKS */}
        <div
          className="relative overflow-hidden rounded-3xl bg-center bg-cover py-10 px-6 text-white shadow-lg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              How Adventure Packages Work
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base font-medium">
              <span className="flex items-center gap-2">
                <IoCheckmarkCircleOutline className="text-lg" />
                Itinerary is fixed by operator
              </span>
              <span className="flex items-center gap-2">
                <IoCheckmarkCircleOutline className="text-lg" />
                You can add optional activities
              </span>
              <span className="flex items-center gap-2">
                <IoCheckmarkCircleOutline className="text-lg" />
                Price updates instantly
              </span>
            </div>
          </div>
        </div>

        {/* YOU MAY ALSO LIKE */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              You may also like
            </h3>

            <SliderArrows onPrev={scrollLeft} onNext={scrollRight} />
          </div>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="slide-card snap-start min-w-[260px] sm:min-w-[300px] md:min-w-[340px] lg:min-w-[360px]
                relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer flex-shrink-0"
              >
                <div className="relative w-full h-56 sm:h-64">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 360px"
                    priority={i === 0}
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg sm:text-xl font-bold">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm opacity-90">
                    {item.meta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
    </div>
  );
}
