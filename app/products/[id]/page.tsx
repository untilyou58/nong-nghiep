import ProductDetail from "@/components/ProductDetail";
import { getProductById } from "@/lib/mock/products";

interface PageProps {
  params: { id: string };
}

export default function ProductPage({ params }: PageProps) {
  const product = getProductById(params.id);

  if (!product) {
    return <div className="p-8">Sản phẩm không tồn tại</div>;
  }

  return (
    <div className="p-6">
      <ProductDetail
        id={product.id}
        name={product.name}
        price={product.price}
        description={product.description}
        images={product.images}
      />
    </div>
  );
}
