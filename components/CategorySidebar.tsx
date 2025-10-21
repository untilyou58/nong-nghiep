import Link from "next/link";
import { ChevronRight } from "lucide-react";

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

export default function CategorySidebar({ active }: { active?: number }) {
  return (
    <aside className="hidden md:block md:w-64 md:shrink-0">
      <div className="bg-white rounded-lg shadow-sm p-4">
        {categories.map((category, index) =>
          index === 0 ? (
            <div
              key={index + "Menu"}
              className="py-2 text-sm cursor-pointer font-bold border-b mb-2"
            >
              {category}
            </div>
          ) : (
            <Link
              key={index + "Menu"}
              href={`/categories/${index}`}
              className={`flex items-center justify-between w-full hover:bg-gray-50 rounded-md px-2 ${
                active === index ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              <div
                className={`py-2 text-sm cursor-pointer ${
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
  );
}
