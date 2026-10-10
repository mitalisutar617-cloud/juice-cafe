'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  ChevronDown,
  ExternalLink,
} from 'lucide-react';
import { CAFE_INFO } from '../data/juices';
import MapPlaceholder from '../components/MapPlaceholder';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'general',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', topic: 'general', message: '' });
      }, 5000);
    }
  };

  const faqs = [
    {
      q: 'How long do your cold-pressed juices stay fresh?',
      a: 'Because our juices are 100% raw, unheated, and contain zero chemical preservatives, they should always be refrigerated (34°F – 38°F). Unopened bottles stay perfectly fresh for 4 days from pressing. Once opened, enjoy within 24 hours for peak nutrient density.',
    },
    {
      q: 'How does the $1.00 Glass Bottle Return program work?',
      a: 'Simply rinse your empty Zest & Bloom glass bottles and caps, bring them to our cafe counter on your next visit, and our team will credit $1.00 directly off your order for each bottle returned. We thoroughly sanitize and reuse them in our zero-waste bottling loop!',
    },
    {
      q: 'Do you offer office delivery or catering for private events?',
      a: 'Yes! We cater corporate wellness mornings, yoga retreats, and weddings with cold-pressed juice towers, custom flight tastings, and smoothie bowl stations. Fill out the inquiry form on this page or email catering@zestbloomcafe.com.',
    },
    {
      q: 'Are your juices gluten-free, vegan, and nut-allergy safe?',
      a: 'All of our cold-pressed juices and cleanses are 100% naturally vegan and gluten-free. We prepare our almond milk smoothies in a designated sanitized station, with full allergen segregation practiced at all times.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-orange-600" />
          Come Visit Our Sanctuary
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight">
          Find Us & Say Hello
        </h1>
        <p className="text-zinc-600 text-base sm:text-lg">
          Whether you&apos;re dropping by for a morning green juice, picking up a cleanse kit, or planning an event—we&apos;d love to connect.
        </p>
      </div>

      {/* Main Info & Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Address, Hours, Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Cafe Hours Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-orange-100 shadow-md space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-zinc-900">Cafe Hours</h3>
                  <p className="text-xs text-zinc-500">Fresh press starts at dawn</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Open Today
              </span>
            </div>

            <div className="space-y-3 pt-2 divide-y divide-zinc-100 text-sm">
              {CAFE_INFO.hours.map((h, idx) => (
                <div key={idx} className="pt-2.5 first:pt-0 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-zinc-800 block">{h.day}</span>
                    <span className="text-xs text-zinc-500">{h.status}</span>
                  </div>
                  <span className="font-extrabold text-orange-600">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location & Directions Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-orange-100 shadow-md space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-zinc-900">Cafe Location</h3>
                <p className="text-xs text-zinc-500">Sunny Hills District</p>
              </div>
            </div>

            <div className="space-y-1.5 text-sm text-zinc-700 pt-2">
              <p className="font-bold text-zinc-900">{CAFE_INFO.address.street}</p>
              <p>{CAFE_INFO.address.city}, {CAFE_INFO.address.state} {CAFE_INFO.address.zip}</p>
              <p className="text-xs text-zinc-500 pt-1 font-medium">
                📍 {CAFE_INFO.address.landmark}
              </p>
              <p className="text-xs text-zinc-500">
                🚇 5 minutes walk from 19th & Mission BART Station. Free 1-hour street parking right outside.
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-100 flex flex-wrap gap-4 text-xs font-semibold text-zinc-700">
              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="flex items-center gap-1.5 hover:text-orange-600 transition-colors"
              >
                <Phone className="w-4 h-4 text-orange-500" />
                <span>{CAFE_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${CAFE_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-orange-600 transition-colors"
              >
                <Mail className="w-4 h-4 text-orange-500" />
                <span>{CAFE_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact & Catering Inquiry Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-orange-100 shadow-xl flex flex-col justify-between">
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                Direct Line
              </span>
              <h3 className="text-2xl font-black text-zinc-900 mt-2">
                Send a Message or Catering Inquiry
              </h3>
              <p className="text-sm text-zinc-500 mt-1">
                Have a question about a juice cleanse, want custom catering, or have feedback? We respond within 2 hours during cafe hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn my-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-extrabold text-emerald-900">Message Received! 🍊</h4>
                <p className="text-sm text-emerald-700 max-w-sm mx-auto">
                  Thank you for reaching out, {formData.name || 'friend'}! Our master juicers will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    What can we help you with?
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all font-medium text-zinc-800"
                  >
                    <option value="general">General Cafe Question</option>
                    <option value="cleanse">Juice Cleanse Program Consultation</option>
                    <option value="catering">Event & Office Catering Request</option>
                    <option value="bottles">Glass Bottle Return Program</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you have in mind or any questions about ingredients..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-400">
            <span>🛡️ We respect your privacy. No spam ever.</span>
            <span>Avg Response: 30 Mins</span>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-zinc-900">
              Interactive Cafe Map & Surroundings
            </h2>
            <p className="text-sm text-zinc-500">
              Click the orange pin or use zoom controls to explore our location near Green Meadow Park.
            </p>
          </div>
        </div>
        <MapPlaceholder />
      </div>

      {/* Frequently Asked Questions */}
      <div className="max-w-3xl mx-auto space-y-6 pt-4">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked
          </div>
          <h2 className="text-3xl font-extrabold text-zinc-900">Common Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-orange-100/90 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-5 text-left font-bold text-zinc-900 flex items-center justify-between gap-4 cursor-pointer hover:text-orange-600 transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-orange-500' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
