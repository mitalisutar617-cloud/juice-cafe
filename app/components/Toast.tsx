'use client';

import React from 'react';
import { useCart } from '../context/CartContext';
import { Check } from 'lucide-react';

export default function Toast() {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce duration-300">
      <div className="bg-zinc-900/95 text-white px-5 py-3.5 rounded-2xl shadow-2xl backdrop-blur-md border border-zinc-700/60 flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
          <Check className="w-3.5 h-3.5 stroke-3" />
        </div>
        <p className="text-sm font-semibold">{toastMessage}</p>
      </div>
    </div>
  );
}
