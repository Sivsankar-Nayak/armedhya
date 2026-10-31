"use client";

import React from "react";
import Image from "next/image";
import { X, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    totalCount,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-700" />
              <h2 className="text-lg font-semibold text-gray-900">
                Your Cart ({totalCount})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <ShoppingBag className="w-12 h-12 text-gray-300 mb-3 stroke-[1.5]" />
                <p className="text-gray-600 font-medium">Your cart is empty</p>
                <p className="text-gray-400 text-sm mt-1">
                  Discover authentic gemstones and sacred bracelets.
                </p>
                <button
                  onClick={closeCart}
                  className="mt-6 px-5 py-2.5 bg-amber-800 text-white rounded-md text-sm font-medium hover:bg-amber-900 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3 rounded-lg border border-gray-100 bg-gray-50/50"
                >
                  <div className="relative w-20 h-20 rounded-md overflow-hidden bg-white shrink-0 border border-gray-200">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 truncate">
                        {product.name}
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {product.currency} {product.price.toLocaleString("en-IN")}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-gray-300 rounded bg-white">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="p-1 hover:text-amber-800"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold text-gray-800">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="p-1 hover:text-amber-800"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-gray-400 hover:text-red-600 p-1 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-gray-100 p-6 bg-white space-y-4">
              <div className="flex items-center justify-between text-base font-semibold text-gray-900">
                <span>Subtotal</span>
                <span>INR {subtotal.toLocaleString("en-IN")}</span>
              </div>
              <p className="text-xs text-gray-500">
                Taxes and shipping calculated at checkout. Free shipping across India.
              </p>
              <button
                onClick={() => alert("Proceeding to checkout with " + totalCount + " items.")}
                className="w-full py-3 bg-amber-800 text-white rounded-lg text-sm font-medium hover:bg-amber-900 transition-colors shadow-sm"
              >
                Checkout Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

