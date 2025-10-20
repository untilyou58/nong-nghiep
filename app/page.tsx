import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import PopularCarousel from "@/components/PopularCarousel";
import { Search, ShoppingCart, Menu } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import NavigationMenuDesktop from "@/components/NavigationMenuDesktop";

export default function Home() {
  const categories = [
    "Tìm trên NewEra Agri",
    "Xem tất cả sản phẩm",
    "Xem tất cả sản phẩm",
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="https://csspicker.dev/api/image/?q=fresh+food+logo&image_type=illustration"
                alt="Tabechoku"
                width={32}
                height={32}
                className="h-8"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFklEQVQYV2NkYGD4z0AEYBxVSFMAAABkAAH6D3b3AAAAAElFTkSuQmCC"
              />
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 md:w-96">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm nhà sản xuất hoặc sản phẩm"
                  className="bg-transparent outline-none text-sm flex-1"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              {/* Mobile: open sidebar as drawer */}
              <Drawer>
                <DrawerTrigger asChild>
                  <button className="md:hidden" aria-label="Mở menu">
                    <Menu className="w-6 h-6 text-gray-600" />
                  </button>
                </DrawerTrigger>
                <DrawerContent className="sm:max-w-[90vw]">
                  <DrawerHeader>
                    <DrawerTitle>Danh mục</DrawerTitle>
                  </DrawerHeader>
                  <div className="mt-2">
                    <div className="bg-white rounded-lg shadow-sm p-4">
                      {categories.map((category, index) => (
                        <div
                          key={index}
                          className={`py-2 text-sm ${
                            index === 0 ? "font-bold border-b mb-2" : ""
                          } ${
                            index === 6 || index === 10
                              ? "border-t mt-2 pt-2"
                              : ""
                          }`}
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
              {/* On md+ show the desktop navigation menu trigger */}
              <NavigationMenuDesktop />
            </div>
          </div>
        </div>
      </header>

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
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`py-2 text-sm ${
                    index === 0 ? "font-bold border-b mb-2" : ""
                  } ${index === 6 || index === 10 ? "border-t mt-2 pt-2" : ""}`}
                >
                  {category}
                </div>
              ))}
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
                  <ProductCard
                    image="https://csspicker.dev/api/image/?q=sweet+corn+fresh&image_type=photo"
                    title="Ngô ngọt vừa hái - KanKan"
                    price="¥2,980"
                    seller="Nông trại Sato"
                    rating={5}
                  />
                  <ProductCard
                    image="https://csspicker.dev/api/image/?q=edamame+green+beans&image_type=photo"
                    title="Đậu ván xanh - Edamame Chado"
                    price="¥1,980"
                    seller="Nông trại Yamamoto"
                    rating={5}
                  />
                  <ProductCard
                    image="https://csspicker.dev/api/image/?q=artisan+bread+loaf&image_type=photo"
                    title="Bánh mì men tự nhiên - Set mix"
                    price="¥3,240"
                    seller="Baker Farm"
                    rating={5}
                  />
                </PopularCarousel>
              </div>
            </section>

            {/* 販売量上位商品 Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-center mb-6">
                Sản phẩm bán chạy
              </h2>
              <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                <ProductCard
                  image="https://csspicker.dev/api/image/?q=japanese+melon&image_type=photo"
                  title="Dưa lưới thượng hạng - 1 trái"
                  price="¥3,980"
                  seller="Vườn Dưa"
                  rating={5}
                  badge="Miễn phí vận chuyển"
                />
                <ProductCard
                  image="https://csspicker.dev/api/image/?q=red+tomato+fresh&image_type=photo"
                  title="Cà chua chín mọng 1kg"
                  price="¥1,680"
                  seller="Trang trại Tomato"
                  rating={5}
                />
                <ProductCard
                  image="https://csspicker.dev/api/image/?q=mandarin+orange&image_type=photo"
                  title="Quýt hộ gia đình 5kg (hàng loại 2)"
                  price="¥2,480"
                  seller="Vườn Quýt"
                  rating={4}
                />
                <ProductCard
                  image="https://csspicker.dev/api/image/?q=persimmon+fruit&image_type=photo"
                  title="Hộp 12 quả hồng Fuji (quà tặng)"
                  price="¥4,320"
                  seller="Vườn Hồng"
                  rating={5}
                />
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
            </section>

            {/* 今が旬の商品 Section */}
            <section>
              <h2 className="text-2xl font-bold text-center mb-6">
                Sản phẩm đang vào mùa
              </h2>
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
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
