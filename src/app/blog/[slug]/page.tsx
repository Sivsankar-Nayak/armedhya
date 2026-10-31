import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const suggestedProducts = products.slice(0, 3);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Back button */}
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-amber-800 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to All Posts
        </Link>
      </div>

      {/* Header */}
      <header className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center justify-between pb-6 border-b border-stone-200">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-stone-200 shrink-0 border border-stone-200">
              <Image
                src={article.authorAvatar || "/images/authors/aditya-hore.jpg"}
                alt={article.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-stone-900 leading-none">
                {article.author}
              </p>
              <div className="flex items-center gap-2 text-xs text-stone-500 mt-1">
                <span>{article.datePublished}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime || "4 min read"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* High-res AVIF Main Image */}
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 896px"
        />
      </div>

      {/* Article Text Content */}
      <div className="space-y-6 text-stone-700 leading-relaxed text-base font-light">
        {article.content && article.content.length > 0 ? (
          article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))
        ) : (
          <p>{article.description}</p>
        )}
      </div>

      {/* Recommended Stones */}
      <div className="pt-12 mt-12 border-t border-stone-200 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-serif font-bold text-stone-900">
            Recommended Sacred Offerings
          </h2>
          <Link
            href="/products"
            className="text-xs font-medium text-amber-800 hover:underline flex items-center gap-1"
          >
            Explore all
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {suggestedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </article>
  );
}
