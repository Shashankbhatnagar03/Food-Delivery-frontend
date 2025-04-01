import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { CartProvider } from "@/contexts/card-context";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food Delivery App",
  description: "Order delicious food online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            <div className="flex min-h-screen flex-col overflow-hidden ">
              <Navbar />
              <main className="flex-1  ">{children}</main>
              <footer className="border-t py-6">
                <div className="container flex flex-col items-center justify-center gap-2 text-center ">
                  <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Food Delivery App. All rights
                    reserved.
                  </p>
                </div>
              </footer>
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
