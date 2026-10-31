"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function Header() {
  const { openCart, totalCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-amber-950 text-amber-100 text-xs py-2 px-4 text-center tracking-wide font-light flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>Vedic Energized & 100% Certified Authentic Natural Gemstones</span>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-serif tracking-widest text-gray-900 group-hover:text-amber-800 transition-colors uppercase font-bold">
                Armedhya
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
              <Link href="/products" className="hover:text-amber-800 transition-colors">
                All Products
              </Link>
              <Link href="/products?category=Precious+Gemstones" className="hover:text-amber-800 transition-colors">
                Gemstones
              </Link>
              <Link href="/products?category=Healing+Bracelets" className="hover:text-amber-800 transition-colors">
                Bracelets
              </Link>
              <Link href="/products?category=Crystals+%26+Points" className="hover:text-amber-800 transition-colors">
                Crystals
              </Link>
              <Link href="/blog" className="hover:text-amber-800 transition-colors">
                Blog
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={openCart}
              className="relative p-2.5 rounded-full text-gray-700 hover:text-amber-800 hover:bg-amber-50 transition-colors flex items-center"
              aria-label="View shopping bag"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
              {totalCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-amber-800 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-amber-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3 text-sm font-medium text-gray-700">
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-amber-800"
            >
              All Products
            </Link>
            <Link
              href="/products?category=Precious+Gemstones"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-amber-800"
            >
              Gemstones
            </Link>
            <Link
              href="/products?category=Healing+Bracelets"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-amber-800"
            >
              Bracelets
            </Link>
            <Link
              href="/products?category=Crystals+%26+Points"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-amber-800"
            >
              Crystals & Points
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-amber-800"
            >
              Blog
            </Link>
          </div>
        )}
      </header>
    </>
  );
}

