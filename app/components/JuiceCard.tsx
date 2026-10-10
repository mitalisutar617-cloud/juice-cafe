'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Check, Flame, Droplets, Sparkles } from 'lucide-react';
import { JuiceItem } from '../data/juices';
import { useCart } from '../context/CartContext';

interface JuiceCardProps {
  juice: JuiceItem;
}

export default function JuiceCard({ juice }: JuiceCardProps) {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addToCart(juice, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-orange-100/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
      {/* Top Media Area */}
      <div>
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gradient-to-b from-amber-50 to-orange-50">
          <Image
            src={juice.image}
            alt={juice.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

          {/* Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            {juice.badge && (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-orange-700 shadow-md backdrop-blur-md flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500" />
                {juice.badge}
              </span>
            )}
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-zinc-900/80 text-white backdrop-blur-md ml-auto">
              {juice.size}
            </span>
          </div>

          {/* Calorie pill bottom left */}
          <div className="absolute bottom-3 left-4 flex items-center gap-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-black/60 text-white backdrop-blur-md flex items-center gap-1">
              <Flame className="w-3 h-3 text-orange-400" />
              {juice.calories} kcal
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-950/70 text-emerald-200 backdrop-blur-md flex items-center gap-1">
              <Droplets className="w-3 h-3 text-emerald-400" />
              Cold-Pressed
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          <div className="flex items-baseline justify-between gap-2 mb-2">
            <h3 className="text-xl font-extrabold text-zinc-900 group-hover:text-orange-600 transition-colors">
              {juice.name}
            </h3>
            <span className="text-2xl font-black text-orange-600 tracking-tight">
              ₹{juice.price}
            </span>
          </div>

          <p className="text-sm text-zinc-600 mb-4 line-clamp-2 leading-relaxed">
            {juice.tagline}
          </p>

          {/* Ingredients list */}
          <div className="mb-4">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">
              Fresh Ingredients:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {juice.ingredients.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-amber-50 text-amber-900 border border-amber-200/60"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div className="pt-2 border-t border-zinc-100 flex flex-wrap gap-2 text-[11px] font-semibold text-emerald-700">
            {juice.benefits.map((b, idx) => (
              <span key={idx} className="flex items-center gap-1">
                <span className="text-emerald-500">✓</span> {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-6 pb-6 pt-2">
        <button
          onClick={handleAdd}
          className={`w-full py-3 px-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-md cursor-pointer ${
            justAdded
              ? 'bg-emerald-600 text-white shadow-emerald-500/25 scale-[0.98]'
              : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-orange-500/20 hover:shadow-orange-500/30 active:scale-95'
          }`}
        >
          {justAdded ? (
            <>
              <Check className="w-4 h-4 stroke-3" />
              <span>Added to Order!</span>
            </>
          ) : (
            <>
              <Plus className="w-4 h-4 stroke-3" />
              <span>Add to Order • ₹{juice.price}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
