import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Shield, Sparkles, Truck } from "lucide-react";
import { products } from "@/data/products";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductCard } from "@/components/ProductCard";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-stone-500">
        <Link href="/" className="hover:text-amber-800">
          Home
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:text-amber-800">
          Products
        </Link>
        <span>/</span>
        <span className="text-stone-800 font-medium truncate max-w-xs">
          {product.name}
        </span>
      </nav>

      {/* Main Product Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Product Image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-50 border border-stone-200">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <span className="inline-block px-2.5 py-1 text-xs uppercase tracking-wider font-semibold bg-amber-100 text-amber-900 rounded">
              {product.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-2">
              {product.name}
            </h1>
          </div>

          <div className="flex items-baseline gap-3 pb-4 border-b border-stone-200">
            <span className="text-3xl font-semibold text-stone-900">
              {product.currency} {product.price.toLocaleString("en-IN")}
            </span>
            <span className="text-xs text-stone-500">Inclusive of all taxes</span>
          </div>

          <div className="text-sm text-stone-600 leading-relaxed whitespace-pre-line">
            {product.description}
          </div>

          <AddToCartButton product={product} />

          {/* Value Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-stone-200">
            <div className="flex items-center gap-2.5">
              <Shield className="w-5 h-5 text-amber-700 shrink-0" />
              <span className="text-xs text-stone-700 font-medium">
                Certified Lab Report
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-amber-700 shrink-0" />
              <span className="text-xs text-stone-700 font-medium">
                Prana Pratishtha Done
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Truck className="w-5 h-5 text-amber-700 shrink-0" />
              <span className="text-xs text-stone-700 font-medium">
                Free Insured Transit
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="space-y-6 pt-10 border-t border-stone-200">
          <h2 className="text-xl font-serif font-bold text-stone-900">
            Related Sacred Offerings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

