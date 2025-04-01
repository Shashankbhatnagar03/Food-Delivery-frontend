import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Banner() {
  return (
    <div className="relative w-full overflow-hidden bg-primary py-10 md:py-16 ">
      <div className="container relative z-10 flex flex-col items-center text-center text-primary-foreground">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
          Delicious Food Delivered
        </h1>
        <p className="mt-4 max-w-lg text-lg md:text-xl">
          Order your favorite meals and get them delivered to your doorstep in
          minutes.
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Link href="/menu">
            <Button size="lg" variant="secondary">
              Order Now
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            View Specials
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] opacity-20 bg-cover bg-center"></div>
    </div>
  );
}
