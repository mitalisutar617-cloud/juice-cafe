import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  Leaf,
  Recycle,
  Heart,
  Droplets,
  Award,
  Users,
  Sun,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { BASE_PATH } from '../data/juices';

export const metadata = {
  title: 'Our Story & Philosophy | Zest & Bloom Juice Co.',
  description:
    'Learn how Zest & Bloom crafts raw cold-pressed juices using hydraulic pressure, local organic orchards, and zero waste glass bottles.',
};

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-24">
      {/* Hero Header */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-orange-50/80 via-amber-50/40 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            Our Roots & Mission
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-zinc-900 tracking-tight">
            Crafting Real Juice from{' '}
            <span className="bg-gradient-to-r from-orange-600 to-emerald-600 bg-clip-text text-transparent">
              Earth to Bottle
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            We believe that genuine wellness shouldn&apos;t come in powdered packets or plastic bottles that sat on supermarket shelves for eight months. Real nourishment is alive, raw, and vibrant.
          </p>
        </div>
      </section>

      {/* Origin Story with Cafe Photo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
            <Image
              src={`${BASE_PATH}/images/cafe-interior.jpg`}
              alt="Inside Zest & Bloom cafe sanctuary"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-bold">Our Bhagya Nagar Cafe Sanctuary</p>
              <p className="text-xs text-zinc-300">Where community gathers over fresh cold-press flights & botanical tonics</p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              The Genesis
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900">
              Started in a Community Garden, Bottled with Integrity
            </h2>
            <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
              In 2021, founders Maya and Liam noticed a frustrating reality: most &ldquo;healthy&rdquo; juices in grocery stores were flash-pasteurized with high heat to extend shelf life, which destroys fragile vitamin C, live enzymes, and fresh flavor notes.
            </p>
            <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
              Starting with a single commercial hydraulic press and fruit bought directly from morning farmer markets in Sonoma and Central Valley, Zest & Bloom was born. Today, we press thousands of bottles weekly without ever adding a drop of water, sugar, or synthetic stabilizing gum.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100">
                <span className="text-2xl font-black text-orange-600 block">15,000 lbs</span>
                <span className="text-xs font-semibold text-zinc-600">Hydraulic extraction force</span>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                <span className="text-2xl font-black text-emerald-600 block">100% Raw</span>
                <span className="text-xs font-semibold text-zinc-600">Never heated or pasteurized</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Core Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
            Our Standard
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 mt-2">
            The Three Non-Negotiables
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-2">
            Every bottle that leaves our cold-room adheres strictly to three foundational promises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-orange-100 shadow-md hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
              <Leaf className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-extrabold text-zinc-900 mb-3">1. Regenerative Organic Only</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              We partner directly with small-scale orchards practicing soil regeneration. No synthetic chemical runoff, pesticide residues, or artificial fertilizers touch any fruit or leafy greens we press.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-orange-100 shadow-md hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
              <Droplets className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-extrabold text-zinc-900 mb-3">2. Hydraulic Cold-Pressing</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Unlike fast spinning centrifugal blades that introduce friction heat and oxygen degradation, our hydraulic press applies slow, immense pressure. This locks in 100% of vitamins, live phytonutrients, and pristine chlorophyll.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-orange-100 shadow-md hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-6">
              <Recycle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-extrabold text-zinc-900 mb-3">3. Closed Loop Glass Program</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              We eliminated single-use plastic bottles from day one. Customers bring back rinsed glass bottles and receive a <strong>₹15 credit</strong> toward their next juice. We sanitize and reuse thousands of bottles monthly.
            </p>
          </div>
        </div>
      </section>

      {/* Pulp Upcycling & Farm Impact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 rounded-3xl text-white p-8 sm:p-14 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-white/10 px-3 py-1 rounded-full">
                Zero Food Waste Pledge
              </span>
              <h3 className="text-3xl sm:text-4xl font-black">
                Where Does the Fruit Pulp Go?
              </h3>
              <p className="text-emerald-100 text-sm sm:text-base leading-relaxed max-w-2xl">
                Juicing leaves behind nutrient-dense fruit fiber and vegetable pulp. Rather than landfilling it, 100% of our organic pulp is donated to local Bay Area organic composters and artisanal sourdough bakeries for fruit-fiber artisan crackers!
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <ShieldCheck className="w-5 h-5 text-emerald-300" />
                  <span>14+ Tons Upcycled Annually</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <ShieldCheck className="w-5 h-5 text-emerald-300" />
                  <span>Zero Organic Waste to Landfills</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-40 h-40 rounded-full bg-white/10 backdrop-blur-md flex flex-col items-center justify-center text-center p-4 border border-white/20">
                <Sun className="w-10 h-10 text-yellow-300 mb-1" />
                <span className="text-2xl font-black">100%</span>
                <span className="text-xs text-emerald-200">Zero Waste Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA: Visit or Order */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h3 className="text-3xl font-extrabold text-zinc-900">
          Ready to Taste the Purest Juice You&apos;ve Ever Had?
        </h3>
        <p className="text-zinc-600 max-w-xl mx-auto text-sm sm:text-base">
          Order for free same-day counter pickup, schedule a 3-day cleanse delivery, or drop in to say hi at our cafe.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/menu"
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Juice Menu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-white border border-zinc-200 hover:border-orange-300 text-zinc-800 font-bold text-sm shadow-sm transition-all"
          >
            <span>Find Our Cafe Location</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
