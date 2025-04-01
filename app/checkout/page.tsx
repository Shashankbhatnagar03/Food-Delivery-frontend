"use client";
import { CheckoutForm } from "@/components/checkout/checkout-form";
import { OrderSummary } from "@/components/checkout/order-summary";

export default function CheckoutPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <CheckoutForm />
        </div>
        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
