import CategorySidebar from "@/components/CategorySidebar";
import React from "react";

export default function WithSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="md:max-w-7xl mx-auto px-4 pt-6 w-full flex gap-6">
        <CategorySidebar />
        <main className="flex-1 max-w-full">{children}</main>
      </div>
    </div>
  );
}
