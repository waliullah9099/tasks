import Ads from "@/components/Home/Ads/Ads";
import Banner from "@/components/Home/Banner";
import Categories from "@/components/Home/Categories/Categories";
import Features from "@/components/Home/Features/Features";
import NewArrival from "@/components/Home/NewArrival/NewArrival";

const Page = () => {
  return (
    <>
      <Banner />
      <Features />
      <Categories />
      <NewArrival />
      <Ads />
      {/* <TrendingProducts /> */}
    </>
  );
};

export default Page;
