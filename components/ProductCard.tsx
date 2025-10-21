"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  seller: string;
  rating?: number;
  badge?: string;
}

export default function ProductCard({
  image,
  title,
  price,
  seller,
  rating = 0,
  badge,
}: ProductCardProps) {
  // Normalize and format price to VND for display.
  // Assumption: input prices from the page may be in JPY (e.g. "¥2,980").
  // We'll detect a yen symbol and convert using a conservative static rate (1 JPY = 170 VND).
  // This avoids external network calls for exchange rates; adjust rate as needed.
  const parseNumber = (s?: string | number) => {
    if (s == null) return NaN;
    return Number(String(s).replace(/[^0-9.-]+/g, ""));
  };

  const formatVND = (n: number) => {
    try {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
        maximumFractionDigits: 0,
      }).format(n);
    } catch {
      return String(n);
    }
  };

  const RATE_JPY_TO_VND = 170; // static assumption; change if you have real rates
  let formattedPrice = String(price);
  const rawNumeric = parseNumber(price);
  if (
    String(price).includes("¥") ||
    String(price).toUpperCase().includes("JPY")
  ) {
    if (!Number.isNaN(rawNumeric) && isFinite(rawNumeric)) {
      formattedPrice = formatVND(Math.round(rawNumeric * RATE_JPY_TO_VND));
    }
  } else if (!Number.isNaN(rawNumeric) && isFinite(rawNumeric)) {
    // If price looks numeric but not marked as JPY, assume it's already in the smallest unit (e.g., VND) or a raw number
    // If it's a relatively small number (e.g. < 10000), it's likely in another currency; we still format as VND.
    formattedPrice = formatVND(Math.round(rawNumeric));
  }

  return (
    <div
      data-title={title}
      data-seller={seller}
      data-price={formattedPrice}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          className="object-cover"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          placeholder="blur"
          // tiny neutral gray 8x8 PNG base64 LQIP
          blurDataURL={
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFklEQVQYV2NkYGD4z0AEYBxVSFMAAABkAAH6D3b3AAAAAElFTkSuQmCC"
          }
        />
        {badge && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">
            {badge}
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center gap-2 mb-2">
          <Image
            src="https://csspicker.dev/api/image/?q=farmer+avatar&image_type=photo"
            alt={`Ảnh của ${seller}`}
            className="rounded-full w-6 h-6 object-cover"
            width={24}
            height={24}
          />
          <span className="text-xs text-gray-600">{seller}</span>
        </div>
        {rating > 0 && (
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        )}
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">Bao gồm thuế</span>
          <span className="text-lg font-bold text-red-600">
            {formattedPrice}
          </span>
        </div>
      </div>
    </div>
  );
}
