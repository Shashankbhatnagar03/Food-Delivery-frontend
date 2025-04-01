"use client";
import { CartItemComponent } from "@/components/cart/cart-item";
import { CartSummary } from "@/components/cart/cart-summary";
import { useCart } from "@/contexts/card-context";

export default function CartPage() {
  return (
    <div className="container py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <CartItems />
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  );
}

function CartItems() {
  "use client";

  const { items, totalItems } = useCart();

  if (totalItems === 0) {
    return (
      <div className="rounded-lg border p-8 text-center">
        <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground mb-4">
          Add some delicious items from our menu to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border p-6">
      {items.map((item) => (
        <CartItemComponent key={item.id} item={item} />
      ))}
    </div>
  );
}
