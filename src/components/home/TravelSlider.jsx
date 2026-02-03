"use client";

import { useState } from "react";

const agentsData = [
  {
    id: 1,
    name: "MakemyTrip",
    big: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1000",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Makemytrip_logo.png",
    slides: [
      { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400", title: "Winter Event", desc: "5,459 Hotels • 42 Packages" },
      { img: "https://images.unsplash.com/photo-1519821172144-4f87d85de2a3?q=80&w=400", title: "Summer Getaway", desc: "3,200 Hotels • 30 Packages" },
      { img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=400", title: "Adventure Tour", desc: "1,500 Hotels • 20 Packages" },
    ],
  },
  {
    id: 2,
    name: "holidaytribe",
    big: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000",
    logo: "https://cdn.holidaytribe.ai/website/ht_logo_white.png",
    slides: [
      { img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=400", title: "Winter Event", desc: "5,459 Hotels • 42 Packages" },
      { img: "https://images.unsplash.com/photo-1506744038136-46273869b3fb?q=80&w=400", title: "Beach Escape", desc: "4,000 Hotels • 35 Packages" },
      { img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=400", title: "Mountain Retreat", desc: "2,800 Hotels • 25 Packages" },
    ],
  },
  {
    id: 3,
    name: "Expedia",
    big: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1000",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Expedia_Logo_2023.png",
    slides: [
      { img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=400", title: "Winter Event", desc: "5,459 Hotels • 42 Packages" },
      { img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400", title: "Exotic Vacation", desc: "4,500 Hotels • 40 Packages" },
      { img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=400", title: "City Break", desc: "3,000 Hotels • 28 Packages" },
    ],
  },
  {
    id: 4,
    name: "thrillophilia",
    big: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000",
    logo: "https://res.cloudinary.com/thrillophilia/image/upload/v1/logo.png",
    slides: [
      { img: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=400", title: "Winter Event", desc: "5,459 Hotels • 42 Packages" },
      { img: "https://images.unsplash.com/photo-1447752875215-b2766acb602b?q=80&w=400", title: "Thrill Seekers", desc: "2,000 Hotels • 15 Packages" },
      { img: "https://images.unsplash.com/photo-1505773271783-1da4b862d54c?q=80&w=400", title: "Nature Expedition", desc: "1,800 Hotels • 18 Packages" },
    ],
  },
];

function Card({ data }) {
  const [miniIndex, setMiniIndex] = useState(0);

  const nextMini = () =>
    setMiniIndex((prev) => (prev + 1) % data.slides.length);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full">

      <div className="relative p-2">
        <div className="relative rounded-xl overflow-hidden">
          <img
            src={data.big}
            className="w-full h-[210px] object-cover"
            alt="main"
          />

          <div className="absolute bottom-3 right-3 w-[170px] bg-white rounded-xl shadow-xl p-1">
            <img
              src={data.slides[miniIndex].img}
              className="w-full h-[80px] object-cover rounded-lg"
              alt="mini"
            />

            <div className="flex items-center justify-between px-2 py-1">
              <div>
                <p className="text-xs font-semibold">
                  {data.slides[miniIndex].title}
                </p>
                <p className="text-[10px] text-gray-500">
                  {data.slides[miniIndex].desc}
                </p>
              </div>

              <button
                onClick={nextMini}
                className="bg-white w-6 h-6 rounded-full shadow flex items-center justify-center"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-8 pb-4 flex-grow relative">
        <div className="absolute -top-6 left-4 flex items-center gap-2">
          <div className="bg-white p-1 rounded-full shadow border-2 border-white">
            <img
              src={data.logo}
              className="w-12 h-12 rounded-full object-contain"
              alt="logo"
            />
          </div>

          <h3 className="text-lg font-bold">{data.name}</h3>
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold">
            180+ Trips Completed
          </p>

          <div className="flex items-center gap-2 mt-1">
            <div className="text-orange-400 text-sm">★★★★☆</div>
            <p className="text-sm">
              4.5 <span className="text-gray-400">(205 Reviews)</span>
            </p>
          </div>

          <div className="flex justify-end mt-3">
            <button className="bg-[#0096e1] text-white text-xs px-5 py-2 rounded-full">
              View more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TravelSlider() {
  const [startIndex, setStartIndex] = useState(0);

  const next = () =>
    setStartIndex((p) => (p + 1) % agentsData.length);

  const prev = () =>
    setStartIndex((p) => (p - 1 + agentsData.length) % agentsData.length);

  const currentItems = [...agentsData, ...agentsData].slice(
    startIndex,
    startIndex + 4
  );

  return (
    <div className="w-full bg-[#f1f8ff] py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Top Travel Agents on TravelX
          </h2>

          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-9 h-9 bg-[#40bef9] text-white rounded-full"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="w-9 h-9 bg-[#40bef9] text-white rounded-full"
            >
              ›
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentItems.map((agent, i) => (
            <Card key={`${agent.id}-${i}`} data={agent} />
          ))}
        </div>
      </div>
    </div>
  );
}
