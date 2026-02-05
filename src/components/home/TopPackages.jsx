"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import TicketPackageCard from "@/components/ui/TicketPackageCard";
import SliderArrows from "../ui/SlideArrows";
import { Swiper, SwiperSlide } from "swiper/react";


export default function SponsoredPackage() {
  const [swiper, setSwiper] = useState(null);

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

  return (
    <div className="container">
      <section className="my-[65px]">
        <div
          className="bg-white rounded-[28px] p-6 lg:p-8"
          style={{
            boxShadow:
              "0 10px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold text-[#0f172a] leading-none">
              Top Packages
            </h2>

            <SliderArrows
              onPrev={() => swiper?.slidePrev()}
              onNext={() => swiper?.slideNext()}
            />
          </div>

          {/* Slider */}
          <Swiper
            onSwiper={setSwiper}
            slidesPerView="auto"
            spaceBetween={24}
            freeMode
            className="pb-6 sponsored-swiper"
          >
            {packages.map((p) => (
              <SwiperSlide key={p.id} className="!w-auto">
                {/* SHADOW SAFE ZONE */}
                <div className="ticket-shadow-wrap">
                  <TicketPackageCard p={p} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-end ">
            <Button variant="primary">View More</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
