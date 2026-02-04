"use client";

export default function TicketPackageCard({ p, sponsored = false }) {
    return (
        <div className="flex-shrink-0 w-[317px]">

            {/* IMAGE */}
            <div className="package-image-wrapper relative h-[180px] rounded-[1px] overflow-visible">
                <div className="absolute inset-0 rounded-[6px] overflow-hidden">
                    <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {sponsored && (
                    <div className="absolute -top-[-6px] -left-[10px] z-30">
                        <div className="relative">

                            {/* main label */}
                            <div
                                className="
          bg-[#ffb000]
          text-white
          text-[17px]
          font-medium
          px-[22px] py-[4px]
          shadow-[0_4px_10px_rgba(0,0,0,0.25)] rounded-sm
        "
                              
                            >
                                Sponsor
                            </div>

                           
                        </div>
                    </div>
                )}

            </div>

            {/* TICKET CARD */}
            <div className="ticket-shell">
                <div className="ticket-body" style={{ clipPath: "url(#ticket-scallop)" }}>
                    <div className="px-[25px] py-[15px]">

                        <div className="flex justify-between items-start mb-1">
                            <h5 className="font-bold text-[14px] leading-tight mb-1 text-[#0f172a]">
                                {p.title}
                            </h5>
                            <span className="border border-blue-400 text-[11px] px-2 py-[1px] rounded">
                                {p.nights}/{p.days}
                            </span>
                        </div>

                        <p className="text-[#64748b] text-[13px] mb-2">
                            {p.location}
                        </p>

                        <div className="border-t border-dashed border-gray-300 my-3" />

                        <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-[13px] mb-3 ml-2 text-[#64748b]">
                            {p.features.map((f, i) => (
                                <div key={i} className="flex items-start gap-2">
                                    <span className="text-gray-400 text-[10px] mt-[3px]">●</span>
                                    <span>{f}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-[#e0f2fe] px-3 py-1 border border-blue-400 rounded-sm mb-4 flex items-center justify-between gap-3">
                            <p className="text-[#64748b] leading-tight flex-1 w-[60%]">
                                <span className="text-[11px]">
                                {p.note}
                                </span>
                            </p>

                            <div className="text-right flex-shrink-0 w-[40%]">
                                <div className="font-bold text-[15px] text-[#0f172a]">
                                    ₹{p.price} <span className="font-normal text-[10px]">/Person</span>
                                </div>
                                <div className="flex items-center gap-2 justify-end">
                                    <span className="line-through text-[12px] text-[#94a3b8]">
                                        ₹{p.originalPrice}
                                    </span>
                                    <span className="text-[#16a34a] text-[12px] font-semibold">
                                        {p.discount}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button className="bg-[#2fa4ff] hover:bg-[#1c84e3] text-white text-[13px] font-semibold px-6 py-2 rounded-lg transition-colors">
                                Book Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}