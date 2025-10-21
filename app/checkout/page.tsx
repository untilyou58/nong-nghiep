"use client";

import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [note, setNote] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (cart.length === 0 && !submitted) {
    return (
      <div className="max-w-lg mx-auto py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Giỏ hàng của bạn đang trống</h2>
        <Link href="/">
          <Button>Quay lại mua hàng</Button>
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto py-16 text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-600">
          Đặt hàng thành công!
        </h2>
        <p className="mb-6">
          Cảm ơn bạn đã mua hàng. Chúng tôi sẽ liên hệ xác nhận đơn hàng sớm
          nhất.
        </p>
        <Link href="/">
          <Button>Về trang chủ</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Thanh toán</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Cart summary */}
        <div>
          <h2 className="font-semibold mb-4">Sản phẩm trong giỏ</h2>
          <ul className="divide-y">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center gap-3 py-3">
                <div className="relative w-16 h-16">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-500">
                    Số lượng: {item.quantity}
                  </div>
                </div>
                <div className="font-bold text-red-600">
                  ¥{item.price.toLocaleString()}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between items-center border-t pt-4">
            <span className="font-semibold">Tổng cộng:</span>
            <span className="text-xl font-bold text-primary">
              ¥{total.toLocaleString()}
            </span>
          </div>
        </div>
        {/* Shipping form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <h2 className="font-semibold mb-4">Thông tin giao hàng</h2>
          <Input
            required
            placeholder="Họ và tên"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            required
            placeholder="Số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            required
            placeholder="Địa chỉ nhận hàng"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            placeholder="Ghi chú (tuỳ chọn)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <Button type="submit" className="w-full mt-2">
            Xác nhận đặt hàng
          </Button>
        </form>
      </div>
    </div>
  );
}
