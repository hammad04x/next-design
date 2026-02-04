"use client";
import { useState, useRef, useEffect } from "react";
import Button from "@/components/ui/Button";
import TicketPackageCard from "@/components/ui/TicketPackageCard";


/* EXACT ticket cut geometry */
function TicketClipDef() {
    const W = 317;   // EXACT card width
    const H = 320;   // EXACT ticket body height

    const smallTop = [20, 51, 82];
    const bigMid = [127];
    const smallBot = [182, 213.5, 245];

    const smallR = 11;
    const bigR = 22;

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



export default function SponsoredPackage() {
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

            <div className="max-w-[7xl]  mx-auto bg-white rounded-[28px] p-8 lg:p-12"
                style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)' }}>

                {/* Header */}
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold text-[#0f172a] leading-none">Sponsored Packages</h2>
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
                    className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 pl-[7px]"
                >
                    {packages.map((p) => (
                        <TicketPackageCard key={p.id} p={p} sponsored />
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