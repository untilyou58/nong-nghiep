"use client";

import ProductCard from "@/components/ProductCard";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Facebook,
  Phone,
  Mail,
  Truck,
  ShieldCheck,
  RefreshCcw,
} from "lucide-react";
import Link from "next/link";

import * as React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface ProductImage {
  url: string;
  alt?: string;
}

interface ProductDetailProps {
  id?: string;
  name: string;
  price: number;
  description: string;
  images: ProductImage[];
  rating?: number;
  reviewCount?: number;
  seller?: {
    name: string;
    avatar: string;
    isVerified?: boolean;
  };
  badge?: string;
  stockStatus?: "instock" | "outofstock";
  details?: string;
  ingredients?: string;
  storage?: string;
}

export default function ProductDetail({
  id,
  name,
  price,
  description,
  images,
  rating = 5,
  reviewCount = 12,
  seller = {
    name: "Vườn Hồng Era",
    avatar: "/products/kaki-1.png",
    isVerified: true,
  },
  badge = "Khuyến mãi",
  stockStatus = "instock",
  details = "Trái hồng được tuyển chọn kỹ lưỡng, vị ngọt tự nhiên, không hạt.",
  ingredients = "100% hồng tươi tự nhiên, không chất bảo quản.",
  storage = "Bảo quản nơi khô ráo, tránh ánh nắng trực tiếp. Ngon nhất khi dùng trong 5 ngày.",
}: ProductDetailProps) {
  const [quantity, setQuantity] = React.useState(1);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [lightboxOpen, setLightboxOpen] = React.useState(false);

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!addToCart) return;
    addToCart(
      { id: id ?? name + images[0]?.url, name, image: images[0]?.url, price },
      quantity
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-8">
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="flex flex-col md:flex-row gap-8 w-full flex-1">
          {/* Image Section */}
          <div className="flex-1 flex flex-col items-center">
            <Card className="w-full max-w-md aspect-square flex items-center justify-center overflow-hidden group cursor-zoom-in py-0">
              <div
                className="relative w-full h-full"
                onClick={() => setLightboxOpen(true)}
                tabIndex={0}
                aria-label="Xem ảnh lớn"
                role="button"
              >
                <Image
                  src={images[selectedIndex]?.url}
                  alt={images[selectedIndex]?.alt || name}
                  className="object-cover transition-transform duration-300 group-hover:scale-110 rounded-md"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  //   loading="lazy"
                  priority={selectedIndex === 0}
                />
                <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                  Nhấn để phóng to
                </span>
              </div>
            </Card>
            {/* Thumbnails */}
            <div className="flex gap-2 mt-4 overflow-x-auto">
              {images.map((img, idx) => (
                <div
                  key={img.url}
                  onClick={() => setSelectedIndex(idx)}
                  className={`border cursor-pointer rounded-md p-1 w-16 h-16 flex items-center justify-center transition-all duration-200 ${
                    idx === selectedIndex
                      ? "border-primary ring-2 ring-primary"
                      : "border-muted"
                  }`}
                  aria-label={`Xem ảnh ${idx + 1}`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={img.url}
                      alt={img.alt || name}
                      className="object-cover rounded"
                      fill
                      sizes="64px"
                      //   loading="lazy"
                      priority={idx === 0}
                    />
                    {/* Lightbox overlay */}
                    {lightboxOpen && (
                      <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fade-in"
                        onClick={() => setLightboxOpen(false)}
                        tabIndex={-1}
                        aria-modal="true"
                        role="dialog"
                      >
                        <Button
                          className="absolute cursor-pointer top-4 right-4 text-white text-2xl bg-black/60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 focus:outline-none"
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightboxOpen(false);
                          }}
                          aria-label="Đóng ảnh lớn"
                        >
                          ×
                        </Button>
                        {/* Prev button */}
                        {images.length > 1 && (
                          <Button
                            className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/40 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedIndex(
                                (selectedIndex - 1 + images.length) %
                                  images.length
                              );
                            }}
                            aria-label="Ảnh trước"
                          >
                            ‹
                          </Button>
                        )}
                        <div className="relative w-[90vw] max-w-2xl h-[80vh] flex items-center justify-center">
                          <Image
                            src={images[selectedIndex]?.url}
                            alt={images[selectedIndex]?.alt || name}
                            className="object-contain rounded shadow-lg"
                            fill
                            sizes="90vw"
                            loading="eager"
                            priority
                          />
                        </div>
                        {/* Next button */}
                        {images.length > 1 && (
                          <Button
                            className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/40 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedIndex(
                                (selectedIndex + 1) % images.length
                              );
                            }}
                            aria-label="Ảnh sau"
                          >
                            ›
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Info Section */}
        <div className="flex-1 flex flex-col gap-4 py-2 md:py-0">
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-bold">{name}</h1>
            {badge && <Badge variant="destructive">{badge}</Badge>}
            {stockStatus === "instock" ? (
              <Badge
                variant="outline"
                className="text-green-600 border-green-600"
              >
                Còn hàng
              </Badge>
            ) : (
              <Badge variant="outline" className="text-red-600 border-red-600">
                Hết hàng
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl text-primary font-semibold">
              {price.toLocaleString()}₫
            </span>
            <div className="flex items-center ml-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill={i < rating ? "#facc15" : "none"}
                />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                ({reviewCount} đánh giá)
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <Image
              src={seller.avatar}
              alt={seller.name}
              width={36}
              height={36}
              className="rounded-full border w-9 h-9 object-cover"
            />
            <span className="font-medium text-base">{seller.name}</span>
            {seller.isVerified && (
              <Badge variant="secondary">Đã xác thực</Badge>
            )}
          </div>
          <Tabs defaultValue="desc" className="w-full">
            <TabsList>
              <TabsTrigger value="desc">Mô tả</TabsTrigger>
              <TabsTrigger value="details">Chi tiết</TabsTrigger>
              <TabsTrigger value="ingredients">Thành phần</TabsTrigger>
              <TabsTrigger value="storage">Bảo quản</TabsTrigger>
            </TabsList>
            <TabsContent value="desc">
              <p className="text-base text-muted-foreground mb-2">
                {description}
              </p>
            </TabsContent>
            <TabsContent value="details">
              <p className="text-base text-muted-foreground mb-2">{details}</p>
            </TabsContent>
            <TabsContent value="ingredients">
              <p className="text-base text-muted-foreground mb-2">
                {ingredients}
              </p>
            </TabsContent>
            <TabsContent value="storage">
              <p className="text-base text-muted-foreground mb-2">{storage}</p>
            </TabsContent>
          </Tabs>
          <div className="flex flex-col sm:flex-row gap-2 mt-4 items-center">
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="w-8 h-8"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Giảm số lượng"
              >
                -
              </Button>
              <Input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, Number(e.target.value)))
                }
                className="w-16 text-center"
                aria-label="Số lượng"
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="w-8 h-8"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Tăng số lượng"
              >
                +
              </Button>
            </div>
            <Button
              className="bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-primary/90 transition"
              onClick={handleAddToCart}
            >
              Thêm vào giỏ hàng
            </Button>
            <Button variant="outline">Chia sẻ</Button>
          </div>
        </div>
      </div>
      {/* Footer sản phẩm */}
      <div className="mt-12 w-full">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
          {/* Chính sách/Accordion */}
          <div>
            <h3 className="font-semibold mb-2 text-lg">Chính sách & hỗ trợ</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="return">
                <AccordionTrigger>
                  <RefreshCcw className="inline w-4 h-4 mr-2" />
                  Đổi trả trong 3 ngày
                </AccordionTrigger>
                <AccordionContent>
                  Sản phẩm được đổi trả miễn phí trong 3 ngày nếu có lỗi từ nhà
                  cung cấp hoặc vận chuyển.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger>
                  <Truck className="inline w-4 h-4 mr-2" />
                  Vận chuyển nhanh
                </AccordionTrigger>
                <AccordionContent>
                  Giao hàng toàn quốc, miễn phí với đơn từ 500.000₫. Thời gian
                  dự kiến 1-3 ngày làm việc.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="warranty">
                <AccordionTrigger>
                  <ShieldCheck className="inline w-4 h-4 mr-2" />
                  Bảo đảm chất lượng
                </AccordionTrigger>
                <AccordionContent>
                  Cam kết sản phẩm tươi mới, hoàn tiền 100% nếu không đúng mô
                  tả.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          {/* Sản phẩm liên quan */}
          <div>
            <h3 className="font-semibold mb-2 text-lg">Sản phẩm liên quan</h3>
            <div className="grid md:grid-cols-3 gap-2 grid-cols-1">
              {/* Mock 2 sản phẩm liên quan */}
              <Link href="/products/kaki-001">
                <ProductCard
                  image="/products/kaki-1.png"
                  title="Hồng không hạt Fuji"
                  price="5400"
                  seller="Vườn Hồng Fuji"
                  rating={5}
                  badge="Bán chạy"
                />
              </Link>
              <Link href="/products/apple-001">
                <ProductCard
                  image="/products/apple-1.png"
                  title="Táo Mật Giòn"
                  price="3200"
                  seller="Vườn Táo Era"
                  rating={4}
                  badge="Mới về"
                />
              </Link>
              <Link href="/products/banana-001">
                <ProductCard
                  image="/products/banana-1.png"
                  title="Chuối Ngon Lành"
                  price="3200"
                  seller="Vườn Chuối Era"
                  rating={4}
                  badge="Mới về"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
