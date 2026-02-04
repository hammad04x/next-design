"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import AdventureCard from "./AdventureCard";

const items = [
    { title: "Trekking", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
    { title: "Water Sports", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    { title: "Snow Adventure", img: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66" },
    { title: "Jungle & Safari", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    { title: "Trekking", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
    { title: "Water Sports", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    { title: "Snow Adventure", img: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66" },
    { title: "Jungle & Safari", img: "https://images.unsplash.com/photo-1543248939-4296e1fea89b" },
];

export default function AdventureTypeSlider() {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
        <section className="adventure-wrapper max-w-7xl w-[92%] mx-[auto] mt-[90px] mb-[60px] rounded-[20px]">
            <div className=" mx-auto bg-white rounded-[24px] px-6 py-8 relative">
                <div className="w-[95%] mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Explore Adventure by Type</h2>

                    <div
                        ref={sliderRef}
                        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
                    >
                        {items.map((item, i) => (
                            <AdventureCard
                                key={i}
                                title={item.title}
                                img={item.img}
                                className="max-w-[23.2%] sm:w-1/2 md:w-1/3 lg:w-1/4 snap-start"
                            />
                        ))}
                    </div>

                    <button
                        onClick={scrollLeft}
                        className="hidden md:flex absolute left-2 top-[62%] -translate-y-1/2 bg-black text-white shadow-md p-2 rounded-full z-20"
                    >
                        <ChevronLeft />
                    </button>

                    <button
                        onClick={scrollRight}
                        className="hidden md:flex absolute right-2 top-[62%] -translate-y-1/2 bg-black text-white shadow-md p-2 rounded-full z-20"
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
}
