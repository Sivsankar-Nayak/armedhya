"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group flex flex-col bg-white rounded-lg border border-gray-100 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300">
      <Link
        href={`/products/${product.slug}`}
        className="relative aspect-square overflow-hidden bg-stone-50"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-2 left-2">
          <span className="inline-block px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold bg-white/90 backdrop-blur-xs text-stone-700 rounded">
            {product.category}
          </span>
        </div>
      </Link>

      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <Link href={`/products/${product.slug}`}>
            <h3 className="text-sm font-medium text-gray-900 group-hover:text-amber-800 transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>
          <p className="mt-1 text-xs text-gray-500 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 block font-normal">Price</span>
            <span className="text-sm font-semibold text-gray-900">
              {product.currency} {product.price.toLocaleString("en-IN")}
            </span>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-1 px-3 py-1.5 bg-stone-900 hover:bg-amber-800 text-white rounded text-xs font-medium transition-colors"
            aria-label={`Add ${product.name} to cart`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}

