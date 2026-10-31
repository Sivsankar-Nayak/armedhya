import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MoreVertical, Heart, MessageSquare } from "lucide-react";
import { articles } from "@/data/articles";

export const metadata = {
  title: "Blog | Armedhya",
  description:
    "Explore wisdom on gemstone astrology, aura balancing, and sacred spiritual practices.",
};

export default function BlogIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Blog category tabs matching live site */}
      <div className="border-b border-stone-200 pb-4">
        <div className="flex items-center gap-6 text-sm font-medium">
          <span className="text-stone-900 border-b-2 border-stone-900 pb-4 -mb-4 font-semibold cursor-pointer">
            All Posts
          </span>
        </div>
      </div>

      {/* Blog Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <article
            key={article.id}
            className="flex flex-col bg-white rounded-lg border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow group"
          >
            {/* High Quality AVIF Cover Image */}
            <Link
              href={`/blog/${article.slug}`}
              className="relative aspect-4/3 w-full bg-stone-100 overflow-hidden block"
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                className="object-cover group-hover:scale-102 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </Link>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                {/* Author Info Row matching live site */}
                <div className="flex items-center justify-between pb-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden bg-stone-200 shrink-0 border border-stone-100">
                      <Image
                        src={article.authorAvatar || "/images/authors/aditya-hore.jpg"}
                        alt={article.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-stone-900 leading-none">
                        {article.author}
                      </p>
                      <p className="text-[11px] text-stone-500 mt-1 leading-none">
                        {article.datePublished} · {article.readTime || "4 min read"}
                      </p>
                    </div>
                  </div>
                  <button
                    className="text-stone-400 hover:text-stone-600 p-1"
                    aria-label="Article options"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>

                {/* Title */}
                <h2 className="text-xl font-serif font-bold text-stone-900 group-hover:text-amber-800 transition-colors mt-2 leading-snug">
                  <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                </h2>

                {/* Snippet */}
                <p className="mt-2 text-xs text-stone-600 leading-relaxed line-clamp-3">
                  {article.description}
                </p>
              </div>

              {/* Engagement Footer */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 hover:text-stone-600 transition-colors">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>0</span>
                  </span>
                </div>
                <button
                  className="hover:text-red-500 transition-colors p-1"
                  aria-label="Like post"
                >
                  <Heart className="w-4 h-4" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
