'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, clearCart, isCartOpen, setIsCartOpen, subtotal, totalItems } = useCart();
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [orderMethod, setOrderMethod] = useState<'pickup' | 'delivery'>('pickup');

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setCheckoutComplete(true);
    setTimeout(() => {
      clearCart();
      setCheckoutComplete(false);
      setIsCartOpen(false);
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-zinc-100 flex items-center justify-between bg-gradient-to-r from-orange-50 to-amber-50">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-zinc-900">Your Fresh Order</h3>
                <p className="text-xs text-zinc-500 font-medium">{totalItems} cold-pressed bottles</p>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full text-zinc-400 hover:text-zinc-700 hover:bg-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {checkoutComplete ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-lg animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-black text-zinc-900">Order Received! 🍊</h4>
                <p className="text-sm text-zinc-600 max-w-xs leading-relaxed">
                  Your fresh juices are being bottled right now at our cafe counter. We can&apos;t wait to serve you!
                </p>
                <div className="text-xs bg-emerald-50 text-emerald-800 px-4 py-2 rounded-xl font-medium border border-emerald-200">
                  Ready in 10-15 mins • Bottle return credit applied
                </div>
              </div>
            ) : cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                <div className="w-20 h-20 rounded-full bg-orange-50 text-4xl flex items-center justify-center">
                  🥤
                </div>
                <div>
                  <h4 className="text-lg font-bold text-zinc-800">Your bag is empty</h4>
                  <p className="text-sm text-zinc-500 mt-1 max-w-xs">
                    Choose from our organic cold-pressed juices, immunity boosters, or wellness shots!
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-orange-500 text-white font-bold text-sm shadow hover:bg-orange-600 transition-colors"
                >
                  Explore Juice Menu
                </button>
              </div>
            ) : (
              <>
                {/* Method selector */}
                <div className="bg-zinc-100 p-1 rounded-xl flex text-xs font-bold text-zinc-700">
                  <button
                    onClick={() => setOrderMethod('pickup')}
                    className={`flex-1 py-2 rounded-lg transition-all ${
                      orderMethod === 'pickup' ? 'bg-white shadow-xs text-orange-600' : 'hover:text-zinc-900'
                    }`}
                  >
                    🚶 Store Pickup (Free)
                  </button>
                  <button
                    onClick={() => setOrderMethod('delivery')}
                    className={`flex-1 py-2 rounded-lg transition-all ${
                      orderMethod === 'delivery' ? 'bg-white shadow-xs text-orange-600' : 'hover:text-zinc-900'
                    }`}
                  >
                    🚴 Local Express ($2.99)
                  </button>
                </div>

                {/* Items */}
                <div className="divide-y divide-zinc-100">
                  {cart.map((item) => (
                    <div key={item.juice.id} className="py-3 flex gap-3 items-center">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-zinc-100 shrink-0 border border-zinc-200">
                        <Image
                          src={item.juice.image}
                          alt={item.juice.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-sm text-zinc-900 truncate">
                          {item.juice.name}
                        </h5>
                        <p className="text-xs text-zinc-500">{item.juice.size}</p>
                        <p className="text-sm font-extrabold text-orange-600 mt-0.5">
                          ${(item.juice.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1.5 bg-zinc-100 rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.juice.id, item.quantity - 1)}
                          className="w-6 h-6 rounded bg-white flex items-center justify-center text-zinc-700 hover:text-orange-600 shadow-xs"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-zinc-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.juice.id, item.quantity + 1)}
                          className="w-6 h-6 rounded bg-white flex items-center justify-center text-zinc-700 hover:text-orange-600 shadow-xs"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.juice.id)}
                        className="p-1.5 text-zinc-400 hover:text-rose-500 transition-colors ml-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Return your clean bottles at pickup and get <strong>$1.00 credit</strong> per bottle toward your next order!</span>
                </div>
              </>
            )}
          </div>

          {/* Footer Subtotal */}
          {!checkoutComplete && cart.length > 0 && (
            <div className="p-6 border-t border-zinc-100 bg-zinc-50 space-y-3">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-zinc-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-zinc-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-zinc-600">
                  <span>Delivery/Handling</span>
                  <span className="font-semibold text-zinc-900">
                    {orderMethod === 'pickup' ? 'Free (Pickup)' : '$2.99'}
                  </span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-zinc-900 pt-2 border-t border-zinc-200">
                  <span>Total</span>
                  <span className="text-orange-600">
                    ${(subtotal + (orderMethod === 'delivery' ? 2.99 : 0)).toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
