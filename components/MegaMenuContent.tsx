"use client";
import React from "react";
import Link from "next/link";

export default function MegaMenuContent() {
  return (
    <div>
      {/* Top row: avatar + login/register + close (close handled by parent) */}
      <div className="flex md:items-center justify-between mb-4 md:flex-row flex-col gap-2">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <div className="text-gray-400">👤</div>
          </div>
          <div className="text-sm">
            <div className="text-gray-700 font-medium">guest</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-amber-300 px-4 py-2 rounded text-sm font-medium">
            Đăng nhập
          </button>
          <button className="border px-4 py-2 rounded text-sm">
            Đăng ký thành viên
          </button>
        </div>
      </div>

      <div className="border-t -mx-4 md:-mx-6" />

      {/* Columns grid */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-4">
        <div>
          <div className="text-xs font-semibold text-gray-500 mb-3">
            Tìm kiếm sản phẩm
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Sản phẩm</li>
            <li>Nhà sản xuất</li>
            <li>Xuất xứ</li>
            <li>Tin tức/Khuyến mãi</li>
            <li>Danh mục</li>
            <li>Thuế địa phương</li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold text-gray-500 mb-3">
            Dịch vụ liên quan
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Danh sách giao định kỳ</li>
            <li>Thẻ quà tặng</li>
            <li>Gói tổng hợp</li>
            <li>Chợ (trò chơi nhỏ)</li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold text-gray-500 mb-3">
            Nội dung
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Bài viết của mọi người</li>
            <li>Danh sách công thức</li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold text-gray-500 mb-3">
            Trợ giúp
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Về NewEra Agri</li>
            <li>Hướng dẫn / Liên hệ</li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <div className="text-xs font-semibold text-gray-500 mb-3">
            Nhà sản xuất & doanh nghiệp
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Nếu muốn bán, bấm vào đây</li>
            <li>Cho nhà hàng, bấm vào đây</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
