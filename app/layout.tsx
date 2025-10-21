import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Header } from "@/components/layouts/Header";
import { CartProvider } from "@/contexts/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nông Nghiệp Newera",
  description:
    "Nền tảng nông nghiệp công nghệ cao kết nối nhà sản xuất và người tiêu dùng.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Top-level wrapper ensures full-width body on small screens; inner pages can center at md+ */}
        <div className="w-full bg-gray-50">
          <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <CartProvider>
              <Header />
              {children}
            </CartProvider>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
