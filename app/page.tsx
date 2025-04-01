import { Banner } from "@/components/home/banner";
import { Categories } from "@/components/home/categories";
import { FeaturedItems } from "@/components/home/featured-items";

export default function Home() {
  return (
    <div>
      <Banner />
      <Categories />
      <FeaturedItems />
    </div>
  );
}
