"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

interface PopularCarouselProps {
  children: React.ReactNode;
}

export default function PopularCarousel({ children }: PopularCarouselProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const [activeIndex, setActiveIndex] = useState(0);
  // removed isDragging state (no longer needed with shadcn carousel pattern)

  // Update scroll state and active index
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      // compute active index by centering
      const childrenCount = el.children.length;
      if (childrenCount === 0) return;
      let closest = 0;
      let closestDist = Infinity;
      for (let i = 0; i < childrenCount; i++) {
        const child = el.children[i] as HTMLElement;
        const rect = child.getBoundingClientRect();
        const containerRect = el.getBoundingClientRect();
        const dist = Math.abs(
          rect.left - containerRect.left - containerRect.width / 4
        );
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      }
      setActiveIndex(closest);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // scrollBy removed; embla handles programmatic scrolling

  const handlePrev = useCallback(() => {
    if (api) api.scrollPrev();
  }, [api]);

  const handleNext = useCallback(() => {
    if (api) api.scrollNext();
  }, [api]);

  const items = React.Children.toArray(children);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    } else if (e.key === "Home") {
      e.preventDefault();
      if (api) api.scrollTo(0);
    } else if (e.key === "End") {
      e.preventDefault();
      if (api) api.scrollTo(api.scrollSnapList().length - 1);
    }
  };

  // Pointer / touch drag handling for improved swipe on mobile
  // Embla integration: update active index and canScroll flags
  useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };
    onSelect();
    api.on("select", onSelect);
    api.on("scroll", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("scroll", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  // ARIA live text for screen readers (reads data-title attribute when available)
  const [liveMessage, setLiveMessage] = useState("");
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const items = el.querySelectorAll('[data-slot="carousel-item"]');
    const active = items[activeIndex] as HTMLElement | undefined;
    let title: string | undefined;
    let seller: string | undefined;
    let price: string | undefined;
    if (active) {
      // ProductCard is nested inside CarouselItem; find the first element with data-title
      const product = active.querySelector(
        "[data-title]"
      ) as HTMLElement | null;
      title =
        product?.getAttribute("data-title") ||
        active.textContent?.trim().split("\n")[0] ||
        undefined;
      seller = product?.getAttribute("data-seller") || undefined;
      price = product?.getAttribute("data-price") || undefined;
    }
    if (title) {
      let msg = `Sản phẩm ${activeIndex + 1} trên ${items.length}: ${title}`;
      if (seller) msg += ` — người bán: ${seller}`;
      if (price) {
        const numeric = Number(String(price).replace(/[^0-9.-]+/g, ""));
        if (!Number.isNaN(numeric) && isFinite(numeric)) {
          try {
            const formatted = new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
              maximumFractionDigits: 0,
            }).format(numeric);
            msg += ` — giá: ${formatted}`;
          } catch {
            msg += ` — giá: ${price}`;
          }
        } else {
          msg += ` — giá: ${price}`;
        }
      }
      const id = setTimeout(() => setLiveMessage(msg), 300);
      return () => clearTimeout(id);
    }
    return;
  }, [activeIndex]);

  return (
    <div className="relative">
      <div ref={containerRef}>
        <Carousel
          setApi={setApi}
          opts={{ align: "start", containScroll: "trimSnaps", loop: true }}
          onKeyDownCapture={onKeyDown}
        >
          <CarouselContent className="-ml-4">
            {items.map((child, idx) => (
              <CarouselItem
                key={idx}
                className="pl-4 w-full flex-none md:w-1/3 md:pl-4"
                data-index={idx}
              >
                {child}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white/70 dark:bg-black/60 shadow-md z-20" />
          <CarouselNext className="bg-white/70 dark:bg-black/60 shadow-md z-20" />
        </Carousel>

        {/* Dots (shadcn Button for consistent theming & focus) */}
        <div className="flex justify-center gap-2 mt-4">
          {(api?.scrollSnapList() || []).map((_, i) => (
            <Button
              key={i}
              variant="ghost"
              size="icon"
              onClick={() => api?.scrollTo(i)}
              aria-label={`Chuyển đến slide ${i + 1}`}
              aria-current={i === activeIndex ? "true" : undefined}
              className={`w-2 h-2 p-0 rounded-full ${
                i === activeIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      {/* Visually hidden live region for screen readers */}
      <div aria-live="polite" className="sr-only" role="status">
        {liveMessage}
      </div>
    </div>
  );
}
