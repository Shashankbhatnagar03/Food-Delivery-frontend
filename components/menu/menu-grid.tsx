"use client";

import { menuItems, getItemsByCategory } from "@/lib/data";
import { MenuItemCard } from "./menu-item-card";
import { useSearchParams } from "next/navigation";

export function MenuGrid() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category");

  const displayedItems = categoryId
    ? getItemsByCategory(categoryId)
    : menuItems;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {displayedItems.map((item) => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
