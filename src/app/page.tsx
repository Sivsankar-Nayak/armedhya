import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Shield, HeartHandshake } from "lucide-react";
import { products } from "@/data/products";
import { articles } from "@/data/articles";
import { ProductCard } from "@/components/ProductCard";

export default function HomePage() {
  const featuredProducts = products.slice(0, 6);
  const featuredArticles = articles.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-stone-900 via-stone-850 to-stone-900 text-white overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs uppercase tracking-widest font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            Vedic Energized Gemstones & Bracelets
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
            Harmonize Your Aura With Sacred Earth Stones
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-stone-300 font-light leading-relaxed">
            Discover unheated Vedic gemstones, authentic Rudraksha beads, and 
            protective crystal bracelets consecrated through traditional Vedic rites.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-700 hover:bg-amber-800 text-white rounded-md text-sm font-semibold tracking-wide shadow-lg hover:shadow-amber-900/40 transition-all duration-200"
            >
              Explore Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 rounded-md text-sm font-semibold tracking-wide transition-all duration-200"
            >
              Read Journal
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 rounded-2xl bg-amber-50/50 border border-amber-100">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-amber-100 text-amber-800 shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-stone-900">
                100% Certified Natural
              </h3>
              <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                Every sapphire, emerald, and crystal is independently verified, unheated, and untreated.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-amber-100 text-amber-800 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-stone-900">
                Prana Pratishtha Consecration
              </h3>
              <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                Purified and attuned according to traditional Vedic astrology to maximize energy resonance.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-amber-100 text-amber-800 shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-stone-900">
                Ethical Sourcing
              </h3>
              <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                Hand-selected mineral specimens sourced responsibly with transparent origin records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
              Curated Selection
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
              Featured Sacred Stones
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-800 hover:text-amber-900 transition-colors"
          >
            View all {products.length} items
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-stone-900 text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
              Vedic Astrology
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold">
              Unlocking the Planetary Energies
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              In classical Indian astronomy and Vedic traditions, gemstones act as natural prisms that transmit celestial frequencies into human subtle energy bodies. Choosing the aligned gemstone transforms life challenges into spiritual clarity and success.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/blog/boost-positivity-the-power-of-aura-alchemy"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Explore Aura Alchemy
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Journal Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-end justify-between border-b border-stone-200 pb-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
              Vedic Wisdom
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
              From The Journal
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-800 hover:text-amber-900 transition-colors"
          >
            All articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className="group flex flex-col bg-white rounded-lg border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-video bg-stone-100 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden bg-stone-200 shrink-0">
                      <Image
                        src={article.authorAvatar || "/images/authors/aditya-hore.jpg"}
                        alt={article.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-[11px] text-stone-600 font-medium">
                      {article.author} · {article.readTime || "4 min read"}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-stone-900 group-hover:text-amber-800 transition-colors">
                    {article.title}
                  </h3>
                </div>
                <div className="inline-flex items-center gap-1 text-xs font-medium text-amber-800 pt-2">
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
