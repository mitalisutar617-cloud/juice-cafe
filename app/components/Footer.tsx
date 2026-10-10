'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, MapPin, Clock, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { CAFE_INFO } from '../data/juices';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-zinc-950 text-zinc-300 pt-16 pb-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-600 via-amber-600 to-emerald-600 p-8 sm:p-12 mb-16 shadow-2xl text-white">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" /> Juicy Perks Club
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              Get 15% Off Your First Cold Press
            </h3>
            <p className="text-orange-100 text-sm sm:text-base mb-6">
              Subscribe to get secret seasonal menu releases, wellness tips, and weekend juice tasting invites delivered straight to your inbox.
            </p>

            {subscribed ? (
              <div className="inline-flex items-center gap-2 px-4 py-3 bg-white/25 rounded-xl font-semibold backdrop-blur-md">
                <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                <span>You&apos;re subscribed! Check your inbox for your 15% coupon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="px-4 py-3 rounded-xl bg-white text-zinc-900 placeholder-zinc-500 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white flex-1"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-zinc-950 text-white font-bold text-sm hover:bg-zinc-900 transition-colors cursor-pointer shadow-lg whitespace-nowrap"
                >
                  Join the Club
                </button>
              </form>
            )}
          </div>

          {/* Decorative fruits background pattern */}
          <div className="absolute right-4 -bottom-6 text-9xl opacity-15 select-none pointer-events-none hidden sm:block">
            🍊🍍🍋
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-xl shadow-md">
                🍊
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Zest & Bloom Juice Co.
              </span>
            </Link>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Handcrafted cold-pressed raw juices, botanical elixirs, and fresh smoothie bowls. Sourced daily from local organic farmers, never heated, never pasteurized.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/80 text-emerald-400 text-xs font-semibold">
                🌱 100% Organic & Non-GMO
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-950/60 border border-orange-800/80 text-orange-400 text-xs font-semibold">
                ♻️ Glass Bottle Cycle
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-orange-400 transition-colors">Juice & Bowl Menu</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-400 transition-colors">Our Story & Farm</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400 transition-colors">Contact & Hours</Link>
              </li>
              <li>
                <Link href="/menu?cat=cleanses" className="hover:text-orange-400 transition-colors">Cleanse Programs</Link>
              </li>
            </ul>
          </div>

          {/* Hours Snapshot */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-400" /> Cafe Hours
            </h4>
            <div className="space-y-2 text-sm text-zinc-400">
              <div>
                <p className="text-zinc-200 font-medium">Monday – Sunday</p>
                <p className="text-xs text-orange-400 font-bold">10:00 AM – 9:00 PM</p>
              </div>
              <div>
                <p className="text-zinc-200 font-medium">Fresh Cold-Press</p>
                <p className="text-xs">Pressed Daily & All Weekend</p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-400" /> Visit Us
            </h4>
            <div className="space-y-2 text-sm text-zinc-400">
              <p>{CAFE_INFO.address.street}</p>
              <p>{CAFE_INFO.address.city}, {CAFE_INFO.address.state} {CAFE_INFO.address.zip}</p>
              <p className="pt-1 flex items-center gap-2 text-zinc-300">
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <a href={`tel:${CAFE_INFO.phone}`} className="hover:text-orange-400">{CAFE_INFO.phone}</a>
              </p>
              <p className="flex items-center gap-2 text-zinc-300">
                <Mail className="w-3.5 h-3.5 text-orange-400" />
                <a href={`mailto:${CAFE_INFO.email}`} className="hover:text-orange-400">{CAFE_INFO.email}</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Zest & Bloom Juice Co. All rights reserved. Made with love & pure fruit.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-zinc-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-zinc-400 cursor-pointer">Nutritional Guide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
