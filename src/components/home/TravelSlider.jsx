"use client";

import { useState, useEffect } from "react";
import SliderArrows from "../ui/SlideArrows";
import Image from "next/image";
import Button from "../ui/Button";

const agentsData = [
  {
    id: 1,
    name: "MakemyTrip",
    big: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1000",
    logo: "https://cdn-icons-png.flaticon.com/512/201/201626.png",
    slides: [
      {
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400",
        title: "Winter Event",
        desc: "5,459 Hotels • 42 Packages",
      },
      {
        img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=400",
        title: "Mountain Retreat",
        desc: "2,800 Hotels • 25 Packages",
      },
      {
        img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=400",
        title: "Beach Vibes",
        desc: "3,200 Hotels • 15 Packages",
      },
    ],
  },
  {
    id: 2,
    name: "holidaytribe",
    big: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000",
    logo: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
    slides: [
      {
        img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=400",
        title: "Winter Event",
        desc: "5,459 Hotels • 42 Packages",
      },
      {
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400",
        title: "Winter Event",
        desc: "5,459 Hotels • 42 Packages",
      },
      {
        img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=400",
        title: "Mountain Retreat",
        desc: "2,800 Hotels • 25 Packages",
      },
    ],
  },
  {
    id: 3,
    name: "Expedia",
    big: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1000",
    logo: "https://cdn-icons-png.flaticon.com/512/201/201626.png",
    slides: [
      {
        img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=400",
        title: "Winter Event",
        desc: "5,459 Hotels • 42 Packages",
      },
      {
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400",
        title: "Exotic Vacation",
        desc: "4,500 Hotels • 40 Packages",
      },
      {
        img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=400",
        title: "City Break",
        desc: "3,000 Hotels • 28 Packages",
      },
    ],
  },
  {
    id: 4,
    name: "thrillophilia",
    big: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000",
    logo: "https://cdn-icons-png.flaticon.com/512/201/201634.png",
    slides: [
      {
        img: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=400",
        title: "Winter Event",
        desc: "5,459 Hotels • 42 Packages",
      },
      {
        img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=400",
        title: "City Break",
        desc: "3,000 Hotels • 28 Packages",
      },
      {
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400",
        title: "Exotic Vacation",
        desc: "4,500 Hotels • 40 Packages",
      },
    ],
  },
];

function Card({ data }) {
  const [miniIndex, setMiniIndex] = useState(0);

  const nextMini = (e) => {
    e.stopPropagation();
    setMiniIndex((prev) => (prev + 1) % data.slides.length);
  };

  return (
    <div className="bg-white rounded-[2rem] shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full">
      <div className="relative p-2.5 pb-0">
        <div className="relative rounded-[1.5rem] overflow-hidden">
          <img
            src={data.big}
            className="w-full h-[300px] sm:h-[350px] object-cover"
            alt="main"
          />

          <div className="absolute bottom-4 right-2 w-[150px] sm:w-[160px] bg-black rounded-[1.5rem] shadow-2xl p-1.5">
            <img
              src={data.slides[miniIndex].img}
              className="w-full h-[65px] sm:h-[71px] object-cover rounded-[1.2rem]"
              alt="mini"
            />

            <div className="relative flex flex-col px-1 py-1 text-white">
              <p className="text-[11px] font-bold leading-tight truncate pr-6">
                {data.slides[miniIndex].title}
              </p>
              <p className="text-gray-400 text-[9px]  ">
               
                 {data.slides[miniIndex].desc}
             
              </p>

              <div className="absolute right-[-7px] -bottom-1 rounded-tl-[2rem] p-1">
                <button
                  onClick={nextMini}
                  className="w-8 h-8 bg-white text-black rounded-full shadow-lg flex items-center justify-center"
                >
                  <span className="text-xl font-light mb-0.5">›</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-6 pb-3 flex-grow relative">
        <div className="absolute -top-6 left-4 flex items-center gap-2">
          <div className="bg-white p-1 rounded-full shadow-md">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={data.logo}
                alt="logo"
                fill
                className="object-cover border border-white rounded-full"
                sizes="48px"
              />
            </div>
          </div>

          <h3 className="font-bold text-gray-900 mt-6 text-[16px] sm:text-[18px]">
            {data.name}
          </h3>
        </div>

        <div className="mt-6">
          <p className="text-[13px] font-semibold text-gray-800">
            180+ Trips Completed
          </p>

          <div className="flex items-center gap-1 mt-0.5">
            <div className="text-orange-400 text-[12px] tracking-tighter">
              ★★★★★
            </div>

            <p className="text-[12px] font-semibold text-gray-900">
              4.5
              <span className="text-gray-400 font-normal ml-1">
                (205 Review)
              </span>
            </p>
          </div>

          <div className="flex justify-end mt-2">
            <Button variant="secondry">View More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TravelSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateView();
    window.addEventListener("resize", updateView);

    return () => window.removeEventListener("resize", updateView);
  }, []);

  const maxIndex = agentsData.length - cardsPerView;

  const next = () => {
    setStartIndex((p) => (p < maxIndex ? p + 1 : p));
  };

  const prev = () => {
    setStartIndex((p) => (p > 0 ? p - 1 : p));
  };

  const currentItems = agentsData.slice(
    startIndex,
    startIndex + cardsPerView
  );

  return (
    <div className="container">
      <section className="py-10 sm:py-16">
        
        {/* RESPONSIVE HEADER FIX */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 sm:mb-8 gap-3">
          
          <h2 className="text-[18px] sm:text-2xl lg:text-3xl font-extrabold text-gray-900">
            Top Travel Agents on TravelX
          </h2>

          <div className="self-end sm:self-auto">
            <SliderArrows onPrev={prev} onNext={next} />
          </div>

        </div>

        {/* REAL SLIDER (NO EXTRA CARDS BELOW) */}
        <div className="overflow-hidden">
          <div className="flex gap-6 transition-all duration-500 pb-[20px]">
            {currentItems.map((agent) => (
              <div
                key={agent.id}
                className={`
                  min-w-full
                  sm:min-w-[calc(100%/2-12px)]
                  lg:min-w-[calc(100%/3-16px)]
                `}
              >
                <Card data={agent} />
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
