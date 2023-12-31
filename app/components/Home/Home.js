import Hero from "./Hero";
import HomeProductsSection from "./HomeProductsSection";
import MiniBanner from "./MiniBanner";
import { TopCategory } from "./TopCategory/TopCategory";
import JewelleryBanner from "./JewelleryBanner/JewelleryBanner";
import NewArrivalsBanner from "./NewArrivalsBanner/NewArrivalsBanner";
import TrendCategory from "./TrendCategory/TrendCategory";

export default function Home({ products }) {
  return (
    <div>
      <Hero />
      <TopCategory />
      <NewArrivalsBanner />
      <HomeProductsSection products={products} />
      <JewelleryBanner />
      <MiniBanner />
      <TrendCategory />
    </div>
  );
}
