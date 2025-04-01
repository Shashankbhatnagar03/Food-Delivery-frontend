import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/data";

export function Categories() {
  return (
    <section className="py-10 px-4">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/menu?category=${category.id}`}
              className="group flex flex-col items-center p-4 rounded-lg border bg-card text-card-foreground shadow-sm transition-colors hover:border-primary"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-full mb-3">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-sm font-medium group-hover:text-primary">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
