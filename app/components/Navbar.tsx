'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu as MenuIcon, X, Sparkles, MapPin, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500 text-white text-xs font-medium py-2 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-4 text-orange-100">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> 4th Cross, Bhagya Nagar, Belgaum
            </span>
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" /> +91 6360538862
            </span>
          </div>
          <div className="mx-auto sm:mx-0 flex items-center gap-1.5 font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-yellow-200 animate-pulse" />
            <span>Organic Cold-Pressed Juices • ₹15 Off with Bottle Return!</span>
          </div>
          <div className="hidden md:block text-orange-100">
            <span>Open Daily: 10:00 AM – 9:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-500 via-amber-400 to-emerald-400 p-0.5 shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                  <span className="text-2xl">🍊</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-orange-600 via-amber-600 to-emerald-700 bg-clip-text text-transparent">
                  Zest & Bloom
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700">
                  Organic Juice Cafe
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      active
                        ? 'text-orange-600 bg-orange-50/80 shadow-xs'
                        : 'text-zinc-700 hover:text-orange-600 hover:bg-orange-50/50'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-orange-500" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Actions: Cart & CTA */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-full text-zinc-700 hover:text-orange-600 hover:bg-orange-50 transition-colors cursor-pointer"
                aria-label="View Cart"
              >
                <ShoppingBag className="w-6 h-6 text-zinc-800" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce shadow-sm">
                    {totalItems}
                  </span>
                )}
              </button>

              <Link
                href="/menu"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-bold shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <span>Order Juices</span>
                <span className="text-xs">⚡</span>
              </Link>

              {/* Mobile menu hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl text-zinc-700 hover:bg-orange-50 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-orange-100 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-fadeIn">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    active
                      ? 'bg-orange-500 text-white font-semibold'
                      : 'text-zinc-700 hover:bg-orange-50 hover:text-orange-600'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/menu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-center shadow-md shadow-orange-500/20"
              >
                <span>Explore Full Menu</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
