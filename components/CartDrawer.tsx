"use client";

import { useCart } from "@/contexts/CartContext";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Giỏ hàng"
          className="relative"
        >
          <ShoppingCart />
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs font-bold shadow">
              {totalQuantity}
            </span>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-w-md mx-auto">
        <DrawerHeader>
          <DrawerTitle>Giỏ hàng</DrawerTitle>
        </DrawerHeader>
        <div className="p-4">
          {cart.length === 0 ? (
            <div className="text-center text-gray-500">
              Chưa có sản phẩm nào.
            </div>
          ) : (
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
                      ¥{item.price.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        -
                      </Button>
                      <span className="px-2">{item.quantity}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Xóa"
                  >
                    ×
                  </Button>
                </li>
              ))}
            </ul>
          )}
          {cart.length > 0 && (
            <div className="mt-4 flex justify-between items-center">
              <div className="font-bold">Tổng: ¥{total.toLocaleString()}</div>
              <Button variant="destructive" onClick={clearCart}>
                Xóa tất cả
              </Button>
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
