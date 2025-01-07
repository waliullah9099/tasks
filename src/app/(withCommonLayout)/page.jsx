import Ads from "@/Components/Home/Ads/Ads";
import Banner from "@/Components/Home/Banner";
import Categories from "@/Components/Home/Categories/Categories";
import Features from "@/Components/Home/Features/Features";
import NewArrival from "@/Components/Home/NewArrival/NewArrival";
import TrendingProducts from "@/Components/Home/TrendingProducts/TrendingProducts";

const Page = () => {
  return (
    <>
      <Banner />
      <Features />
      <Categories />
      <NewArrival />
      <Ads />
      <TrendingProducts />
    </>
  );
};

export default Page;
