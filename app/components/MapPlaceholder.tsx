'use client';

import React, { useState } from 'react';
import { MapPin, Navigation, ZoomIn, ZoomOut, Compass, ExternalLink } from 'lucide-react';
import { CAFE_INFO } from '../data/juices';

export default function MapPlaceholder() {
  const [zoom, setZoom] = useState(15);
  const [showInfo, setShowInfo] = useState(true);

  return (
    <div className="relative w-full h-[420px] rounded-3xl overflow-hidden border border-orange-200/80 shadow-xl bg-[#E8EDE4]">
      {/* Map Graphic Canvas / Background */}
      <div
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{ transform: `scale(${zoom / 15})` }}
      >
        {/* Simulated Map Grid & Park Areas */}
        <svg
          className="w-full h-full opacity-90"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 500"
          preserveAspectRatio="none"
        >
          {/* Background land */}
          <rect width="800" height="500" fill="#f4efe6" />

          {/* Park area */}
          <path
            d="M 50 40 C 150 20, 260 50, 310 120 C 350 180, 280 260, 200 240 C 120 220, 40 160, 50 40 Z"
            fill="#d1e7dd"
            stroke="#b8d8cb"
            strokeWidth="2"
          />
          <text x="140" y="130" fill="#387a5a" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
            🌳 Bhagya Nagar Park
          </text>

          {/* Water creek */}
          <path
            d="M 600 -10 Q 640 150, 720 280 T 780 520"
            fill="none"
            stroke="#bae6fd"
            strokeWidth="32"
          />
          <text x="680" y="240" fill="#0284c7" fontSize="11" fontWeight="bold" transform="rotate(50, 680, 240)">
            Spring Creek
          </text>

          {/* Major Avenues */}
          {/* Avenue 1 */}
          <line x1="0" y1="200" x2="800" y2="200" stroke="#ffffff" strokeWidth="22" />
          <line x1="0" y1="200" x2="800" y2="200" stroke="#fcd34d" strokeWidth="2" strokeDasharray="8 8" />
          <text x="50" y="194" fill="#9ca3af" fontSize="10" fontWeight="bold">
            BHAGYA NAGAR MAIN RD
          </text>

          {/* Avenue 2 */}
          <line x1="0" y1="360" x2="800" y2="360" stroke="#ffffff" strokeWidth="18" />
          <text x="50" y="355" fill="#9ca3af" fontSize="10" fontWeight="bold">
            KHANAPUR ROAD
          </text>

          {/* Cross Street 1 */}
          <line x1="280" y1="0" x2="280" y2="500" stroke="#ffffff" strokeWidth="20" />
          <line x1="280" y1="0" x2="280" y2="500" stroke="#fcd34d" strokeWidth="2" strokeDasharray="8 8" />
          <text x="290" y="70" fill="#9ca3af" fontSize="10" fontWeight="bold">
            4TH CROSS
          </text>

          {/* Cross Street 2 */}
          <line x1="520" y1="0" x2="520" y2="500" stroke="#ffffff" strokeWidth="16" />
          <text x="530" y="70" fill="#9ca3af" fontSize="10" fontWeight="bold">
            CONGRESS ROAD
          </text>

          {/* Neighborhood blocks */}
          <rect x="310" y="220" width="180" height="120" rx="6" fill="#f8f4ec" stroke="#e5dfd4" strokeWidth="1" />
          <rect x="80" y="260" width="170" height="80" rx="6" fill="#f8f4ec" stroke="#e5dfd4" strokeWidth="1" />
          <rect x="550" y="100" width="160" height="80" rx="6" fill="#f8f4ec" stroke="#e5dfd4" strokeWidth="1" />
          <rect x="550" y="220" width="160" height="120" rx="6" fill="#f8f4ec" stroke="#e5dfd4" strokeWidth="1" />

          {/* Subtle Trees */}
          <circle cx="100" cy="80" r="14" fill="#a7f3d0" />
          <circle cx="220" cy="160" r="18" fill="#a7f3d0" />
          <circle cx="160" cy="180" r="12" fill="#a7f3d0" />
          <circle cx="260" cy="90" r="15" fill="#a7f3d0" />
        </svg>

        {/* Cafe Location Marker */}
        <div className="absolute top-[40%] left-[35%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          {/* Pulsing ring */}
          <div className="absolute w-12 h-12 rounded-full bg-orange-500/30 animate-ping -z-10" />

          {/* Pin marker */}
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 text-white shadow-xl flex items-center justify-center transform hover:scale-110 active:scale-95 transition-all border-2 border-white cursor-pointer"
            aria-label="Cafe Location"
          >
            <span className="text-2xl">🍊</span>
          </button>

          {/* Popup card */}
          {showInfo && (
            <div className="mt-2 w-64 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-2xl border border-orange-200 text-left animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  ● Open 10am - 9pm
                </span>
                <span className="text-xs font-semibold text-orange-600">★ 4.9 (1.2k)</span>
              </div>
              <h5 className="font-extrabold text-sm text-zinc-900 mt-1">
                {CAFE_INFO.name}
              </h5>
              <p className="text-xs text-zinc-600 mt-0.5">
                {CAFE_INFO.address.street}, {CAFE_INFO.address.city}
              </p>
              <p className="text-[11px] text-zinc-400 mt-1">
                {CAFE_INFO.address.landmark}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Map UI Overlays & Controls */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-zinc-200/60 flex items-center gap-2 text-xs font-semibold text-zinc-800">
        <Compass className="w-4 h-4 text-orange-500 animate-spin-slow" />
        <span>Live Interactive Cafe Map</span>
      </div>

      {/* Zoom controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-1.5 bg-white/90 backdrop-blur-md p-1 rounded-xl shadow-md border border-zinc-200/60">
        <button
          onClick={() => setZoom((z) => Math.min(z + 1, 18))}
          className="p-2 hover:bg-orange-50 rounded-lg text-zinc-700 hover:text-orange-600 transition-colors cursor-pointer"
          aria-label="Zoom in"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => setZoom((z) => Math.max(z - 1, 12))}
          className="p-2 hover:bg-orange-50 rounded-lg text-zinc-700 hover:text-orange-600 transition-colors cursor-pointer"
          aria-label="Zoom out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom Direction CTA */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white/95 backdrop-blur-md p-3 sm:px-5 rounded-2xl shadow-lg border border-orange-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
            <MapPin className="w-4 h-4" />
          </div>
          <span className="text-xs sm:text-sm font-bold text-zinc-800">
            {CAFE_INFO.address.street}, {CAFE_INFO.address.city}
          </span>
        </div>

        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(
            `${CAFE_INFO.name} ${CAFE_INFO.address.street} ${CAFE_INFO.address.city}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md transition-all"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Get Directions</span>
          <ExternalLink className="w-3 h-3 opacity-80" />
        </a>
      </div>
    </div>
  );
}
