"use client";
import { useState, useRef, useEffect } from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";
import SliderArrows from "../ui/SlideArrows";
import TicketPackageCard from "@/components/ui/TicketPackageCard";





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
      features: [
        "Round Trip Flights",
        "Airport Transfers",
        "4 Star Hotel",
        "Selected Meals",
      ],
      price: "10,258",
      originalPrice: "12,050",
      discount: "11% Off",
      note: "This price is lower than the average price in January",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      title: "Paris Group Tour Summer 2026",
      nights: "4N",
      days: "5D",
      location: "4N Goa",
      features: [
        "Round Trip Flights",
        "Airport Transfers",
        "4 Star Hotel",
        "Selected Meals",
      ],
      price: "10,258",
      originalPrice: "12,050",
      discount: "11% Off",
      note: "This price is lower than the average price in January",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800",
      title: "Paris Group Tour Summer 2026",
      nights: "4N",
      days: "5D",
      location: "4N Goa",
      features: [
        "Round Trip Flights",
        "Airport Transfers",
        "4 Star Hotel",
        "Selected Meals",
      ],
      price: "10,258",
      originalPrice: "12,050",
      discount: "11% Off",
      note: "This price is lower than the average price in January",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800",
      title: "Paris Group Tour Summer 2026",
      nights: "4N",
      days: "5D",
      location: "4N Goa",
      features: [
        "Round Trip Flights",
        "Airport Transfers",
        "4 Star Hotel",
        "Selected Meals",
      ],
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

  useEffect(() => {
    check();
  }, []);

  return (
    <div className="container">
    <section className="py-16">

      <div
        className=" mx-auto bg-white rounded-[28px] p-2 lg:p-8"
        style={{
          boxShadow: "0 10px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[44px] font-bold text-[#0f172a] leading-none">
            Top Packages
          </h2>
          <SliderArrows
            onPrev={() => move("left")}
            onNext={() => move("right")}
            disabledPrev={!canLeft}
            disabledNext={!canRight}
          />
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          onScroll={check}
          className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2"
        >
          {packages.map((p) => (
            <TicketPackageCard key={p.id} p={p} />
          ))}

        </div>

        <div className="flex justify-end mt-2">
          <Button variant="primary">
            View More
          </Button>
        </div>
      </div>
    </section>
    </div>
  );
}