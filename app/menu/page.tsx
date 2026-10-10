'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, Sparkles, Filter, SlidersHorizontal, Check, RefreshCw } from 'lucide-react';
import { JUICES, JuiceItem } from '../data/juices';
import JuiceCard from '../components/JuiceCard';

function MenuContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'all';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [benefitFilter, setBenefitFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Items', icon: '🍹' },
    { id: 'cold-pressed', label: 'Cold-Pressed Juices', icon: '🌿' },
    { id: 'smoothies', label: 'Superfood Smoothies', icon: '🍓' },
    { id: 'wellness-shots', label: 'Wellness Shots', icon: '🔥' },
    { id: 'cleanses', label: 'Cleanse Packs', icon: '📦' },
  ];

  const benefits = [
    { id: 'all', label: 'All Benefits' },
    { id: 'detox', label: 'Detox & Cleansing' },
    { id: 'immunity', label: 'Immunity' },
    { id: 'energy', label: 'Energy & Stamina' },
    { id: 'skin', label: 'Skin Glow' },
  ];

  const filteredJuices = useMemo(() => {
    return JUICES.filter((item: JuiceItem) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Search query filter (matches name, tagline, or ingredients)
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesTagline = item.tagline.toLowerCase().includes(query);
        const matchesIngredients = item.ingredients.some((ing) =>
          ing.toLowerCase().includes(query)
        );
        if (!matchesName && !matchesTagline && !matchesIngredients) {
          return false;
        }
      }

      // Benefit filter
      if (benefitFilter !== 'all') {
        const hasBenefit = item.benefits.some((b) =>
          b.toLowerCase().includes(benefitFilter.toLowerCase())
        );
        if (!hasBenefit) return false;
      }

      return true;
    });
  }, [selectedCategory, searchQuery, benefitFilter]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setBenefitFilter('all');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-orange-600" />
          100% Raw • Hydraulic Cold-Pressed
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight">
          Artisan Juice & Bowl Menu
        </h1>
        <p className="text-zinc-600 text-base sm:text-lg">
          Each 16oz bottle contains up to 3.5 pounds of organic fruit and greens. No added sugar, no heat, no pasteurization—ever.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-orange-100 shadow-lg space-y-6">
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by juice name or ingredient (e.g. ginger, kale, apple, mango)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-sm font-medium text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-400 hover:text-zinc-700 bg-zinc-200 hover:bg-zinc-300 rounded-full w-5 h-5 flex items-center justify-center"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Pill Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25 scale-[1.02]'
                    : 'bg-zinc-100 hover:bg-orange-50 text-zinc-700 hover:text-orange-600'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Benefit filter tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 border-t border-zinc-100 text-xs">
          <span className="text-zinc-500 font-semibold flex items-center gap-1 mr-1">
            <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-400" /> Filter by Target:
          </span>
          {benefits.map((b) => {
            const isSelected = benefitFilter === b.id;
            return (
              <button
                key={b.id}
                onClick={() => setBenefitFilter(b.id)}
                className={`px-3 py-1.5 rounded-xl font-semibold transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-600 text-white'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-emerald-50 hover:text-emerald-700'
                }`}
              >
                {b.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count & Reset */}
      <div className="flex items-center justify-between text-sm text-zinc-600 px-2">
        <p className="font-medium">
          Showing <span className="font-bold text-zinc-900">{filteredJuices.length}</span> delicious beverages
          {selectedCategory !== 'all' && (
            <span> in &ldquo;{categories.find((c) => c.id === selectedCategory)?.label}&rdquo;</span>
          )}
        </p>

        {(selectedCategory !== 'all' || searchQuery !== '' || benefitFilter !== 'all') && (
          <button
            onClick={resetFilters}
            className="flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 underline cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Clear all filters
          </button>
        )}
      </div>

      {/* Juices Grid */}
      {filteredJuices.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredJuices.map((juice) => (
            <JuiceCard key={juice.id} juice={juice} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-zinc-200/80 shadow-sm space-y-4 max-w-md mx-auto">
          <div className="text-5xl">🍋</div>
          <h3 className="text-xl font-bold text-zinc-800">No matching juices found</h3>
          <p className="text-sm text-zinc-500">
            We couldn&apos;t find any beverages matching your current search &ldquo;{searchQuery}&rdquo;. Try another ingredient or category!
          </p>
          <button
            onClick={resetFilters}
            className="px-6 py-2.5 rounded-full bg-orange-500 text-white text-sm font-bold shadow hover:bg-orange-600 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Nutritional Guarantee Notice */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-orange-200/80 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-bold text-3xl shadow-lg shrink-0">
          🌱
        </div>
        <div className="space-y-1 text-center md:text-left">
          <h4 className="text-lg font-extrabold text-zinc-900">
            Our Quality & Freshness Guarantee
          </h4>
          <p className="text-sm text-zinc-600 leading-relaxed">
            All juices are extracted using industrial hydraulic cold presses that generate no friction heat, protecting sensitive enzymes and antioxidants. Unopened bottles stay fresh for 4 days refrigerated. All our glass bottles are 100% BPA-free and infinitely recyclable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MenuPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-zinc-500">Loading Juice Menu...</div>}>
      <MenuContent />
    </Suspense>
  );
}
