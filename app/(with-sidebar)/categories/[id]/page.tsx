import { products } from "@/lib/mock/products";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { notFound } from "next/navigation";

const categoryNames = [
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

export default function CategoryPage({ params }: { params: { id: string } }) {
  const catIdx = Number(params.id);
  const category = categoryNames[catIdx] || "";
  if (!category) return notFound();

  // Mock: lọc sản phẩm theo category (ở đây chỉ demo, thực tế cần mapping)
  const filtered = products;

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Breadcrumb */}
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/">Trang chủ</Link> / <span>{category}</span>
      </nav>
      <div className="flex md:items-center justify-between mb-6 md:flex-row flex-col gap-2">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <div>{category}</div>
          <Badge variant="secondary">{filtered.length}</Badge>
        </h1>
        <Input placeholder="Tìm sản phẩm..." className="md:w-64 w-full" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <Link key={p.id} href={`/products/${p.id}`} className="block">
            <ProductCard
              image={p.images[0].url}
              title={p.name}
              price={p.price.toString()}
              seller="Nhà cung cấp"
              rating={5}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
