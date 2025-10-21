export const products = [
  {
    id: "kaki-001",
    name: "Kaki Hoshigaki - Tươi ngon",
    price: 5400,
    description:
      "Màu cam rực rỡ, vị ngọt tự nhiên. Trái to, vỏ mỏng, thơm và mọng nước.",
    images: [
      { url: "/products/kaki-1.png", alt: "Kaki - mặt trước" },
      { url: "/products/kaki-2.png", alt: "Kaki - cắt đôi" },
      { url: "/products/kaki-3.png", alt: "Kaki trên cây" },
    ],
  },
  {
    id: "apple-001",
    name: "Táo Mật - Giòn ngọt",
    price: 3200,
    description: "Táo giòn tan, vị ngọt hài hoà, phù hợp cho gia đình.",
    images: [
      { url: "/products/apple-1.png", alt: "Táo - mặt trước" },
      { url: "/products/apple-2.png", alt: "Táo - cắt đôi" },
    ],
  },
  {
    id: "orange-001",
    name: "Cam Vàng - Tươi mát",
    price: 2800,
    description: "Cam vàng mọng nước, vị ngọt thanh, giàu vitamin C.",
    images: [
      { url: "/products/orange-1.png", alt: "Cam - mặt trước" },
      { url: "/products/orange-2.png", alt: "Cam - cắt đôi" },
    ],
  },
  {
    id: "banana-001",
    name: "Chuối - Ngọt ngào",
    price: 1500,
    description: "Chuối chín vàng, ngọt lịm, giàu năng lượng.",
    images: [
      { url: "/products/banana-1.png", alt: "Chuối - mặt trước" },
      { url: "/products/banana-2.png", alt: "Chuối - cắt đôi" },
    ],
  },
];

export function getProductById(id: string) {
  return products.find((p) => p.id === id) || null;
}
