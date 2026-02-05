"use client";

import { useState } from "react";
import Button from "../ui/Button";

export default function HeroSection() {
  const [searchData, setSearchData] = useState({
    destination: "",
    packageType: "",
    days: "",
    filters: "",
  });

  const handleSearch = () => {
    console.log("Search data:", searchData);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative z-20  h-[45vh] min-h-[400px] flex items-center justify-center overflow-visible">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
        </div>

        <div className=" container relative z-10 flex flex-col items-center text-center  px-4">
          <h1 className="text-white font-serif drop-shadow-xl mb-4">
            ADVENTURE TRIPS IN INDIA
          </h1>

          <h4 className="text-white/90 font-extralight tracking-wider mb-10">
            Fixed itineraries • Optional add-ons • Instant confirmation •
            Verified partners

          </h4>
        </div>

        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full px-4 z-50 hidden md:flex justify-center">
          <div className="mx-auto max-w-5xl bg-white rounded-full shadow-2xl py-2 px-3 flex items-center ">
            <div className="flex-1 flex flex-col text-left px-5 border-r border-gray-200">
              <label className="text-[10px] font-bold text-gray-900 uppercase mb-0.5">
                Where
              </label>
              <input
                type="text"
                placeholder="Search destinations"
                className="w-full text-sm text-gray-700 outline-none bg-transparent"
                value={searchData.destination}
                onChange={(e) =>
                  setSearchData({ ...searchData, destination: e.target.value })
                }
              />
            </div>

            <div className="flex-1 flex flex-col text-left px-5 border-r border-gray-200">
              <label className="text-[10px] font-bold text-gray-900 uppercase mb-0.5">
                Type of packages
              </label>
              <select
                className="w-full text-sm text-gray-700 outline-none bg-transparent appearance-none cursor-pointer"
                value={searchData.packageType}
                onChange={(e) =>
                  setSearchData({ ...searchData, packageType: e.target.value })
                }
              >
                <option value="">Select packages</option>
                <option value="trekking">Trekking</option>
                <option value="camping">Camping</option>
              </select>
            </div>

            {/* Days */}
            <div className="w-40 flex flex-col text-left px-5 border-r border-gray-200">
              <label className="text-[10px] font-bold text-gray-900 uppercase mb-0.5">
                Days
              </label>
              <select
                className="w-full text-sm text-gray-700 outline-none bg-transparent appearance-none cursor-pointer"
                value={searchData.days}
                onChange={(e) =>
                  setSearchData({ ...searchData, days: e.target.value })
                }
              >
                <option value="">Select Days</option>
                <option value="1-3">1-3 Days</option>
                <option value="4-7">4-7 Days</option>
              </select>
            </div>

            {/* Filters */}
            <div className="w-40 flex flex-col text-left px-5">
              <label className="text-[10px] font-bold text-gray-900 uppercase mb-0.5">
                More Filters
              </label>
              <select
                className="w-full text-sm text-gray-700 outline-none bg-transparent appearance-none cursor-pointer"
                value={searchData.filters}
                onChange={(e) =>
                  setSearchData({ ...searchData, filters: e.target.value })
                }
              >
                <option value="">Select</option>
                <option value="budget">Budget</option>
                <option value="luxury">Luxury</option>
              </select>
            </div>
            <Button variant="secondry">
              Search
            </Button>
          </div>
        </div>
      </section>

      <div className="md:hidden relative mt-6 mb-6 px-4">
        <div className="mx-auto max-w-sm bg-white/95 backdrop-blur-lg rounded-2xl p-5 shadow-2xl space-y-4">
          {/* Where */}
          <input
            type="text"
            placeholder="Search destinations"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none"
            value={searchData.destination}
            onChange={(e) =>
              setSearchData({ ...searchData, destination: e.target.value })
            }
          />

          {/* Type + Days */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">
                Type
              </label>
              <select
                className="w-full border border-gray-200 rounded-xl px-3 py-3 text-sm"
                value={searchData.packageType}
                onChange={(e) =>
                  setSearchData({ ...searchData, packageType: e.target.value })
                }
              >
                <option value="">Select</option>
                <option value="trekking">Trekking</option>
                <option value="camping">Camping</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">
                Days
              </label>
              <select
                className="w-full border border-gray-200 rounded-xl px-3 py-3 text-sm"
                value={searchData.days}
                onChange={(e) =>
                  setSearchData({ ...searchData, days: e.target.value })
                }
              >
                <option value="">Select</option>
                <option value="1-3">1–3</option>
                <option value="4-7">4–7</option>
              </select>
            </div>
          </div>

          {/* More Filters */}
          <div>
            <label className="text-xs font-semibold text-gray-600 mb-1 block">
              More Filters
            </label>
            <select
              className="w-full border border-gray-200 rounded-xl px-3 py-3 text-sm"
              value={searchData.filters}
              onChange={(e) =>
                setSearchData({ ...searchData, filters: e.target.value })
              }
            >
              <option value="">Select</option>
              <option value="budget">Budget</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>
          <Button variant="secondry">
            Search
          </Button>
        </div>
      </div>
    </>
  );
}