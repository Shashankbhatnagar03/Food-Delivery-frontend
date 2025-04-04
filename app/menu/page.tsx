"use client";

import { Suspense } from "react";
import { CategoryFilter } from "@/components/menu/category-filter";
import { MenuGrid } from "@/components/menu/menu-grid";

export default function MenuPage() {
  return (
    <div className="container py-10 px-6">
      <h1 className="text-3xl font-bold mb-6">Menu</h1>
      <Suspense fallback={<div>Loading filters...</div>}>
        <CategoryFilter />
      </Suspense>
      <Suspense fallback={<div>Loading menu...</div>}>
        <MenuGrid />
      </Suspense>
    </div>
  );
}
