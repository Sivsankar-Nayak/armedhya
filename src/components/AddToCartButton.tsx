"use client";

import React, { useState } from "react";
import { Plus, Minus, ShoppingBag, Check } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center border border-stone-300 rounded-md bg-white">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="p-2 text-stone-600 hover:text-amber-800"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-4 text-sm font-semibold text-stone-800">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="p-2 text-stone-600 hover:text-amber-800"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <button
          onClick={handleAdd}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-amber-800 hover:bg-amber-900 text-white rounded-md text-sm font-semibold shadow-xs transition-colors"
        >
          {added ? (
            <>
              <Check className="w-4 h-4" />
              <span>Added to Cart</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Cart</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

