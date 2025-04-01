"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCart } from "@/contexts/card-context";
import Link from "next/link";

export function CartSummary() {
  const { totalPrice, totalItems } = useCart();

  const deliveryFee = totalPrice > 0 ? 2.99 : 0;
  const subtotal = totalPrice;
  const total = subtotal + deliveryFee;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex justify-between">
          <span>Subtotal ({totalItems} items)</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Link href="/checkout" className="w-full">
          <Button className="w-full" disabled={totalItems === 0}>
            Proceed to Checkout
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
