import { getFeaturedItems } from "@/lib/data";
import { MenuItemCard } from "@/components/menu/menu-item-card";

export function FeaturedItems() {
  const featuredItems = getFeaturedItems();

  return (
    <section className="py-10 px-4">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">Featured Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
