import HeroSection from "@/components/home/HeroSection";
import Navbar from "@/components/layout/Navbar";
import AlsoLikeSection from "@/components/home/AlsoLikeSection";
import PopularDestinations from "@/components/home/PopularDestinations";
import Footer from "@/components/layout/Footer";
import AdventureTypeSlider from "@/components/home/AdventureTypeSlider";
import TopPackages from "@/components/home/TopPackages";
import TravelSlider from "@/components/home/TravelSlider";
import PageWrapper from "@/components/layout/PageWrapper";

export default function Home() {
  return (
    <>
      <Navbar />

      <PageWrapper>
        <HeroSection />
        <AdventureTypeSlider />
        <TopPackages />
        <PopularDestinations />
        <AlsoLikeSection />
        <TravelSlider />
        <Footer />
      </PageWrapper>
    </>
  );
}
