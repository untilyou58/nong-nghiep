import { Menu, Search } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import MegaMenuContent from "../MegaMenuContent";
import NavigationMenuDesktop from "../NavigationMenuDesktop";
import Image from "next/image";
import Link from "next/link";
import CartDrawer from "@/components/CartDrawer";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src="https://csspicker.dev/api/image/?q=fresh+food+logo&image_type=illustration"
                alt="Tabechoku"
                width={32}
                height={32}
                className="h-8 cursor-pointer border rounded-md"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFklEQVQYV2NkYGD4z0AEYBxVSFMAAABkAAH6D3b3AAAAAElFTkSuQmCC"
              />
            </Link>
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
            <CartDrawer />
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
                  <MegaMenuContent />
                </div>
              </DrawerContent>
            </Drawer>
            {/* On md+ show the desktop navigation menu trigger */}
            <NavigationMenuDesktop />
          </div>
        </div>
      </div>
    </header>
  );
};
