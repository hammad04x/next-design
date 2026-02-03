
import HeroSection from "@/components/home/HeroSection";
import SliderSection from "@/components/home/AlsoLikeSection";
import Navbar from "@/components/layout/Navbar";
import AlsoLikeSection from "@/components/home/AlsoLikeSection";
import PopularDestinations from "@/components/home/PopularDestinations";
import SliderSection from "@/components/home/SliderSection";
import Footer from "@/components/layout/Footer";

import AdventureTypeSlider from "@/components/home/AdventureTypeSlider";
import TopPackages from "@/components/home/TopPackages";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="mt-32">
        <HeroSection />
      </div>
      <PopularDestinations/>
      <AlsoLikeSection/>
      {/* <HeroSection />
      <SliderSection /> */}
      <Footer/>
    </>
      <AdventureTypeSlider />
      <TopPackages />
        </>
  );
}
