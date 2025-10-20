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
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
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
            className="rounded-full"
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
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Bao gồm thuế</span>
          <span className="text-lg font-bold text-red-600">{price}</span>
        </div>
      </div>
    </div>
  );
}
