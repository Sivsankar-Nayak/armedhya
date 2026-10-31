import React from "react";
import Link from "next/link";
import { ShieldCheck, Sparkles, Truck, RefreshCw } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-stone-800">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-amber-500 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white">Lab Certified</p>
              <p className="text-xs text-stone-400">100% natural, unheated stones</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-amber-500 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white">Vedic Energization</p>
              <p className="text-xs text-stone-400">Prana Pratishtha by Vedic scholars</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Truck className="w-8 h-8 text-amber-500 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white">Insured Delivery</p>
              <p className="text-xs text-stone-400">Safe, tamper-evident door shipping</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <RefreshCw className="w-8 h-8 text-amber-500 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white">Authenticity Guarantee</p>
              <p className="text-xs text-stone-400">Lifetime verification certificate</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-12">
          <div className="space-y-4 md:col-span-1">
            <h3 className="text-xl font-serif font-bold text-white tracking-wider">
              ARMEDHYA
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Sacred Vedic gemstones, Rudraksha, and aura-balancing healing crystals
              sourced ethically and energized according to classical traditions.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-stone-200 uppercase tracking-wider mb-4">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <Link href="/products?category=Precious+Gemstones" className="hover:text-amber-400 transition-colors">
                  Precious Gemstones
                </Link>
              </li>
              <li>
                <Link href="/products?category=Healing+Bracelets" className="hover:text-amber-400 transition-colors">
                  Healing Bracelets
                </Link>
              </li>
              <li>
                <Link href="/products?category=Crystals+%26+Points" className="hover:text-amber-400 transition-colors">
                  Crystals & Points
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">
                  Full Catalog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-stone-200 uppercase tracking-wider mb-4">
              Vedic Wisdom
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <Link href="/blog" className="hover:text-amber-400 transition-colors">
                  Journal Articles
                </Link>
              </li>
              <li>
                <Link href="/blog/boost-positivity-the-power-of-aura-alchemy" className="hover:text-amber-400 transition-colors">
                  Aura Alchemy
                </Link>
              </li>
              <li>
                <Link href="/blog/harness-your-energy-with-gemstones-and-rudraksh" className="hover:text-amber-400 transition-colors">
                  Gemstones & Rudraksha
                </Link>
              </li>
              <li>
                <Link href="/blog/top-benefits-of-wearing-healing-gem-bracelets" className="hover:text-amber-400 transition-colors">
                  Healing Gem Bracelets
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-stone-200 uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed mb-3">
              Need personalized astrological guidance before purchasing? Reach our consultation desk.
            </p>
            <p className="text-xs font-medium text-amber-400">
              contact@armedhya.in
            </p>
          </div>
        </div>

        <div className="pt-10 mt-10 border-t border-stone-800 text-center text-xs text-stone-500">
          <p>© 2026 Armedhya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

