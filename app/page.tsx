import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Leaf,
  Recycle,
  HeartHandshake,
  Star,
  CheckCircle,
  Clock,
  Flame,
} from 'lucide-react';
import { JUICES, BASE_PATH } from './data/juices';
import JuiceCard from './components/JuiceCard';

export default function Home() {
  const featuredJuices = JUICES.filter((j) => j.popular).slice(0, 4);

  return (
    <div className="space-y-20 pb-20">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
        {/* Soft background glow gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-orange-200/40 via-amber-200/30 to-emerald-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-800 text-xs sm:text-sm font-bold shadow-xs">
                <Sparkles className="w-4 h-4 text-orange-600 animate-pulse" />
                <span>Pressed Daily at 5:00 AM • 100% Raw & Organic</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-zinc-900 leading-[1.08]">
                Cold-Pressed Daily.{' '}
                <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-emerald-600 bg-clip-text text-transparent">
                  100% Pure Sunshine.
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Handcrafted cold-pressed raw juices, vibrant smoothie elixirs, and wellness tonics pressed from local organic orchards. Zero refined sugars, never heat-pasteurized, maximum live enzymes.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/menu"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white font-extrabold text-base shadow-xl shadow-orange-500/30 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Menu</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white border border-zinc-200 text-zinc-800 hover:text-orange-600 hover:border-orange-200 font-bold text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Visit Our Cafe</span>
                  <span className="text-sm">📍</span>
                </Link>
              </div>

              {/* Social Proof & Metrics */}
              <div className="pt-6 border-t border-zinc-200/70 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-10 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-zinc-900">4.9/5</span>
                  <span className="text-zinc-500">(1,200+ Reviews)</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-600 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>USDA Certified Organic</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-600 font-medium">
                  <Recycle className="w-4 h-4 text-orange-600" />
                  <span>Return Glass Bottle Credit</span>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] bg-gradient-to-b from-orange-100 to-amber-100">
                  <Image
                    src={`${BASE_PATH}/images/hero-juice.jpg`}
                    alt="Fresh cold pressed juice with tropical fruits"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500 text-white shadow-md inline-block mb-2">
                      Today&apos;s Sunrise Press
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black">
                      Tropical Harvest Splash
                    </h3>
                    <p className="text-xs text-orange-100">Alphonso Mango • Passion Fruit • Blood Orange</p>
                  </div>
                </div>

                {/* Floating Badge 1 - Top Left */}
                <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-orange-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
                    🌱
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-900">3.5 lbs Organic Produce</p>
                    <p className="text-[11px] text-zinc-500 font-medium">Packed in every single 16oz bottle</p>
                  </div>
                </div>

                {/* Floating Badge 2 - Bottom Right */}
                <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-orange-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-lg">
                    ⚡
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-900">Hydraulic Cold-Pressed</p>
                    <p className="text-[11px] text-zinc-500 font-medium">0% heat • 100% live enzymes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / VALUE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
            The Zest & Bloom Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 mt-3">
            Why Our Juices Taste Like Real Sunshine
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-2">
            Most grocery store juices are boiled or chemically treated to sit on shelves for months. We do things the honest, old-fashioned farm way.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Flame className="w-6 h-6 text-orange-500" />,
              title: 'Never Heat-Treated',
              desc: 'We use 15,000 lbs of hydraulic pressure to gently press juice without destroying delicate live vitamins.',
            },
            {
              icon: <Leaf className="w-6 h-6 text-emerald-500" />,
              title: '100% Certified Organic',
              desc: 'Zero synthetic fertilizers, zero GMOs, zero toxic pesticides. Only pure, certified local orchard harvests.',
            },
            {
              icon: <Recycle className="w-6 h-6 text-teal-500" />,
              title: 'Glass Bottle Program',
              desc: 'We bottle exclusively in recyclable glass. Bring your bottle back for ₹15 off your next refill at our counter.',
            },
            {
              icon: <HeartHandshake className="w-6 h-6 text-rose-500" />,
              title: 'Community Orchards',
              desc: 'Direct partnerships with Northern California family farmers who harvest fruit at peak ripeness.',
            },
          ].map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl border border-orange-100/70 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-extrabold text-zinc-900 mb-2">{pillar.title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED JUICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              Farm-to-Bottle Favorites
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 mt-2">
              Featured Juices & Elixirs
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-1">
              Our most popular cold-pressed recipes, pressed fresh every morning.
            </p>
          </div>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors group"
          >
            <span>See Full Menu (8+ Juices & Packs)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Juices Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredJuices.map((juice) => (
            <JuiceCard key={juice.id} juice={juice} />
          ))}
        </div>
      </section>

      {/* SEASONAL CLEANSE SPOTLIGHT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-zinc-900 text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
                🌿 Doctor & Nutritionist Approved
              </span>
              <h3 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Reboot Your Digestive Fire with the 3-Day Cleanse
              </h3>
              <p className="text-zinc-300 text-base max-w-xl leading-relaxed">
                Includes 18 raw cold-pressed juices, 6 immunity fire shots, plus our complete digital cleanse guide and glass tumbler. Free local drop-off in insulated cooler bags!
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/menu?cat=cleanses"
                  className="px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-sm transition-all shadow-lg shadow-emerald-500/20"
                >
                  Order Cleanse Box • ₹1,499
                </Link>
                <div className="text-xs text-emerald-200 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Use promo code <strong>CLEANSE15</strong> for 15% off</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl">
                <Image
                  src={`${BASE_PATH}/images/green-revive.jpg`}
                  alt="Cold pressed juice cleanse box bottles"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAFE VIBE & VISIT CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50/70 border border-amber-200/60 rounded-3xl p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-[4/3]">
              <Image
                src={`${BASE_PATH}/images/cafe-interior.jpg`}
                alt="Zest and Bloom Cafe sunlit interior with guests and plants"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                Come Say Hello
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900">
                A Sun-Drenched Sanctuary for Body & Mind
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Step inside our Bhagya Nagar cafe to sip fresh cold-press flights, enjoy handcrafted smoothie bowls, or catch up on work with high-speed WiFi under lush indoor greenery.
              </p>
              <div className="space-y-2.5 text-sm text-zinc-700">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-orange-600" />
                  <span><strong>Daily Hours:</strong> 10:00 AM – 9:00 PM (Open 7 Days a Week)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-600 font-bold">📍</span>
                  <span>4th Cross, Bhagya Nagar, Belgaum, 590010</span>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 text-white font-bold text-sm hover:bg-zinc-800 transition-colors shadow-md"
                >
                  <span>Cafe Hours & Directions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
            Real Reviews
          </span>
          <h2 className="text-3xl font-extrabold text-zinc-900 mt-2">Loved by Juice Lovers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: 'The Turmeric Citrus Sunrise gives me more sustained clean energy than three cups of espresso ever did. You can taste the real ginger kick!',
              name: 'Dr. Maya Lin',
              role: 'Holistic Practitioner',
              rating: 5,
            },
            {
              quote: 'I did the 3-Day Cleanse last week and my skin cleared up completely. Plus, loving the ₹15 bottle return discount!',
              name: 'Julian Vance',
              role: 'Marathon Runner',
              rating: 5,
            },
            {
              quote: 'The cafe is stunning. Lush plants, wonderful aroma of freshly cut oranges and mint. It is my favorite morning sanctuary in SF.',
              name: 'Elena Rostova',
              role: 'Designer & Local Regular',
              rating: 5,
            },
          ].map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl border border-orange-100 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-amber-400 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-zinc-700 text-sm leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-sm text-zinc-900">{t.name}</h4>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  Verified Sip
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
