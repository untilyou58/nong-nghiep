import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="text-sm text-gray-600">
          <div className="font-semibold">NewEra Agri</div>
          <div>
            Giao trực tiếp từ nhà sản xuất — Tận tay đến người tiêu dùng
          </div>
        </div>

        <nav className="flex gap-4 text-sm">
          <a href="#" className="text-gray-600 hover:underline">
            Về chúng tôi
          </a>
          <a href="#" className="text-gray-600 hover:underline">
            Điều khoản
          </a>
          <a href="#" className="text-gray-600 hover:underline">
            Chính sách bảo mật
          </a>
          <a href="#" className="text-gray-600 hover:underline">
            Liên hệ
          </a>
        </nav>

        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} NewEra Agri. Bản quyền thuộc về NewEra.
        </div>
      </div>
    </footer>
  );
}
