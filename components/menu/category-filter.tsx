"use client";

import { categories } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

export function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  const handleCategoryChange = (categoryId: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (categoryId) {
      params.set("category", categoryId);
    } else {
      params.delete("category");
    }

    router.push(`/menu?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Button
        variant={!currentCategory ? "default" : "outline"}
        onClick={() => handleCategoryChange(null)}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={currentCategory === category.id ? "default" : "outline"}
          onClick={() => handleCategoryChange(category.id)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
}
