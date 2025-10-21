import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { products } from "@/lib/mock/products";
import PopularCarousel from "@/components/PopularCarousel";
import { Search, ShoppingCart, Menu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavigationMenuDesktop from "@/components/NavigationMenuDesktop";
import MegaMenuContent from "@/components/MegaMenuContent";
import { Header } from "@/components/layouts/Header";
import { CartProvider } from "@/contexts/CartContext";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  const categories = [
    "Tìm trên NewEra Agri",
    "Xem tất cả sản phẩm",
    "Xem sản phẩm đề xuất",
    "Đăng ký định kỳ / Gói",
    "Đánh giá của mọi người",
    "Câu hỏi thường gặp",
    "Cách sử dụng NewEra Agri",
    "Về NewEra Agri",
    "Rau củ",
    "Trái cây",
    "Gạo & Ngũ cốc",
    "Thịt",
    "Hải sản",
    "Trứng & Sản phẩm từ sữa",
    "Mật ong",
    "Trà",
    "Gia vị",
    "Sản phẩm chế biến",
  ];

  return (
    <>
      {/* Hero spans the full content width (aside + main) */}
      <div className="md:max-w-7xl mx-auto px-4 pt-6 w-full">
        <div className="relative bg-linear-to-r from-green-50 to-orange-50 rounded-lg overflow-hidden mb-6 md:h-64 h-40">
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 relative md:h-64 h-40 w-full">
              <Image
                src="https://csspicker.dev/api/image/?q=happy+farmers+field&image_type=photo"
                alt="Người nông dân"
                className="object-cover"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFklEQVQYV2NkYGD4z0AEYBxVSFMAAABkAAH6D3b3AAAAAElFTkSuQmCC"
              />
            </div>
            <div className="flex-1 text-center px-6 md:px-8 py-4 md:py-0 z-10">
              <h2 className="text-2xl font-bold mb-2">
                Giao trực tiếp từ người sản xuất.
              </h2>
              <p className="text-lg mb-4">
                Vì vậy tươi ngon. Vì vậy thơm ngon.
              </p>
              <p className="text-sm text-gray-600">
                Sàn thương mại trực tiếp lớn nhất Việt Nam
              </p>
            </div>
            <div className="flex-1 relative md:h-64 h-40 w-full">
              <Image
                src="https://csspicker.dev/api/image/?q=fresh+vegetables+basket&image_type=photo"
                alt="Rổ rau tươi"
                className="object-cover"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFklEQVQYV2NkYGD4z0AEYBxVSFMAAABkAAH6D3b3AAAAAElFTkSuQmCC"
              />
            </div>
          </div>
        </div>
        {/* Promotional Banners */}
        <div className="relative mb-4">
          <PopularCarousel>
            <div className="relative h-32 rounded-lg overflow-hidden">
              <Image
                src="https://csspicker.dev/api/image/?q=food+delivery+banner&image_type=illustration"
                alt="Banner giao hàng"
                className="object-cover"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 33vw"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFklEQVQYV2NkYGD4z0AEYBxVSFMAAABkAAH6D3b3AAAAAElFTkSuQmCC"
              />
            </div>
            <div className="relative h-32 rounded-lg overflow-hidden">
              <Image
                src="https://csspicker.dev/api/image/?q=free+shipping+banner&image_type=illustration"
                alt="Banner miễn phí vận chuyển"
                className="object-cover"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 33vw"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFklEQVQYV2NkYGD4z0AEYBxVSFMAAABkAAH6D3b3AAAAAElFTkSuQmCC"
              />
            </div>
            <div className="relative h-32 rounded-lg overflow-hidden">
              <Image
                src="https://csspicker.dev/api/image/?q=seasonal+food+banner&image_type=illustration"
                alt="Banner theo mùa"
                className="object-cover"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 33vw"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFklEQVQYV2NkYGD4z0AEYBxVSFMAAABkAAH6D3b3AAAAAElFTkSuQmCC"
              />
            </div>
          </PopularCarousel>
        </div>

        <div className="flex gap-6">
          {/* Sidebar (hidden on mobile) */}
          <aside className="hidden md:block md:w-64 md:shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-4">
              {categories.map((category, index) =>
                index === 0 ? (
                  <div
                    key={index + "Menu"}
                    className={`py-2 text-sm cursor-pointer font-bold border-b mb-2`}
                  >
                    {category}
                  </div>
                ) : (
                  <Link
                    key={index + "Menu"}
                    href={`/categories/${index}`}
                    aria-disabled={index === 0}
                    className="flex items-center justify-between w-full hover:bg-gray-50 rounded-md px-2"
                  >
                    <div
                      className={`py-2 text-sm cursor-pointer ${
                        index === 0 ? "font-bold border-b mb-2" : ""
                      } ${
                        index === 6 || index === 10 ? "border-t mt-2 pt-2" : ""
                      }`}
                    >
                      {category}
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                )
              )}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-full">
            {/* みんなが愛用した商品 Section */}
            <section className="mb-12">
              <div className="text-center mb-6">
                <div className="relative w-12 h-12 mx-auto mb-2">
                  <Image
                    src="https://csspicker.dev/api/image/?q=crown+icon&image_type=illustration"
                    alt="Vương miện"
                    className="object-contain"
                    fill
                    sizes="48px"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFklEQVQYV2NkYGD4z0AEYBxVSFMAAABkAAH6D3b3AAAAAElFTkSuQmCC"
                  />
                </div>
                <h2 className="text-2xl font-bold">Sản phẩm được ưa chuộng</h2>
              </div>
              <div className="relative">
                <PopularCarousel>
                  {products.map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${p.id}`}
                      className="block"
                    >
                      <ProductCard
                        image={p.images[0].url}
                        title={p.name}
                        price={`¥${p.price.toLocaleString()}`}
                        seller="Nhà cung cấp"
                        rating={5}
                      />
                    </Link>
                  ))}
                </PopularCarousel>
              </div>
            </section>

            {/* 販売量上位商品 Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-center mb-6">
                Sản phẩm bán chạy
              </h2>
              <div className="relative">
                <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                  {products.map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${p.id}`}
                      className="block"
                    >
                      <ProductCard
                        image={p.images[0].url}
                        title={p.name}
                        price={`¥${p.price.toLocaleString()}`}
                        seller="Nhà cung cấp"
                        rating={5}
                      />
                    </Link>
                  ))}
                </div>
                <div className="text-right mt-4 md:mt-2">
                  <Link
                    href="/categories/1"
                    className="text-sm font-medium text-blue-600 hover:underline flex items-center justify-end"
                  >
                    Xem tất cả
                    <ChevronRight className="inline-block w-4 h-4 ml-1 hover:text-blue-600" />
                  </Link>
                </div>
              </div>
            </section>

            {/* 旬のおすすめ Section */}
            <section className="mb-12">
              <div className="text-center mb-6">
                <div className="relative w-12 h-12 mx-auto mb-2">
                  <Image
                    src="https://csspicker.dev/api/image/?q=leaf+icon&image_type=illustration"
                    alt="Lá"
                    className="object-contain"
                    fill
                    sizes="48px"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFklEQVQYV2NkYGD4z0AEYBxVSFMAAABkAAH6D3b3AAAAAElFTkSuQmCC"
                  />
                </div>
                <h2 className="text-2xl font-bold">Gợi ý theo mùa</h2>
              </div>
              <div className="relative">
                <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                  <ProductCard
                    image="https://csspicker.dev/api/image/?q=mandarin+oranges+box&image_type=photo"
                    title="Quýt Wenshu 5kg - Dùng gia đình"
                    price="¥2,160"
                    seller="Vườn Quýt"
                    rating={5}
                  />
                  <ProductCard
                    image="https://csspicker.dev/api/image/?q=yuzu+citrus+fruit&image_type=photo"
                    title="Chanh Yuzu hữu cơ 1kg"
                    price="¥1,980"
                    seller="Vườn Yuzu"
                    rating={5}
                  />
                  <ProductCard
                    image="https://csspicker.dev/api/image/?q=pomelo+grapefruit&image_type=photo"
                    title="Bưởi Buntan - hộp 3 quả"
                    price="¥2,680"
                    seller="Trang trại Cam"
                    rating={4}
                  />
                  <ProductCard
                    image="https://csspicker.dev/api/image/?q=japanese+pear&image_type=photo"
                    title="Lê Nhật - loại Housui 5kg"
                    price="¥3,980"
                    seller="Vườn Lê"
                    rating={5}
                    badge="Hạn chế thời gian"
                  />
                </div>
                <div className="text-right mt-4 md:mt-2">
                  <Link
                    href="/categories/1"
                    className="text-sm font-medium text-blue-600 hover:underline flex items-center justify-end"
                  >
                    Xem tất cả
                    <ChevronRight className="inline-block w-4 h-4 ml-1 hover:text-blue-600" />
                  </Link>
                </div>
              </div>
            </section>

            {/* 今が旬の商品 Section */}
            <section>
              <h2 className="text-2xl font-bold text-center mb-6">
                Sản phẩm đang vào mùa
              </h2>
              <div className="relative">
                <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                  <ProductCard
                    image="https://csspicker.dev/api/image/?q=white+rice+bag&image_type=photo"
                    title="Gạo mới Koshihikari 5kg (niên vụ Reiwa 5)"
                    price="¥3,240"
                    seller="Nông trại Gạo"
                    rating={5}
                  />
                  <ProductCard
                    image="https://csspicker.dev/api/image/?q=blood+orange+fruit&image_type=photo"
                    title="Cam máu 2kg (hàng loại 2)"
                    price="¥1,980"
                    seller="Vườn Cam"
                    rating={4}
                    badge="Miễn phí giao hàng"
                  />
                  <ProductCard
                    image="https://csspicker.dev/api/image/?q=orange+citrus+fresh&image_type=photo"
                    title="Cam Kiyomi - 3kg (quà tặng)"
                    price="¥3,680"
                    seller="Vườn Cam"
                    rating={5}
                  />
                  <ProductCard
                    image="https://csspicker.dev/api/image/?q=japanese+sake+bottle&image_type=photo"
                    title="Rượu Junmai Daiginjo 720ml"
                    price="¥2,980"
                    seller="Nhà máy rượu"
                    rating={5}
                  />
                </div>
                <div className="text-right mt-4 md:mt-2">
                  <Link
                    href="/categories/1"
                    className="text-sm font-medium text-blue-600 hover:underline flex items-center justify-end"
                  >
                    Xem tất cả
                    <ChevronRight className="inline-block w-4 h-4 ml-1 hover:text-blue-600" />
                  </Link>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
